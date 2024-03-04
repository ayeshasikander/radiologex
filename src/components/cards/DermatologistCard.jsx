import React from 'react';
import { Card, Typography } from '@mui/material';
import { DermaProfileCard } from '../../services/profileCards';
import { HiDotsVertical } from "react-icons/hi";
import elipsa from '../../assets/images/Ellipse 734.png';
import { HiClock } from "react-icons/hi2";

const DermatologistCard = () => {
    return (
        <DermaProfileCard>
            <Card className='derma_profile_card'>
                <div className="name">
                    <div className="profile">
                        <img className="profile_img" src={elipsa} alt="" />
                        <div className="profile_name">
                            <Typography className='profile_name_title'>Dr. Christine Michel</Typography>
                            <Typography className='profile_title'>Dermatologist, London</Typography>
                        </div>
                    </div>
                    <HiDotsVertical className='dot_icon' />
                </div>
                <Card className='auth_card'>
                    <HiClock className='auth_card_icon'/>
                    <Typography className='auth_card_text'>Authenticated- Patient File Shared</Typography>
                </Card>
            </Card>
        </DermaProfileCard>

    )
}

export default DermatologistCard
