import React from 'react';
import { ModuleContainer } from '../services/realTime';
import { Typography, Stack } from '@mui/material';
import group1 from '../assets/icons/Group 48 (2).png';
import group2 from '../assets/icons/Group 48 (1).png';

const LaunchModule = () => {
    return (
        <ModuleContainer>
            <div className="module">
                <Typography className='m-title'>Introducing The Two Launch Modules.</Typography>
                <Typography className='h-title'>Available 7-1-2023:</Typography>

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    className='stack-container'

                >
                    <div className="img-container">
                        <img src={group1} alt="" />
                    </div>
                    <div className="desc-container">
                        <Typography className='title'>R-DEE </Typography>
                        <Typography className='sub-title'>Empowers The Industry.</Typography>
                        <Typography className='h-desc'>One app that connects global healthcare like never before.
                            Communciate within your healthcare oranization or the globe.
                            Produce, optimize, and share healthcare data, all
                            on one screen.</Typography>
                    </div>
                </Stack>

                <Stack
                    direction={{ sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    className='stack-container-2'

                >

                    <div className="desc-container-2">
                        <Typography className='title'>R-DEE </Typography>
                        <Typography className='sub-title'>Enfranchises Patients.</Typography>
                        <Typography className='h-desc'>A PHR app unlike any else. Full identity-proofing, built-in
                            authentication and automatic data uploads, gives full
                            custodianship to the patients for the first time. Allows
                            anyone on the globe to control and own their full health
                            records and share it anywhere, at anytime.</Typography>
                    </div>
                    <div className="img-container">
                        <img src={group2} alt="" />
                    </div>
                </Stack>
            </div>
        </ModuleContainer>
    )
}

export default LaunchModule
