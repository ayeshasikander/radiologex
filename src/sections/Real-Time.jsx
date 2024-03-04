import React from 'react';
import { RealtimeContainer } from '../services/realTime';
import { Typography, Stack, Card } from '@mui/material';
import i1 from '../assets/icons/Mask group (1).png';
import i2 from '../assets/icons/Mask group (2).png';
import i3 from '../assets/icons/Mask group.png';

const cardItem = [
    {
        id: 1,
        image: i2,
        title: "66 Countries",
    },
    {
        id: 2,
        image: i1,
        title: "2500 Global Nodes",
    },
    {
        id: 3,
        image: i3,
        title: "1800 Terabytes of Healthcare Data Secured",
    }
]
const RealTime = () => {
    return (
        <RealtimeContainer>
            <Typography className='text'>BLAZING FORWARD. BLAZING FAST. REAL TIME</Typography>
            <div className='card-wrapper'>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                >
                    {
                        cardItem.map((item) => (
                            <Card className='card' key={item.id}>
                                <img src={item.image} alt="" />
                                <Typography className='title'>{item.title}</Typography>
                            </Card>
                        ))
                    }
                </Stack>
            </div>
        </RealtimeContainer>
    )
}

export default RealTime
