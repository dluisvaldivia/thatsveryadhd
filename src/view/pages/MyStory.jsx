import React from 'react';
import sarahprofile from '../../assests/sarahprofile.png';

export default function MyStory() {
    return (
        <main>
            <div className="container pb-5 mb-5">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <div className="col-12 col-md-4 col-sm-8 text-center mb-5">
                        <img
                            src={sarahprofile}
                            alt="Sarah profile picture"
                            style={{
                                maxWidth: '90%',
                                borderRadius: '50%',
                            }}
                        />
                    </div>

                    {/* Text Column */}
                    <div className="col-12 col-md-8">
                        <p style={{ fontSize: '2rem' }}><b>Hi!</b></p>
                        <p>I’m Sarah.</p>
                        <p>A <strong>specialised ADHD coach</strong> certified, neurodivergent, multilingual, and a mum to two brilliantly wired kids.</p>

                        <p>I was diagnosed late, like many adults, and I’m still figuring shit out, personally and professionally.</p>

                        <p><em>I’m not here with all the answers.</em></p>

                        <p>I’m here to walk beside you, ask good questions, and help you explore what actually works for your brain and your life.</p>

                    </div>
                </div>
            </div>
        </main>
    );
}