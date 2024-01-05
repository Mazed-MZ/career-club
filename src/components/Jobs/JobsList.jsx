import React, { useContext, useEffect, useState } from 'react';
import './JobsList.css';
import JoblistCart from './JoblistCart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import moment from 'moment';
import { json, useLoaderData } from 'react-router';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NewJobs from './NewJobs';
import { UserContext } from '../providers/AuthProvider';

export default function Jobs() {

  const newJob = useLoaderData()
  const [joblist, setJoblist] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);
  const [newSelectedJob, setNewSelectedJob] = useState([]);

  useEffect(() => {
    fetch('../../../../public/fakeData.json')
      .then(res => res.json())
      .then(data => setJoblist(data))
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);
    //step-1 get id
    for (const id in storedCart) {
      //step-2 get the product by using id
      const savedProduct = joblist.find(jobs => jobs.id === id);
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
  }, [joblist])

  const handleJoblistCart = (id) => {
    // const newCart = [...cart, product];
    //-->> Handle quantity from storage to cart <<--
    let newCart = [];
    const exists = joblist.find(pd => pd.id === id)
    if (!exists) {
      joblist.quantity = 1;
      newCart = [...selectedJob, joblist];
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = selectedJob.filter(pd => pd.id !== joblist.id)
      newCart = [...remaining, exists];
    }
    setSelectedJob(newCart);
    addToDb(exists.id)
  }



  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);
    //step-1 get id
    for (const id in storedCart) {
      //step-2 get the product by using id
      const savedProduct = newJob.find(jobs => jobs._id === id);
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
    setNewSelectedJob(savedCart);
  }, [newJob])

  const handleNewJoblistCart = (id) => {
    // const newCart = [...cart, product];
    //-->> Handle quantity from storage to cart <<--
    let newCart = [];
    const exists = newJob.find(pd => pd._id === id)
    if (!exists) {
      newJob.quantity = 1;
      newCart = [...newSelectedJob, newJob];
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = newSelectedJob.filter(pd => pd._id !== newJob._id)
      newCart = [...remaining, exists];
    }
    setNewSelectedJob(newCart);
    addToDb(exists.id)
  }
  return (
    <div className='joblist-container'>
      <div className='joblist-header'>
        <h1 style={{ fontFamily: 'arial', fontSize: '50px' }}>Premium Jobs</h1>
        <p>If you want to apply for any jobs you have to pay for. Explore thousands of job opportunities with all the information you need. Its your future.</p>
        <h4 style={{ color: 'purple' }}><i>The latest jobs are updated upto {moment().format('Do MMMM, YYYY')}</i></h4>
      </div>
      <div className='joblist-cart'>
        {
          joblist.map(jobData => <JoblistCart key={jobData.id} jobData={jobData} handleJoblistCart={handleJoblistCart}></JoblistCart>)
        }
      </div>
      <div className='joblist-cart'>
        {
          newJob.map(jobData => <NewJobs key={jobData._id} jobData={jobData} handleNewJoblistCart={handleNewJoblistCart}></NewJobs>)
        }
      </div>
    </div>
  )
}
