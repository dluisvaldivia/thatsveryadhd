import React from 'react';
import { Link } from 'react-router-dom';
import ICF from '../../assests/ICF.png';

export default function Footer() {

    return (
        <>
            <footer className="row text-white justify-content-center">
            <img src={ICF} id="ICFlogo" alt="International Coaching Federation badge"></img>
                <div className="text-center py-3">
                
                    

                        
                        <Link to="/privacy-policy" id="footerlink">Privacy Policy</Link>
                        <br />
                        <Link to="/terms-of-service" id="footerlink">Terms of Service</Link>
                        <br />
                        <Link to="/accessibility-statement" id="footerlink">Accessibility Statement</Link>
                        <br />
                        <small> 
                        Developed by <a href='https://github.com/dluisvaldivia' target='blank' id="footerlink">ValdiviaMedia</a> &copy; All rights reserved. 
                    </small>
                </div>
            </footer>
        </>

    )

}