import React, { useEffect, useState } from 'react';
import './Jobs.css';
import JobCart from './JobCart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import { json } from 'react-router';

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState([]);

    useEffect(() => {
        // fetch('../../../../public/fakeData.json')
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('../../../../public/fakeData.json')
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

    const handleJobCart = (id) => {
        // const newCart = [...cart, product];
        //-->> Handle quantity from storage to cart <<--
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

    return (
        <div className='job-container'>
            <div className='job-header'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='job-carts'>
                {
                    jobs.map(jobInfo => <JobCart key={jobInfo.id} jobInfo={jobInfo} handleJobCart={handleJobCart}></JobCart>)
                }
            </div>
        </div>
    )
}
