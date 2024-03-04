import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import bgLine from "../assets/images/Group 8203.png";
import topImg from "../assets/images/iphone13 1.png";
import { useTheme } from "styled-components";
import { RadiologexContainer } from '../services/radiologex';
import DermatologistCard from '../components/cards/DermatologistCard';

const Radiologex = () => {
    const theme = useTheme();

    return (
        <RadiologexContainer>
            <Box className="radiologex_section">

                <Box className="radiologex_top_section">
                    <Typography className="radio_title">
                        R-DEE BY RADIOLOGEX <span>®</span>
                    </Typography>
                    <Typography className="radio_subtitle">
                        Healthcare Happens Here<span>™</span>
                    </Typography>
                    <Typography className="radio_description" sx={{ width: "60%" }}>
                        The first Web3-powered network designed from the ground up for
                        global healthcare. <br /> Communicate,
                        collaborate, and produce on one powerful, ultra-secure platform.
                    </Typography>
                    <div className="radio_button">
                        <Button variant='contained' sx={{ bgcolor: theme.redColor }}>
                            Healthcare Professionals
                        </Button>
                        <Button variant='contained' sx={{ bgcolor: theme.greenColor }}>
                            Patients
                        </Button>
                    </div>
                </Box>

                <div className="radiologex_bottom_section">
                    <div className="images_Container">

                        <img className='bgLine' src={bgLine} alt="" />
                        <img className='topImg' src={topImg} alt="" />
                        <div className="radiologex_profile_popup">
                            <DermatologistCard />
                        </div>
                    </div>

                </div>

            </Box>
        </RadiologexContainer>
    )
}

export default Radiologex
