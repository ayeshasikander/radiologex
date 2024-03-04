import React from 'react'
import Slider from '../components/Slider'
import { TestimonialContainer } from '../services/testimonial'
import { Typography } from '@mui/material'

const Testimonial = () => {
    return (
        <TestimonialContainer>
            <Typography className='testimonial'>Testimonials</Typography>
            <Slider />
        </TestimonialContainer>
    )
}

export default Testimonial
