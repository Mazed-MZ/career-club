import React from 'react';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className='notfound-container'>
            <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
            <div className='notfound-msg'>
                <h1 style={{fontSize: '45px'}}>Oops!!! Page not found...</h1>
                <p style={{fontWeight: 'bold'}}>We are sorry the page you looking does not exist right now</p>
            </div>
        </div>
    )
}
