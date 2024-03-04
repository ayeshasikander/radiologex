import React from 'react';
import { Typography, Container, Stack, Box } from '@mui/material';
import { ContentContainer } from '../services/get-r-dee';
import bgImg from '../assets/images/Group 8468.png';
import GetCard from './cards/GetCard';

const Content = () => {

    return (
        <ContentContainer >

            <Container maxWidth="lg" className='get_rdee_main'>
                <Stack
                    direction={{ xs: 'column-reverse', sm: 'row' }}
                    className='getredd_stack'
                >
                    <Box
                        className='getrdee_left'
                        my={4}
                        display="flex"
                        alignItems="center"
                        gap={4}
                       
                    >
                        <img src={bgImg} alt="imageMobile" />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={"column"}
                        alignItems="flex-start"
                        className='paragraph'
                    >
                        <Typography
                            sx={{
                                fontSize: "2.4rem",
                                fontWeight: "600",

                            }}>
                            <span className='title'>
                                GET R-DEE.
                            </span>
                            <br />
                            Meet the R-DEE Network.</Typography>
                        <br />
                        <Typography className='text1'>The Radiologex Digital Encryption Environment (R-DEE, pronounced "ahr-dee")
                            is a Web3-powered, next-generation distributed global data network of thousands
                            of nodes that help secure, authenticate, and deliver healthcare communication,
                            productivity, and data quickly and easily.
                            <br />
                            R-DEE features an unparalleled identity-proofing and tracking technology that
                            produces cryptographically secured and unique Healthcare Digital-ID’s (HD-ID),
                            ushering in a new era of health data security, portability, global access to essential
                            services, and drastically improved efficiency.
                            <br />
                            R-DEE’s modular structure allows users to use any part of the entire ecosystem.
                            Leading with a data sharing and communication module, the R-DEE network
                            includes access to an entire productivity suite allows users to do more in less
                            time, all on one screen.
                            <br />
                            A vendor-neutral technology stack and interoperability allow seamless integration.
                            and use for all healthcare professionals, including all practitioners, providers, and
                            industry affiliates.
                            <br />
                            And for patients, it features a standalone App that finally achieves what no other
                            personal health record solution (PHR) could: full authentication and custodianship
                            of one’s complete health record, secured and available at their fingertips, ready to
                            access and share at anytime, anywhere in the world.
                            </Typography>
                    </Box>
                </Stack>
                <GetCard />
            </Container>
        </ContentContainer>
    )
}

export default Content
