import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";


import powderex from '../../assests/powderex.png';


export default function Hero() {
    const navigate = useNavigate();

    return (
        <main>
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
                    <h1 style={{fontSize:'6.5rem'}}>That's <strong>very</strong> ADHD</h1>
                    <h2 style={{fontSize:'3rem'}}>and that's exactly where we start.</h2> {/* <span className="colorful-text"><strong>Wired</strong></span> Differently</h1> */}
                    <p className='col-9 mt-4'style={{fontSize:'1.5rem'}}>A space where we cook up clarity, season your strengths, and help you create a life that fits your ADHD.

Here, we don’t just follow a recipe — we craft one that’s entirely yours, mixing structure and flexibility with a dash of magic.</p>
                    <button className='btn-secondary mt-2 me-5' onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>Curious? let's chat <IoChatbubblesOutline />
                    </button>
                    <button className='btn-primary mt-4' onClick={() => document.getElementById('calendly-section').scrollIntoView({ behavior: 'smooth' })}>Schedule a free call with me <CiVideoOn />
                    </button>
                    <div className='col-5 col-md-4 py-3 mt-4'>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}