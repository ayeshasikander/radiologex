import styled from "styled-components";

export const TestimonialContainer=styled.div`
background-color: #F9F9F9;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;

.testimonial{
    font-family: ${({ theme }) => theme.fontNeue};
    font-size: 2.5rem;
    font-weight: 600;
}

`;