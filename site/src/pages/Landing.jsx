import React from 'react';

export default function Landing() {

    return (
        <div className="container mt-5">
            <div className="row d-flex text-start">
                <div className="col compact-text">
                    <p style={{fontSize: '15px', fontWeight: 'bold'}}>Hello.</p>
                    <p className="mt-2" style={{fontSize: '35px', fontWeight: 'bold'}}>I'm <span>sarah</span>,</p>
                    <p style={{fontSize: '50px', fontWeight: 'bold'}}>you <span style={{ color: '#c603fc'}}>new</span> <span style={{ color: '#fcba03'}}>favourite</span> ADHD coach.</p>
                </div>
            </div>

        </div>

    )
}