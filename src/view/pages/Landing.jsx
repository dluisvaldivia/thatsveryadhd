import React from 'react';
import Hero from '../components/Hero.jsx';
import Contact from './Contact.jsx';
import MyStory from './MyStory.jsx';
import Calendly from '../components/Calendly.jsx';
import WhoIsFor from '../pages/WhoIsFor.jsx';

export default function Landing() {

    return (
        <div className="container mt-5">
            <div className="row d-flex text-start">

                <Hero />
                <div id="my-story">
                    <MyStory />
                </div>
                <div>
                    <WhoIsFor />
                 </div>
                <div id="calendly-section">
                    <Calendly />
                </div>
                <div id="contact-section">
                    <Contact />
                </div>
                
            </div>

        </div>

    )
}