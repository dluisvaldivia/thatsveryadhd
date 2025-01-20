import React, { useState } from 'react';

export default function Pricing() {
    const [date, setDate] = useState(new Date())

    const oneYearFromNow = new Date(date);
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const validUntilDate = oneYearFromNow.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="container">
            <div className="row ">
                <div className="col-12 col-md-6">
                    <h1>Pricing</h1>
                    <p>How does it work?
                        <ul>
                            <li>purchase a single session or a pack </li>
                            <li>use it whenever! it expires 1 year from the purchase date</li>
                            <li>schedule an appointment with me!</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-6 ">
                    <div className="p-3 m-1 text-bg-dark rounded-3">
                        <h2>1 session</h2>
                        <p>valid until: {validUntilDate}</p>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QgUpCJ7yLUxkVnSG2aOLHJK"
                            publishable-key="pk_test_51QgUfiJ7yLUxkVnS9jvSW6eIWuwpGb8Afh04V8WZWKdSEuJ7y3mhojCon5jIDPmnUgTtHkwAR1nEIW1mhi601JUM00ykBBZDHy"
                        >
                        </stripe-buy-button>
                    </div>
                </div>

                <div className='col-12 col-md-6'>
                    <div className="p-3 m-1 bg-body-tertiary border rounded-3">
                        <h2>5 session-pack</h2>
                        <p>valid until: {validUntilDate}</p>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QgV39J7yLUxkVnSVhATEuw3"
                            publishable-key="pk_test_51QgUfiJ7yLUxkVnS9jvSW6eIWuwpGb8Afh04V8WZWKdSEuJ7y3mhojCon5jIDPmnUgTtHkwAR1nEIW1mhi601JUM00ykBBZDHy"
                        >
                        </stripe-buy-button>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-6">
                    <div className="p-4 m-1 text-bg-dark border rounded-3">
                        <h2>10 session-pack</h2>
                        <p>valid until: {validUntilDate}</p>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QgUpCJ7yLUxkVnSG2aOLHJK"
                            publishable-key="pk_test_51QgUfiJ7yLUxkVnS9jvSW6eIWuwpGb8Afh04V8WZWKdSEuJ7y3mhojCon5jIDPmnUgTtHkwAR1nEIW1mhi601JUM00ykBBZDHy"
                        >
                        </stripe-buy-button>
                    </div>
                </div>


                <div className="col-12 col-md-6">
                    <div className="p-4 m-1 bg-body-tertiary rounded-3">
                        <h2>20 session-pack</h2>
                        <p>valid until: {validUntilDate}</p>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QgUpCJ7yLUxkVnSG2aOLHJK"
                            publishable-key="pk_test_51QgUfiJ7yLUxkVnS9jvSW6eIWuwpGb8Afh04V8WZWKdSEuJ7y3mhojCon5jIDPmnUgTtHkwAR1nEIW1mhi601JUM00ykBBZDHy"
                        >
                        </stripe-buy-button>
                    </div>
                </div>
            </div>
        </div>

    )
}