import React from 'react';
import sarahprofile from '../../assests/sarahprofile.png';

export default function MyStory() {
    return (
        <div className="container pb-5 mb-5">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-12 col-md-4 col-sm-8 text-center mb-4 mb-md-0">
                    <img
                        src={sarahprofile}
                        alt="Sarah profile picture"
                        style={{
                            maxWidth: '90%', // Make the image responsive
                            borderRadius: '50%', // Add rounded corners
                        }}
                    />
                </div>

                {/* Text Column */}
                <div className="col-12 col-md-8">
                <p style={{fontSize:'2rem'}}><b>Hi!</b></p> 
                <p>I'm Sarah, an ADHD-diagnosed coach, a curious mind, and a mom of two amazing neurodivergent kids.
I know what it's like to feel overwhelmed, misunderstood, and scattered… and to crave clarity, tools, and a sense of "finally being on track."
Coaching changed my life, and now I help others rewrite their own stories — with compassion, strategy, and science-backed support.</p>
                </div>
            </div>
        </div>
    );
}