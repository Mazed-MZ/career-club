import React, { useEffect, useState } from 'react'
import { getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router';
import JobReview from './JobReview';
import './AppliedJobs.css';

export default function JobDetails() {

    const storedJob = useLoaderData([]);
    const [remove , setRemove] = useState([])
    const handleRemoveCart = (id) =>{
      console.log(id);
      const remaining = remove.filter(product => product.id !== id);
      setRemove(remaining);
      removeFromDb(id)
  };
    console.log(storedJob)

    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     setJobDetails(storedCart);
    //     console.log(storedCart);
    // }, [])

  return (
    <div className='review-cart'>
      {
        storedJob.map(jobdata => <JobReview key={jobdata.id} jobdata={jobdata} handleRemoveCart={handleRemoveCart}></JobReview>)
      }
    </div>
  )
}
