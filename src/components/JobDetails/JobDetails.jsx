import React, { useContext, useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router';
import Bg2 from '../../../public/images/bg2.png';
import Bg1 from '../../../public/images//bg1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faBriefcase, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { deepPurple } from '@mui/material/colors';
import './Details.css';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { UserContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

export default function JobDetails() {

    const newJob = useLoaderData();
    const { user } = useContext(UserContext);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState([]);

    useEffect(() => {
        fetch('../../../public/fakeData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart);
        //step-1 get id
        for (const id in storedCart) {
            //step-2 get the product by using id
            const savedProduct = jobs.find(jobs => jobs.id === id);
            // console.log(savedProduct);
            //step-3 get quantity of the product
            if (savedProduct) {
                const quantity = storedCart[id];
                savedProduct.quantity = quantity;
                // console.log(savedProduct);
                //step-4 add the savedProduct to the savedCart
                // savedProduct.stock = savedProduct.stock - quantity;
                savedCart.push(savedProduct);
            }
            // console.log('added product', savedProduct);

        }
        //set-5 set the cart
        setSelectedJob(savedCart);
    }, [jobs])

    const handleDetailsCart = (id) => {
        // const newCart = [...cart, product];
        //-->> Handle quantity from storage to cart <<--
        console.log(id);
        let newCart = [];
        const exists = jobs.find(pd => pd.id === id)
        if (!exists) {
            jobs.quantity = 1;
            newCart = [...selectedJob, jobs];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = selectedJob.filter(pd => pd.id !== jobs.id)
            newCart = [...remaining, exists];
        }
        setSelectedJob(newCart);
        addToDb(exists.id)
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(deepPurple[300]),
        backgroundColor: deepPurple[300],
        '&:hover': {
            backgroundColor: deepPurple[700],
        },
    }));

    return (
        <div>
            <div className='details-header'>
                <img src={Bg2} alt="" />
                <h1>Job Details</h1>
                <img src={Bg1} alt="" />
            </div>
            <div className='details-container'>
                <div className='details-title'>
                    <img src={newJob.img} alt="" />
                    <h2>{newJob.title}</h2>
                </div>
                <div className='details-info'>
                    <div className='details-data'>
                        <p><h3>Job Description:</h3>{newJob.description}</p>
                        <p><h3>Job Responsibility:</h3>{newJob.responsibility}</p>
                        <p><h3>Requirments:</h3>{newJob.requirments}</p>
                        <p><h3>Experience:</h3>{newJob.experience}</p>
                    </div>
                    <div className='details-cart'>
                        <div>
                            <h3>Welcome to {newJob.company}</h3>
                            <div className='details-cart-data'>
                                <h4>Job Details</h4>
                                <p><FontAwesomeIcon icon={faMoneyBill} style={{ color: "#7e90fe", }} /> <b>Salary:</b> {newJob.salary} (Per Month)</p>
                                <p><FontAwesomeIcon icon={faBriefcase} style={{ color: "#7e90fe", }} /> <b>Post:</b> {newJob.title}</p>
                            </div>
                            <div className='details-cart-data'>
                                <h4>Contact Information</h4>
                                <p><FontAwesomeIcon icon={faPhone} style={{ color: "#7e90fe", }} /> <b>Phone:</b> {newJob.phone}</p>
                                <p><FontAwesomeIcon icon={faLocationDot} style={{ color: "#7e90fe", }} /> <b>Address:</b> {newJob.location}</p>
                            </div>
                        </div>
                        {
                            user ? <Link to={`/payment/${newJob.id}`}><ColorButton variant="contained" sx={{ mt: 2, width: 350 }}>Make Payment</ColorButton></Link> : <Link to={`/payment/${newJob.id}`}><ColorButton variant="contained" sx={{ mt: 2, width: 350 }} onClick={() => handleDetailsCart(jobs.id)}>Start Applying</ColorButton></Link>
                        }
                        {
                            newJob.type === "Onsite" && <Link to="/location"><ColorButton variant="contained" sx={{ mt: 2, width: 350 }} onClick={() => handleDetailsCart(jobs.id)}>See Location</ColorButton></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
