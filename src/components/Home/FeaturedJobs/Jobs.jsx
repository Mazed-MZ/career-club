import React, { useEffect, useState } from 'react';
import './Jobs.css';
import JobCart from './JobCart';

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('../../../../public/fakeData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const handleJobCart = (id)=>{
        console.log(id)
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
