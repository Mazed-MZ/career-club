import React, { useContext } from 'react';
import './JobsList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/AuthProvider';

export default function NewJobs({ jobData, handleNewJoblistCart }) {

    const { user } = useContext(UserContext);

    const { id, _id, key, img, title, company, location, salary, type, duration } = jobData;

    const handleDeleteNotice = (_id) => {
        console.log(_id);
        fetch(`http://localhost:3000/notice/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('successfully deleted');
                }
            })
    }

    return (
        <div>
            <h2>New jobs comming</h2>
            <div className='joblist-box'>
                <div className='joblist-data'>
                    <img src={img} alt="" />
                    <h2>{title}</h2>
                    <h3>{company}</h3>
                    <span>
                        <p><FontAwesomeIcon icon={faLocationCrosshairs} /> {location}</p> <p><FontAwesomeIcon icon={faMoneyBill} /> {salary}</p>
                    </span>
                    <Stack spacing={2} direction="column">
                        <Chip label={type} color="primary" variant="outlined" />
                        <Chip label={duration} color="success" variant="outlined" />
                        <button className='apply-btn' onClick={() => handleNewJoblistCart(_id)}>Apply</button>
                        {
                            user && <div><Stack spacing={2} direction="column"><Link Link to="/jobs"><button className='apply-btn' onClick={() => handleDeleteNotice(_id)}>Remove</button></Link><Link to={`/update/${_id}`}><button className='apply-btn'>Update</button></Link></Stack></div>
                        }
                        <Link to={`/newjobdetails/${_id}`}><button className='apply-btn'>Details</button></Link>
                    </Stack>
                </div>
            </div>
        </div >
    )
}
