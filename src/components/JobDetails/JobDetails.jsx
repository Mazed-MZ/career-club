import React from 'react'
import { useLoaderData } from 'react-router';
export default function JobDetails() {

    const newJob = useLoaderData();
    // const newJob = fakeData.filter(pd => pd.key === jobid);
    console.log(newJob);

    return (
        <div>
            <h3>Job Details are comming soon {newJob}</h3>
        </div>
    )
}
