import React from 'react';
import { Stack, Typography, Button, Card } from '@mui/material';
import { web3Data } from '../services/web3Data';
import { AdvantageContainer, Web3Section } from '../services/AdvantageWeb';

const Advantage = () => {
    return (
        <AdvantageContainer>
            <Web3Section>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    className='web3_stack'
                >
                    <div className="advantage_stack">
                        <Typography className="advantage_title">The R-DEE Advantage
                            Via Web3</Typography>
                        <Typography className="advantage_desc">Our data network features thousands of independent and
                            segregated nodes, which provide unrivalled security, speed,
                            and scale.</Typography>
                        <Typography className="advantage_subtitle">And it’s Better For The Planet*.</Typography>
                        <Typography className="advantage_desc">*Distributed network via PoS/PoV technology utilizes up to 90%
                            fewer energy resources than legacy data networks (centralized
                            data infrastructure).</Typography>
                        <Button className='advantage_button'>Read More</Button>
                    </div>
                    <Stack spacing={{ xs: 1, sm: 2 }}
                        direction="row" useFlexGap flexWrap="wrap"
                        className='cards_stack'>
                        {
                            web3Data.map((benefit) => (
                                <Card className={`advantage_card-${benefit.id}`} key={benefit.id}>
                                    <img className={`web_icon-${benefit.id}`} src={benefit.webIcon} alt="webAdvantageIcon" />
                                    <Typography className='advantage_card_title'>{benefit.webTitle}</Typography>
                                    <Typography className='advantage_card_desc'>{benefit.webDesc}</Typography>
                                    <Typography className='advantage_card_desc2'>{benefit.webDesc2}</Typography>
                                </Card>
                            ))
                        }

                    </Stack>
                </Stack>
            </Web3Section>
        </AdvantageContainer>
    )
}

export default Advantage
