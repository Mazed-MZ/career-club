import './ManageProfile.css';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NewJobs from '../Jobs/NewJobs';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { useEffect, useState } from 'react';

export default function CreateJob() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const company = form.company.value;
        const location = form.location.value;
        const experience = form.experience.value;
        const responsibility = form.responsibility.value;
        const requirments = form.requirments.value;
        const type = form.type.value;
        const duration = form.duration.value;
        const description = form.description.value;
        const salary = form.salary.value;
        const payment = form.payment.value;
        const notice = form.notice.value;
        const id = form.id.value;
        const amount = form.amount.value;
        const quantity = form.quantity.value;
        const phone = form.phone.value;
        const img = form.image.value;

        const user = { title, company, location, experience, responsibility, requirments, type, duration, description, salary, payment, notice, id, amount, quantity, phone, img }
        console.log(user);

        fetch('http://localhost:3000/notice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Notice successfully added');
                    location.reload();
                }
            })
    }

    return (
        <div className='profile-container'>
            <h1>Create a Job</h1>
            <div className='job-input'>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <form className="job-form" onSubmit={handleSubmit}>
                        <TextField
                            label="Give a Job title"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '35ch' }}
                            name="title"
                        />
                        <TextField
                            label="Company name"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '35ch' }}
                            name="company"
                        />
                        <TextField
                            label="Set job location"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '35ch' }}
                            name="location"
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            name="experience"
                            label="Give job experience"
                            sx={{ m: 1, width: '35ch' }}
                            multiline
                            maxRows={4}
                        />
                        <TextField
                            id="outlined-textarea"
                            name="notice"
                            label="Job latest notice"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="Apply within 5 working days.."
                            multiline
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            name="type"
                            label="Job Type"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="remote or on-site"
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            name="duration"
                            label="Job duration"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="Full time or part time"
                            multiline
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            name="salary"
                            label="Job salary"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="100K - 300K"
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                        <TextField
                            id="filled-textarea"
                            name="payment"
                            label="Make payment for premium job"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="Make Payment"
                            multiline
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-static"
                            name="description"
                            label="Give job description"
                            sx={{ m: 1, width: '35ch' }}
                            multiline
                            rows={4}
                            variant="filled"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            name="requirments"
                            label="Job requirments"
                            sx={{ m: 1, width: '35ch' }}
                            multiline
                            rows={4}
                        />
                        <TextField
                            id="filled-multiline-static"
                            name="responsibility"
                            label="Job responsibility"
                            sx={{ m: 1, width: '35ch' }}
                            multiline
                            rows={4}
                            variant="filled"
                        />
                        <TextField
                            id="outlined-number"
                            label="Give specific job id"
                            sx={{ m: 1, width: '35ch' }}
                            name="id"
                            type="number"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Give a application fee for premium job"
                            sx={{ m: 1, width: '35ch' }}
                            name="amount"
                            variant="standard"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="set a default quantity value 0"
                            sx={{ m: 1, width: '35ch' }}
                            name="quantity"
                            variant="standard"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            name="phone"
                            label="Give contact number"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="0194XXXXX"
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-flexible"
                            name="image"
                            label="Company Logo URL"
                            sx={{ m: 1, width: '35ch' }}
                            placeholder="http://www."
                            multiline
                            maxRows={4}
                            variant="filled"
                        />
                        <input type="submit" placeholder="Apply" />
                    </form>
                </Box>
            </div>
        </div>
    )
}
