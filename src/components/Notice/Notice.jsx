import React from 'react';
import './Notice.css';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Notice() {

  return (
    <div className='notice-container'>
      <h1>Todays latest Notice</h1>
      <div className='notice-card'>
        <Card sx={{ maxWidth: 500, m: 1 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="data:image/png;base64,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"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Amazon wil be open their headoffice in Bangladesh
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Bangladesh government took the initiative of bringing foreign companies under the registration and VAT process in 2019, as Tech giants — Google, Amazon, and Facebook — had been making around Tk3,000 crore from Bangladesh annually.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500, m: 1 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO74fXWotWrEfrkviTOWmatFDjOvPQrgcdchBVA6CIHmxP9nyxMrruagLPhUWcve5tnxk&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Paypal recently sign a meeting with government
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Bangladesh government took the initiative of bringing foreign companies under the registration and VAT process in 2019, as Tech giants — Google, Amazon, and Facebook — had been making around Tk3,000 crore from Bangladesh annually.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500, m: 1 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://palak.net.bd/frontEnd/images/quote/KKdrXqOapKXycEnQFZFpOz.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Government should provide extra facility for freenalcers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Bangladesh government took the initiative of bringing foreign companies under the registration and VAT process in 2019, as Tech giants — Google, Amazon, and Facebook — had been making around Tk3,000 crore from Bangladesh annually.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500, m: 1 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/02/01/bcs.jpeg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BCS exam will held after Eid-Ul-Fitre
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Bangladesh government took the initiative of bringing foreign companies under the registration and VAT process in 2019, as Tech giants — Google, Amazon, and Facebook — had been making around Tk3,000 crore from Bangladesh annually.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500, m: 1 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKmAhTAc4vAEJcJmX5BCbsRdw0mqwOV5N4jBDuJ-i_v23mzNdRJXq5EuLmq4MWLW763w&usqp=CAU"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Google are hire AI engineer in google headquarters
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Bangladesh government took the initiative of bringing foreign companies under the registration and VAT process in 2019, as Tech giants — Google, Amazon, and Facebook — had been making around Tk3,000 crore from Bangladesh annually.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500, m: 1 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
            image="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1637551129/1637551128.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Apple will open their official show-room in Bangladesh
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Bangladesh government took the initiative of bringing foreign companies under the registration and VAT process in 2019, as Tech giants — Google, Amazon, and Facebook — had been making around Tk3,000 crore from Bangladesh annually.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}
