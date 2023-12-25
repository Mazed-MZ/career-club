import React, { useContext, useEffect, useState } from 'react';
import './Payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faComputer, faFlag, faLocationDot, faMoneyBill, faPhone, faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { deepPurple } from '@mui/material/colors';
import { useLoaderData } from 'react-router';
import { getShoppingCart } from '../../utilities/fakedb';

export default function Payment() {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(deepPurple[300]),
        backgroundColor: deepPurple[300],
        '&:hover': {
            backgroundColor: deepPurple[700],
        },
    }));

    const newJob = useLoaderData();

    return (
        <div>
            <div className='payment-container'>
                <img src={newJob.img} alt="" />
                <div className='payment-cart-info'>
                    <div className='payment-cart-data'>
                        <h4>Job Details</h4>
                        <p><FontAwesomeIcon icon={faMoneyBill} style={{ color: "#7e90fe", }} /> <b>Salary:</b> {newJob.salary} (Per Month)</p>
                        <p><FontAwesomeIcon icon={faBriefcase} style={{ color: "#7e90fe", }} /> <b>Post:</b> {newJob.title}</p>
                        <p><FontAwesomeIcon icon={faComputer} style={{ color: "#7e90fe", }} /> <b>Job Type:</b> {newJob.type}</p>
                        <p><FontAwesomeIcon icon={faBriefcase} style={{ color: "#7e90fe", }} /> <b>Duration:</b> {newJob.duration}</p>
                    </div>
                    <div className='payment-cart-data'>
                        <h4>Contact Information</h4>
                        <p><FontAwesomeIcon icon={faPhone} style={{ color: "#7e90fe", }} /> <b>Phone:</b> {newJob.phone}</p>
                        <p><FontAwesomeIcon icon={faLocationDot} style={{ color: "#7e90fe", }} /> <b>Address:</b> {newJob.location}</p>
                    </div>
                </div>
                <p><FontAwesomeIcon icon={faFlag} style={{ color: "#7e90fe", }} /> {newJob.notice}</p>
                <h3><FontAwesomeIcon icon={faFlag} style={{ color: "#7e90fe", }} /> <b>Amount: ${newJob.amount}</b> </h3>
                <ColorButton variant="contained" sx={{ mt: 2, width: 350 }}>Make Payment</ColorButton>
            </div>
        </div>
    )
}
