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
            {/* Calendly Inline Widget */}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/sarahbuendia/curiosity-call?hide_event_type_details=1"
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
        </div>
    );
}