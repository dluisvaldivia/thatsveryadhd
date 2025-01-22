import React from 'react';

export default function Landing() {

    return (
        <div className="container mt-5">
            <div className="row d-flex text-start">
                <div className="col compact-text">
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Hello.</p>
                    <p className="mt-2" style={{ fontSize: '39px', fontWeight: 'bold' }}>I'm <span>sarah</span>,</p>
                    <p style={{ fontSize: '55px', fontWeight: 'bold' }}>you <span style={{ color: '#c603fc' }}>new </span> 
                    <span style={{ color: '#fcba03' }}>favourite </span><span className="colorful-text">ADHD </span>coach.</p>
                </div>
                <div className="row mt-3">
                    <p className="lead">
                        I'm Sarah K.B., a certified <abbr title="Atencion Deficit & Hyperactivity Disorder" style={{fontWeight: 300}} >ADHD</abbr> specialized coach dedicated to helping neurodivergent individuals thrive. 
                        With a personal journey navigating ADHD and parenting two neurodivergent children, I offer customized 
                        coaching that embraces your unique brain. With experience in education, a passion for neurodiversity, and 
                        a multicultural perspective, I'm here to guide you in unlocking your strengths and reaching your full potential. 
                        Let's work together to create a path that works for you.
                    </p>
                </div>
            </div>

        </div>

    )
}