import React from 'react';
import List from '@mui/material/List';
import { Link, NavLink } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Box, Drawer, AppBar, Typography, IconButton } from '@mui/material';
import CreateAplication from '../../custom/CreateAplication';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';

const Leftbar = (props) => {
    const drawerWidth = 244;
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let listItemsTop = [
        {
            'icon': '/assets/icons/about.svg',
            'content': 'Về TSS',
            'link': '/'
        },
        {
            'icon': '/assets/icons/dashboard.svg',
            'content': 'Quản lý hồ sơ',
            'link': '/manage'
        },
        {
            'icon': '/assets/icons/nft.svg',
            'content': 'Con dấu NFT',
            'link': '/stamp-nft'
        }
    ]

    let lisItemsBottom = [
        {
            'icon': '/assets/icons/user.svg',
            'content': 'User Name',
            'link': '/user'
        },
        {
            'icon': '/assets/icons/login.svg',
            'content': 'Đăng nhập',
            'link': '/login'
        },
        {
            'icon': '/assets/icons/logout.svg',
            'content': 'Đăng xuất',
            'link': '/'
        },
    ]

    const drawer = (
        <List sx={{
            padding: "0 15px",
            minHeight: "calc(100vh - 50px)",
            display: "flex",
            flexDirection: "column",
            marginBottom: "50px",
            height: "calc(100% - 50px)"
        }}>
            <Toolbar sx={{ display: "flex !important" }}>
                <img src='/assets/images/TSS-logo.svg' alt='TSS' />
            </Toolbar>
            <Box mt={5}>
                {listItemsTop.map((item, index) => (
                    <NavLink exact to={item.link}>
                        <ListItem button key={item.content}>
                            <img src={item.icon} alt={item.content} />
                            <ListItemText sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#58667E",
                                marginLeft: "14px",
                            }}
                                primary={item.content} />
                        </ListItem>
                    </NavLink>
                ))}
                <Divider sx={{ margin: "14px 0 !important" }} />
                {lisItemsBottom.map((item, index) => (
                    <NavLink exact to={item.link}>
                        <ListItem button key={item.content}>
                            <img src={item.icon} alt={item.content} />
                            <ListItemText sx={{
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "17px",
                                color: "#58667E",
                                marginLeft: "14px"
                            }}
                                primary={item.content} />
                        </ListItem>
                    </NavLink>
                ))}
            </Box>
            <Box sx={{ marginTop: "auto" }}>
                <CreateAplication />
            </Box>
        </List>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            {/* <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        { props.header }
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default Leftbar