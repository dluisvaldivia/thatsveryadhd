import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <footer className="text-white">

                <div className="text-center py-3">
                    
                    <small> Developed by <a href='https://github.com/dluisvaldivia' target='blank' id="footerlink">ValdiviaMedia</a> &copy; All rights reserved. <Link to="/privacy-policy" id="footerlink">Privacy Policy</Link></small>
                </div>
            </footer>
        </>

    )

}