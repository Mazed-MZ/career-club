import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export default function Navbar() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));
    return (
        <div>
            <nav className='navbar'>
                <Link to='/home'><a><h3>Career Club</h3></a></Link>
                <div className='nav-link'>
                    <Link to='/'><a>Statistics</a></Link>
                    <Link to='/'><a>Applied Jobs</a></Link>
                    <Link to='/'><a>Blog</a></Link>
                </div>
                <ColorButton variant="contained" sx={{m:4}}>Start Applying</ColorButton>
            </nav>
        </div>
    )
}
