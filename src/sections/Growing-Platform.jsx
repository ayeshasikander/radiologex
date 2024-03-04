import React from 'react';
import { GrowingContainer } from '../services/growing';
import { Button, Stack, Typography } from '@mui/material';
import growingImg from '../assets/images/image 49.png';

const GrowingPlatform = () => {
    return (
        <GrowingContainer>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                className='growing_stack'
            >
                <div className="growing_text">
                    <Typography className='growing_title'>A Growing Platform. <br />
                        One Solution.</Typography>
                    <Typography className='growing_subtitle'>R-DEE uses blockchain technology and AI to
                        improve healthcare delivery via the first
                        all-in-one health IT ecosystem.</Typography>
                    <Typography className='growing_desc'>Seven additional modules (coming soon) further SECURE,SPEED and OPTIMIZE
                        healthcare data-related productivity. Real-time healthcare curated content
                        streaming, a marketplace of verified medical goods and services,
                        smart-contract-basedborderless transactions, clinical management, a
                        completePACS system, data storage, transaction settlement, and more.
                        <br />
                        R-DEE untethers the healthcare industry from the problems of trust
                        (identification), authentication, obsolescence, and redundancy, all of
                        which severely impact healthcare quality and delivery.</Typography>
                    <Button className='growing_button'>Get R-DEE Pricing</Button>
                </div>
                <div className="growing_image">
                    <img src={growingImg} alt="" />
                </div>

            </Stack>
        </GrowingContainer>
    )
}

export default GrowingPlatform
