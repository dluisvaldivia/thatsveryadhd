import React from 'react';

export default function Pricing() {

    return (
        <div className="container">

            <h1>Pricing</h1>
            <div className="row">

                <div className="col">
                    <div className="h-80 p-5 text-bg-dark rounded-3">
                        <h2>1 session</h2>
                        <p>buy an idividual coaching session for whenever</p>
                        <p>valid until :one-year-from-today:</p>
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QgUpCJ7yLUxkVnSG2aOLHJK"
                            publishable-key="pk_test_51QgUfiJ7yLUxkVnS9jvSW6eIWuwpGb8Afh04V8WZWKdSEuJ7y3mhojCon5jIDPmnUgTtHkwAR1nEIW1mhi601JUM00ykBBZDHy"
                        >
                        </stripe-buy-button>
                    </div>
                </div>

                <div className='col'>
                    <div className="h-80 p-5 bg-body-tertiary border rounded-3">
                        <h2>5 session-pack</h2>
                        <p>5 coaching session-pack.</p>

<stripe-buy-button
  buy-button-id="buy_btn_1QgV39J7yLUxkVnSVhATEuw3"
  publishable-key="pk_test_51QgUfiJ7yLUxkVnS9jvSW6eIWuwpGb8Afh04V8WZWKdSEuJ7y3mhojCon5jIDPmnUgTtHkwAR1nEIW1mhi601JUM00ykBBZDHy"
>
</stripe-buy-button>
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