import React from 'react';
import './AppliedJobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function JobReview({ jobdata, handleRemoveCart }) {
    const { id, key, img, title, company, location, salary, type, duration, quantity } = jobdata;
    return (
        <div className='review-box'>
            <div className='review-data'>
                <img src={img} alt="" />
                <div className='review-items'>
                    <h2>{title}</h2>
                    <h3>{company}</h3>
                    <span>
                        <p><FontAwesomeIcon icon={faLocationCrosshairs} /> {location}</p> <p><FontAwesomeIcon icon={faMoneyBill} /> {salary}</p>
                        <p>Total Applicants: {quantity}</p>
                    </span>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" color="success">{type}</Button>
                        <Button variant="outlined" color="success">{duration}</Button>
                        <button className='details-btn' onClick={() => handleRemoveCart(id)}><a href='/appliedjobs'>Remove Jobs</a></button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
