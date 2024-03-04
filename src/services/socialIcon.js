import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import AppleIcon from '@mui/icons-material/Apple';
import radilogo from '../assets/icons/radiologex.png';

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
  {
    id: 4,
    icon: <GrLinkedinOption />,
  },
];

export const storeCards = [
  {
    id: 1,
    icon: <AppleIcon className="icon-style" />,
    text: "Download on the <span style={{color: 'green'}}>App Store</span>",
  },
  {
    id: 2,
    icon: <BiLogoPlayStore className="icon-style" />,
    text: "GET IT ON  <span style={{color: 'blue'}}>Google Play</span>",
  },
  {
    id: 3,
    icon: <img className="icon" src={radilogo} alt="" />,
    text: "ACCESS DIRECT VIA <span style={{color: 'orange'}}>R-DEE Web</span>",
  },
];
