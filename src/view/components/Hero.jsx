import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import powderex from '../../assests/powderex.png';


export default function Hero() {
    const navigate = useNavigate();

    return (
        <div
        className="container py-5" >
            <div className=
            "row d-flex text-start"
            style={{
                position: 'relative',
                backgroundImage: `url(${powderex})`,
                backgroundSize: '30%',
                backgroundPosition: 'right -25px',
                backgroundRepeat: 'no-repeat',
                
    
            }}
            >
                <div className="col">
                    <h1 style={{fontSize:'3rem'}}>You're <strong>Not</strong> Broken</h1>
                    <h1 style={{fontSize:'5rem'}}>You're <span className="colorful-text"><strong>Wired</strong></span> Differently</h1>
                    <p className='col-9 mt-4'style={{fontSize:'1.5rem'}}>A space where we cook up clarity, season your strengths, and help you create a life that fits your ADHD.

Here, we don’t just follow a recipe — we craft one that’s entirely yours, mixing structure and flexibility with a dash of magic.</p>
                    <button className='btn-secondary mt-2 me-5' onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>Curious?</button>
                    <button className='btn-primary mt-4' onClick={() => document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' })}>Schedule time with me!</button>
                    <div className='col-5 col-md-4 py-3 mt-4'>
                    </div>
                </div>
            </div>
        </div>
    )
}