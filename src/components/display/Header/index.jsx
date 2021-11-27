import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const Leftbar = () => {
    let listItemsTop = [
        {
            'icon': '/assets/icons/about.svg',
            'content': 'Về TSS',
            'link': '/'
        },
        {
            'icon': '/assets/icons/dashboard.svg',
            'content': 'Quản lý hồ sơ',
            'link': '/'
        },
        {
            'icon': '/assets/icons/nft.svg',
            'content': 'Con dấu NFT'
        }
    ]

    let lisItemsBottom = [
        {
            'icon': '/assets/icons/user.svg',
            'content': 'User Name'
        },
        {
            'icon': '/assets/icons/login.svg',
            'content': 'Đăng nhập',
            'link': '/login'
        },
        {
            'icon': '/assets/icons/logout.svg',
            'content': 'Đăng xuất'
        },
    ]

    return (
        <Box sx={{
            maxWidth: "244px",
            width: "100%",
            boxShadow: "0px 4px 15px rgb(0 0 0 / 5%)",
            minHeight: "100vh",
            height: "auto"}}>
            <Toolbar sx={{paddingTop: "25px"}}>
                <img src='/assets/images/TSS-logo.svg' alt='TSS' />
            </Toolbar>
            <List sx={{
                padding: "0 15px",
                marginTop: "50px",
                minHeight: "calc(100vh - 190px)",
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px"}}>
                {listItemsTop.map((item, index) => (
                    <Link to={item.link}>
                        <ListItem button key={item.content}>
                            <img src={item.icon} alt={item.content} />
                            <ListItemText sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#58667E",
                                marginLeft: "14px"}}
                                primary={item.content} />
                        </ListItem>
                    </Link>
                ))}
                <Divider sx={{margin: "14px 0 !important"}} />
                {lisItemsBottom.map((item, index) => (
                    <Link to={item.link}>
                        <ListItem button key={item.content}>
                            <img src={item.icon} alt={item.content} />
                            <ListItemText sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#58667E",
                                marginLeft: "14px"}}
                                primary={item.content} />
                        </ListItem>
                    </Link>
                ))}

                <Button className="button" variant="contained">Tạo hồ sơ</Button>
            </List>
        </Box>
    )
}

export default Leftbar