import { Box } from '@mui/material';
import Sidenav, { DrawerHeader } from '../SideNav.jsx/Sidenav';

const AboutUs = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Sidenav />
                <h1>Hello about</h1>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                </Box>
            </Box>

        </>
    );
};

export default AboutUs;