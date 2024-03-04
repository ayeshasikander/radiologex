import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MobileMenu } from '../../services/header';
import {  menuItems } from './menu';
const DrawerComponent = ({ handleDrawerToggle }) => {
    return (
        <MobileMenu>
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    Radiologex
                </Typography>
                <Divider />
                <List>
                    <Box className="menu">
                    {
                                menuItems.map((item,index) => (
                                    <Button
                                        key={index}
                                        className='item'
                                    >
                                        {item.label}
                                        {item.dropdown && <KeyboardArrowDownIcon />}
                                    </Button>

                                ))
                            }
                        {/* <Button className='item'>Home</Button>
                        <Button className='item'>Radiologex <KeyboardArrowDownIcon /></Button>
                        <Button className='item'>Explore <KeyboardArrowDownIcon /></Button>
                        <Button className='item'>FAQs</Button> */}
                        <Button variant="h6" className='button'>Contact Us</Button>
                    </Box>
                </List>
            </Box>
        </MobileMenu>
    );
};

export default DrawerComponent;
