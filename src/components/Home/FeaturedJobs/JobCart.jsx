import React from 'react';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function JobCart({ jobInfo, handleJobCart }) {
    const { id, img, title, company, location, salary, type, duration } = jobInfo;
    return (
        <div className='job-box'>
            <div className='job-data'>
                <img src={img} alt="" />
                <h2>{title}</h2>
                <h3>{company}</h3>
                <span>
                    <p><FontAwesomeIcon icon={faLocationCrosshairs} /> {location}</p> <p><FontAwesomeIcon icon={faMoneyBill} /> {salary}</p>
                </span>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" color="success">{type}</Button>
                    <Button variant="outlined" color="success">{duration}</Button>
                    <button className='details-btn' onClick={()=>handleJobCart(id)}>View Details</button>
                </Stack>
            </div>
        </div >
    )
}
