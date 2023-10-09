import React from 'react';
import { Box } from '@mui/material';
import Sidenav, { DrawerHeader } from '../SideNav.jsx/Sidenav';

const Settings = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <h1>Hello setting</h1>
                </Box>
            </Box>

        </>
    );
};

export default Settings;