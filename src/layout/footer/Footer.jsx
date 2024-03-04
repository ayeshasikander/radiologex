import React from "react";
import { FooterContainer, FooterBottom } from "../../services/footer";
import footerlogo from '../../assets/icons/footerlogo.png';
import group12 from '../../assets/images/Group 12.png';
import { socialIcon, storeCards } from "../../services/socialIcon";
import { Typography, Card, Stack } from "@mui/material";
import { footerData } from "../../services/footerData";


const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_header">
        <div className="curve">

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#FFFFFF"
              fillOpacity="1"
              d="M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,122.7C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="device">
            <img className="mobileImg" src={group12} alt="" />
            <div className="store">
              <Typography className="store_title">Available on Any
                Device</Typography>
              <div className="cards">
                {
                  storeCards.map((item) => (
                    <Card className='store_card' key={item.id}>
                      {item.icon}
                      <Typography className="store_card_text" dangerouslySetInnerHTML={{ __html: item.text }} />

                    </Card>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom className="footer_bottom">

        <img className="footerlogo" src={footerlogo} alt="Radiologex" />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          className="stack_container"
        >
          {
            footerData.map((item) => (
              <div className="stack_box" key={item.id}>
                <Typography className="footer_title">{item.title}</Typography>
                {item.subTitle.map((subItem, index) => (
                  <Typography className="title_items" key={index}>{subItem}</Typography>
                ))}
              </div>
            ))
          }

        </Stack>

        <div className="reserved_container">
          <Typography className="reserved_sitemap">Sitemap | Terms & Conditions | Privacy Policy | Cookies Policy | Certification</Typography>
          <div className="social_icon">
            {
              socialIcon.map((item) => (
                <a href="/" key={item.id} className="icon-root">{item.icon}</a>
              ))
            }

          </div>
        </div>
        <Typography className="reserved_text">© 2018-2023 Radiologex. All rights reserved.</Typography>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
