import React from 'react';
import { IoPricetagsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";


import { Link } from 'react-router-dom'

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
                        <ul className="ms-3 navbar-nav icon-spacing">
                            <li className="nav-item">
                            <CgProfile />
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                            <IoChatbubblesOutline />
                                <Link to="/my-story" className="nav-link" href="#">My Story</Link>
                            </li>
                            <li className="nav-item">
                            <IoPricetagsOutline />
                                <Link to="/pricing" className="nav-link" href="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                            <IoMdContacts />
                                <Link to="/contact" className="nav-link" href="#">Contact</Link>
                            </li>
                            

                        </ul>
                        
                    </div>
                </div>
            </nav>


        </>

    )

}