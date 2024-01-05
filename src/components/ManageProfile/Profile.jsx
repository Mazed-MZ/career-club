import React, { useContext } from 'react';
import './ManageProfile.css';
import { UserContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Profile() {

    const { user } = useContext(UserContext);
    return (
        <div className='profile-container'>
            {user ? <img src={user.photoURL} alt="" /> : <span>No User</span> }
            <div className='profile-manue'>
                <Link to="/createjob"><Button variant="contained" color="success">
                    Create a job
                </Button></Link>
                <Link><Button variant="contained" color="success">
                    Favourite Job list
                </Button></Link>
                <Link><Button variant="contained" color="success">
                    Preferable job for you
                </Button></Link>
                <Link><Button variant="contained" color="success">
                    Contact with us
                </Button></Link>
            </div>
        </div>
    )
}
