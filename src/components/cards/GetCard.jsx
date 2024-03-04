import React from 'react';
import { Typography } from '@mui/material';
import { Wrapper, StyledCard } from '../../services/getcard';
import icon1 from '../../assets/images/Radiologex Website/Mask group (1).png';
import icon2 from '../../assets/images/Radiologex Website/Mask group.png';

const cardData = [
  {
    id: 1,
    icon: icon2,
    desc: "A full productivity suite for the 70 million (plus) healthcare-affiliated professionals and practitioners."
  },
  {
    id: 2,
    icon: icon1,
    desc: "An easy-to-use and secure PHR for the 2 billion plus people globally who have access to some form of healthcare that empowers them to own and maintain their complete health records, enabling the critically important ability to access and share on-demand."
  }
];

const GetCard = () => {
  return (
    <Wrapper>
      {cardData.map((item) => (
        <StyledCard key={item.id}>
          <img src={item.icon} alt="" />
          <Typography className='desc'>{item.desc}</Typography>
        </StyledCard>
      ))}
    </Wrapper>
  );
};

export default GetCard;
