import React from 'react';

export default function navbar() {

    return (
        <>
            <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="ms-5 navbar-brand" href="#">Sarah K.B.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="ms-3 navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Story</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>


        </>

    )

}