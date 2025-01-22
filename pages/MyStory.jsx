import React from 'react';
import sarahprofile from '../src/assests/sarahprofile.png';

export default function MyStory() {


    return (
        <div className="container my-4">
            <div className="row justify-content-center justify-content-md-start">
                <div className='col-5 col-md-4 py-3 mt-4'>
                    <img src={sarahprofile} className="img-fluid rounded float-start" alt="sarahK.B"></img>
                </div>
                <div className='col-12 col-md-8'>
                    <h1>My story</h1>
                    <p>
                        I am Sarah K.B. (Kessous Buendia), a <strong>certified </strong><abbr title="Atencion Deficit & Hyperactivity Disorder">ADHD</abbr><strong> specialist coach</strong> from <strong>GoldMind Academy</strong>. Driven by a fascination with how the brain works, I became a specialized ADHD coach to better understand my own ADHD brain and to navigate the unique experiences of being a mother to two wonderful neurodivergent children — a son with Down syndrome and a daughter with ADHD. This personal journey has deepened my empathy and strengthened my commitment to advocating for neurodivergent communities and helping them thrive by finding their gold.
                    </p>
                    <p>With seven years of experience as an English Language Instructor at Vaughan Systems, I quickly learned that every brain learns differently, which required me to adapt my teaching methods to each learner’s unique needs. This experience sharpened my ability to customize learning strategies, an invaluable skill that I bring to my coaching practice today.</p>

                    <p>My multicultural journey, from Paris to Madrid, Sydney, and now Malaga, has enriched my understanding of diverse life perspectives. My background in hospitality, travel & tourism, and culinary arts has further expanded my appreciation for global cultures and neurodiversity, fueling my passion for exploring new experiences and connecting with people from all over the world. Fluent in <strong>English, Spanish and French</strong>, I am dedicated to building a vibrant, inclusive coaching practice that resonates with diverse clients globally.</p>

                    <p>As a <strong>co-founder of DownContigo</strong>, a non-profit organization advocating for neurodivergent children and their families, we are dedicated to improving lives through education, social inclusion, and promoting independent living. We are a passionate team organizing community events and support groups to foster an inclusive and empowering environment.</p>

                    <p>I am eager to use my expertise to create impactful partnerships and secure coaching opportunities that align with my mission to support neurodiverse individuals.
                    </p>
                </div>
            </div>
        </div>

    )

} 