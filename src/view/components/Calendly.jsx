import React, { useEffect } from 'react';

export default function Calendly() {
    useEffect(() => {
        // Dynamically load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="container py-5">
            <h1 className='text-center'>Coaching Offers</h1>


            <div className="col-8 mx-auto">

            <p>What's on the menu?</p>
                
                <p>Like any enchanted recipe, there are different ways to blend your unique ingredients for the perfect outcome:</p>
                
                <ul>
                <li>🌱 <b>Free Call</b> - 30 minutes to feel the magic, no pressure</li>
                <li>✨ <b>3-Session Reset</b> - Quick clarity and momentum, a starter course to get you going</li>
                <li>🌿 <b>6-Session Pack</b> - Deeper journey with transformation at every turn</li>
                <li>🌳 <b>12-Session Journey</b> - Full immersion into your new ADHD-powered self</li>
                </ul>

                <p>Each session is carefully crafted, with the right mix of support and challenge, 
                    designed to bring out the best version of your ADHD-powered self.</p>
                    </div>

            {/* Calendly Inline Widget */}

            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/sarahbuendia/curiosity-call"
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
        </div>
    );
}