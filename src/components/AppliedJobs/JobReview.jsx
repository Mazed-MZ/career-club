import React from 'react';
import './AppliedJobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

export default function JobReview({ jobdata, handleRemoveCart }) {
    const { id, key, img, title, company, location, salary, type, duration, quantity, payment, notice, amount } = jobdata;
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
                        <p>Payment: {amount}</p>
                    </span>
                </div>
                <div className='button-group'>
                    <Stack divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}>
                        <Chip label={type} color="primary" variant="outlined" />
                        <Chip label={duration} color="success" variant="outlined" />
                        <Link to="/appliedjobs"><Button variant="outlined" color="error" sx={{ width: '100%' }} onClick={() => handleRemoveCart(id)}>Remove Jobs</Button></Link>
                        <Link to={`/jobdetails/${id}`}><Button variant="outlined" color="primary" sx={{ width: '100%' }}>Details</Button></Link>
                        {
                            notice ? <Link to={`/payment/${id}`}><Button variant="outlined" sx={{ width: '100%', color: 'green' }}>{payment}</Button></Link> : <Chip label="Applied" color="success" variant="outlined" />
                        }
                    </Stack>
                </div>
            </div>
        </div>
    )
}
