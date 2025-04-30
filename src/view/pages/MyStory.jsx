import React from 'react';
import sarahprofile from '../../assests/sarahprofile.png';

export default function MyStory() {
    return (
        <div className="container pb-5 mb-5">
            <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-12 col-md-4 col-sm-8 text-center mb-5">
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
                <p>I’m Sarah, an ADHD coach, a neurodivergent mum, and someone who’s recently made the leap into coaching to help others find their rhythm — after realizing it was time to stop following the old recipes and start creating something uniquely my own.

With guidance from Alex Campbell, Katie Friedman, and Tamsin Hartley, I’ve learned to blend strengths-based ADHD coaching with deep listening and trauma-informed care to create the perfect coaching blend.

I’ll help you turn your ADHD chaos into a recipe for success. No shortcuts, just real, authentic transformation.</p>
                </div>
            </div>
        </div>
    );
}