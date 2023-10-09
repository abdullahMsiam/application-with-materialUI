import { Box, Typography } from '@mui/material';
import React from 'react';
import Sidenav, { DrawerHeader } from '../SideNav.jsx/Sidenav';

const MainPage = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <h1>Hello</h1>
                </Box>
            </Box>

        </>
    );
};

export default MainPage;