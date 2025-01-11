import React from 'react';

export default function Pricing() {

    return (
        <div className="container">

            <h1>Pricing</h1>
            <div className="row">

                <div className="col">
                    <div className="h-80 p-5 text-bg-dark rounded-3">
                        <h2>1 session</h2>
                        <p>an individual coaching session</p>
                        <button className="btn btn-outline-light" type="button">Purchase</button>
                    </div>
                </div>

                <div className='col'>
                    <div className="h-80 p-5 bg-body-tertiary border rounded-3">
                        <h2>5 session-pack</h2>
                        <p>5 coaching session-pack.</p>
                        <button className="btn btn-outline-secondary" type="button">Purchase</button>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                <div className="h-80 p-5 bg-body-tertiary border rounded-3">
                        <h2>10 session-pack</h2>
                        <p>5 coaching session-pack.</p>
                        <button className="btn btn-outline-secondary" type="button">Purchase</button>
                    </div>
                </div>


                <div className="col">
                <div className="h-80 p-5 text-bg-dark rounded-3">
                        <h2>20 session-pack</h2>
                        <p>an individual coaching session</p>
                        <button className="btn btn-outline-light" type="button">Purchase</button>
                    </div>
                </div>
            </div>
        </div>

    )
}