import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/images/Group (1).png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Wrapper, DesktopMenu } from '../../services/header';
import DrawerComponent from './Drawer';
import { menuItems } from './menu';


const drawerWidth = 240;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Wrapper>
            <Box className="box">
                <AppBar component="nav" sx={{ bgcolor: '#17171D', boxShadow: 'none' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img className='logo' src={logo} alt="Radiologex" />
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ ml: 'auto', display: { xs: 'block', sm: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <DesktopMenu sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            {
                                menuItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        className='item'
                                    >
                                        {item.label}
                                        {item.dropdown && <KeyboardArrowDownIcon />}
                                    </Button>

                                ))
                            }

                            <Button variant="h6" className='button'>Contact Us</Button>
                        </DesktopMenu>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}>
                        <DrawerComponent handleDrawerToggle={handleDrawerToggle} />
                    </Drawer>
                </nav>
            </Box>
        </Wrapper>
    );
}

export default Header;
