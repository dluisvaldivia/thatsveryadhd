import React from 'react';
import { Link } from 'react-router-dom';
import ICF from '../../assests/ICF.png';

export default function Footer() {

    return (
        <>
            <footer className="row text-white justify-content-center">
            <img src={ICF} id="ICFlogo" ></img>
                <div className="text-center py-3">
                
                    <small> Developed by <a href='https://github.com/dluisvaldivia' target='blank' id="footerlink">ValdiviaMedia</a> &copy; All rights reserved. <Link to="/privacy-policy" id="footerlink">Privacy Policy</Link></small>
                </div>
            </footer>
        </>

    )

}