import React from 'react';
import { RDeeGoContainer } from '../services/AdvantageWeb';
import { Typography, Stack, Card } from '@mui/material';
import { rdeegoData } from '../services/rdeego';
import rectangle from '../assets/images/Rectangle 18.png';
import mobile1128 from '../assets/images/mobile 1128.png';

const RDeeGo = () => {
    return (
        <RDeeGoContainer>
            <img className='rectangle' src={rectangle} alt="rectangle" />
            <div className="header_section">
                <Typography className='rdeego_title'>YOUR HEALTH. YOUR DATA.</Typography>
                <Typography className='rdeego_subtitle'>R-DEE <span>Go™</span></Typography>
                <Typography className='rdeego_subtitle'>Gives Power To The Patient.</Typography>
                <Typography className='rdeego_desc'>The first PHR gives full custodianship and control to the patient user.
                    <br />
                    Your entire healthcare record is permanently secured and accessible anywhere globally <br />
                    from the palm of your hand.</Typography>
            </div>
            <div className="bottom_section">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    className='rdeego_stack'
                >

                    <Stack spacing={{ xs: 1, sm: 2 }}
                        direction="row" useFlexGap flexWrap="wrap"
                        className='rdeego_cards_stack'>
                        {
                            rdeegoData.map((data) => (
                                <Card className={`rdeego_card-${data.id}`} key={data.id}>
                                    <img className={`rdeego_use_icon-${data.id}`} src={data.icon} alt="AdvantageIcon" />
                                    <Typography className='rdeego_card_title'>{data.title}</Typography>
                                    <Typography className='rdeego_card_desc'>{data.desc}</Typography>
                                </Card>
                            ))
                        }

                    </Stack>
                    <div className="rdeedo_image_stack">
                        <img className='rdeego_image' src={mobile1128} alt="" />
                    </div>
                </Stack>
            </div>
        </RDeeGoContainer>
    )
}

export default RDeeGo;
