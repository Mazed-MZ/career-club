import React from 'react';
import './Header.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import Chip from '@mui/material/Chip';


export default function Header() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  return (
    <div>
      <div className='notice-bar'>
      <Chip label="Latest" color="error" sx={{width:'110px', height:'65px', fontSize:'25px',mr:'1%'}}/>
        <Marquee style={{fontSize:'25px', padding:'15px'}}>
        🟣 In upcomming election the job market is hamperd deeply. 🟣 Amazon will open their headoffice in Bangladesh. 🟣 Paypal will comming within 3 months in Bangladesh
        </Marquee>
      </div>
      <div className='header-container'>
        <div className='header-img'>
          <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/7/2023_7$largeimg_2099767129.jpg" alt="" />
        </div>
        <div className='header-text'>
          <h1>One Step <br /> Closer To Your <br /><span style={{ color: '#7E90FE' }}>Dream Job</span></h1>
          <p>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
          <span className='button'>
            <Link to="/signup"><ColorButton variant="contained">Get Started</ColorButton></Link>
          </span>
        </div>
      </div>
    </div>
  )
}
