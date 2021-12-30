import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import { Link, NavLink } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { Box, Drawer, AppBar, Typography, IconButton, Button, Breadcrumbs } from '@mui/material';
import CreateAplication from '../../custom/CreateAplication';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppSelector } from 'app/hooks';
import {ReactComponent as AboutIcon} from 'assets/icons/about.svg'
import {ReactComponent as DashboardIcon} from 'assets/icons/dashboard.svg'
import {ReactComponent as NftIcon} from 'assets/icons/nft.svg'
import {ReactComponent as UserIcon} from 'assets/icons/user.svg'
import {ReactComponent as LoginIcon} from 'assets/icons/login.svg'

const Header = ({ auth, handleLogout, error, props }) => {
    const drawerWidth = 244;
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const breadcrumbStore = useAppSelector(state => state?.rootReducer?.breadcrumbReducers?.breadcrumbStore ?? 'default');

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const itemStyle = {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "17px",
        color: "#58667E",
        marginLeft: "14px"
    }

    const logoutStyle = {
        margin: "0 !important",
        width: "100%",
        textTransform: "inherit",
        justifyContent: "flex-start",
        padding: "8px 16px",
        fontStyle: "normal !important",
        fontWeight: "500 !important",
        fontSize: "1rem !important",
        lineHeight: "17px !important",
        color: "#EA3943 !important",

        "img": {
            marginRight: "14px"
        }
    }

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
                <NavLink exact to='/'>
                    <ListItem button key='Về TSS'>
                        <AboutIcon />
                        <ListItemText sx={itemStyle}
                            primary='Về TSS' />
                    </ListItem>
                </NavLink>
                {auth
                    ?
                    <>
                        <NavLink exact to='/manage'>
                            <ListItem button key='Quản lý hồ sơ'>
                                <DashboardIcon />
                                <ListItemText sx={itemStyle}
                                    primary='Quản lý hồ sơ' />
                            </ListItem>
                        </NavLink>
                        <NavLink exact to='/stamp-nft'>
                            <ListItem button key='Con dấu NFT'>
                                <NftIcon />
                                <ListItemText sx={itemStyle}
                                    primary='Con dấu NFT' />
                            </ListItem>
                        </NavLink>
                    </>
                    :
                    null
                }
                <Divider sx={{ margin: "14px 0 !important" }} />
                {auth
                    ?
                    <>
                        <NavLink exact to="/user">
                            <ListItem button key='User Name'>
                                <UserIcon />
                                <ListItemText sx={itemStyle}
                                    primary='User Name' />
                            </ListItem>
                        </NavLink>
                        <Button sx={logoutStyle} onClick={handleLogout}>
                            <img src="/assets/icons/logout.svg" alt="logout" />Đăng xuất
                        </Button>
                    </>
                    :
                    <NavLink exact to="/login">
                        <ListItem button key='Đăng nhập'>
                            <LoginIcon />
                            <ListItemText sx={itemStyle}
                                primary='Đăng nhập' />
                        </ListItem>
                    </NavLink>
                }
            </Box>
            {auth
                ?
                <Box sx={{ marginTop: "auto" }}>
                    <CreateAplication />
                </Box>
                :
                null
            }
        </List>
    );

    const RenderedListItems = () => {
        return (
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbStore.breadcrumbs && breadcrumbStore.breadcrumbs.map((item, index, breadcrumbs) => (
                        index == breadcrumbs.length - 1
                        ?
                        <Typography key={index} variant='h5'> {item.label} </Typography>
                        :
                        <Typography key={index} sx={{color: "#A6B0C3"}} variant='h5'> {item.label} </Typography>
                ))}
            </Breadcrumbs>
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: '#FFFFFF',
                    boxShadow: 'none',
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
                    <Breadcrumbs aria-label="breadcrumb">
                        <RenderedListItems/>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
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

export default Header