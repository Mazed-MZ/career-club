import React from 'react';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function JobCart({ jobInfo, handleJobCart }) {
    const { id, key, img, title, company, location, salary, type, duration } = jobInfo;
    return (
        <div className='job-box'>
            <div className='job-data'>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <h3>{company}</h3>
                <span>
                    <p><FontAwesomeIcon icon={faLocationCrosshairs} /> {location}</p> <p><FontAwesomeIcon icon={faMoneyBill} /> {salary}</p>
                </span>
                <Stack spacing={1} direction="row">
                    <Chip label={type} color="primary" variant="outlined" />
                    <Chip label={duration} color="success" variant="outlined" />
                    <button className='details-btn' onClick={() => handleJobCart(id)}>Apply</button>
                    <Link to={`/jobdetails/${id}`}><button className='details-btn'>Details</button></Link>
                </Stack>
            </div>
        </div >
    )
}
