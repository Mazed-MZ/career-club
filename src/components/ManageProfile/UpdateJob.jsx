import React from 'react';
import { useLoaderData } from 'react-router';
import './ManageProfile.css';
import { Box, TextField } from '@mui/material';

export default function UpdateJob() {

    const loadedNotice = useLoaderData();

    const handleUpdate = (event) => {
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

        fetch(`http://localhost:3000/notice/${loadedNotice._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Job updated successfully')
                }
            })
    }


    return (
        <div>
            <div className='profile-container'>
                <h1>Update {loadedNotice.company} job</h1>
                <div className='job-input'>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <form className="job-form" onSubmit={handleUpdate}>
                            <TextField
                                label="Give a Job title"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                name="title"
                                defaultValue={loadedNotice?.title}
                            />
                            <TextField
                                label="Company name"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                name="company"
                                defaultValue={loadedNotice?.company}
                            />
                            <TextField
                                label="Set job location"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '35ch' }}
                                name="location"
                                defaultValue={loadedNotice?.location}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                name="experience"
                                defaultValue={loadedNotice?.experience}
                                label="Give job experience"
                                sx={{ m: 1, width: '35ch' }}
                                multiline
                                maxRows={4}
                            />
                            <TextField
                                id="outlined-textarea"
                                name="notice"
                                defaultValue={loadedNotice?.notice}
                                label="Job latest notice"
                                sx={{ m: 1, width: '35ch' }}
                                placeholder="Apply within 5 working days.."
                                multiline
                            />
                            <TextField
                                id="filled-multiline-flexible"
                                name="type"
                                defaultValue={loadedNotice?.type}
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
                                defaultValue={loadedNotice?.duration}
                                label="Job duration"
                                sx={{ m: 1, width: '35ch' }}
                                placeholder="Full time or part time"
                                multiline
                                variant="filled"
                            />
                            <TextField
                                id="filled-multiline-flexible"
                                name="salary"
                                defaultValue={loadedNotice?.salary}
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
                                defaultValue={loadedNotice?.payment}
                                label="Make payment for premium job"
                                sx={{ m: 1, width: '35ch' }}
                                placeholder="Make Payment"
                                multiline
                                variant="filled"
                            />
                            <TextField
                                id="filled-multiline-static"
                                name="description"
                                defaultValue={loadedNotice?.description}
                                label="Give job description"
                                sx={{ m: 1, width: '35ch' }}
                                multiline
                                rows={4}
                                variant="filled"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                name="requirments"
                                defaultValue={loadedNotice?.requirments}
                                label="Job requirments"
                                sx={{ m: 1, width: '35ch' }}
                                multiline
                                rows={4}
                            />
                            <TextField
                                id="filled-multiline-static"
                                name="responsibility"
                                defaultValue={loadedNotice?.responsibility}
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
                                defaultValue={loadedNotice?.id}
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
                                defaultValue={loadedNotice?.amount}
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
                                defaultValue={loadedNotice?.quantity}
                                variant="standard"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="filled-multiline-flexible"
                                name="phone"
                                defaultValue={loadedNotice?.phone}
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
                                defaultValue={loadedNotice?.img}
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
        </div>
    )
}
