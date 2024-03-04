import React from 'react';
import { Card, Typography, Button, Link, Stack } from '@mui/material';
import { PressContainer } from '../services/thepress';
import { pressData } from '../services/pressData';
import { IoArrowForwardSharp } from "react-icons/io5";

const Press = () => {
  return (
    <PressContainer>
      <div className="press_header">
        <Typography className='press_title'>In The Press</Typography>
        <Button className='press_button' variant='contained'>View All</Button>
      </div>
      <Stack
        spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap"
        className="press_cards_container">
        {
          pressData.map((item) => (
            <Card className={`press_card-${item.id}`} key={item.id}>
              <div className="card_img">
                <img src={item.image} alt="" />
              </div>
              <div className="card_info">
                <Typography className='press_card_title'>{item.title}</Typography>
                <Typography className='press_card_desc'>{item.desc}</Typography>
                <Link className='press_card_link'>Read More <IoArrowForwardSharp /></Link>
              </div>
            </Card>
          ))
        }

      </Stack>

    </PressContainer>

  )
}

export default Press
