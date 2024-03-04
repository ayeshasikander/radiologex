import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SwipeableViews from 'react-swipeable-views';

const images = [
    {
        label: 'Trusona',
        title: 'ORI EISEN, Founder & CEO',
        feedback: 'Trusona’s partnership with Radiologex meets the healthcare industry’s strict standards for security, providing passwordless authentication and identity proofing within the platform, mitigating the eight most common attack vectors. Together, Radiologex and Trusona offer healthcare professionals the ability to establish fast, secure communications channels and data transmissions from anywhere — and without the need for a password.',
        rating: 3,
    },
    {
        label: 'Trusona2',
        title: 'ORI EISEN, Founder & CEO',
        feedback: 'Trusona’s partnership with Radiologex meets the healthcare industry’s strict standards for security, providing passwordless authentication and identity proofing within the platform, mitigating the eight most common attack vectors. Together, Radiologex and Trusona offer healthcare professionals the ability to establish fast, secure communications channels and data transmissions from anywhere — and without the need for a password.',
        rating: 4,
    },
    {
        label: 'Trusona3',
        title: 'ORI EISEN, Founder & CEO',
        feedback: 'Trusona’s partnership with Radiologex meets the healthcare industry’s strict standards for security, providing passwordless authentication and identity proofing within the platform, mitigating the eight most common attack vectors. Together, Radiologex and Trusona offer healthcare professionals the ability to establish fast, secure communications channels and data transmissions from anywhere — and without the need for a password.',
        rating: 5,
    }
];

function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        }, 2000);
        return () => clearInterval(interval);
    }, [maxSteps]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: 700, flexGrow: 1, margin: '1rem' }}>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {activeStep === index && (
                            <Box p={2} sx={{ bgcolor: '#FFFFFF', textAlign: 'center' }}>
                                <Typography variant="h5">{step.label}</Typography>
                                <Typography sx={{ color: '#FD4B4B' }}>{step.title}</Typography>
                                <Typography>{step.feedback}</Typography>
                                <Box>
                                    {[...Array(step.rating)].map((_, i) => (
                                        <StarIcon key={i} sx={{ color: '#F5D028' }} />
                                    ))}
                                    {[...Array(5 - step.rating)].map((_, i) => (
                                        <StarOutlineIcon key={i} sx={{ color: '#F5D028' }} />
                                    ))}
                                </Box>
                            </Box>
                        )}
                    </div>
                ))}
            </SwipeableViews>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: '#F9F9F9',
                borderRadius: '0.5rem',
                padding: '1rem',
            }}>
                <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    <KeyboardArrowLeft sx={{ color: '#FD4B4B', bgcolor: '#FFFFFF', borderRadius: '2.5rem', padding: '.4rem' }} />
                </Button>
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    <KeyboardArrowRight sx={{ color: '#FD4B4B', bgcolor: '#FFFFFF', borderRadius: '2.5rem', padding: '.4rem' }} />
                </Button>
            </Box>

        </Box>
    );
}

export default Slider;
