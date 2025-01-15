import React, { useState } from 'react';

export default function Contact() {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [formStatus, setFormStatus] = useState('')

    /* const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)

        try{
            const response = await fetch('https://formsubmit.co/ajax/dluis.valdivia@gmail.com', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if(result.success) {
                console.log(result)
                setFormStatus('Message sent!')
            } else { console.log(result)
                setFormStatus('Failed to send, please reload the page and try again')}
        }

        catch (error) {
            console.error(error)
            setFormStatus('An error ocurred,please reload the page and try again')
        }

        setFormStatus('');
        setInputName('');
        setInputEmail('');
        setInputMessage('');
    } */

    return (
        <div className="container contacts-container mb-5 pb-5 mt-5">
            <div className="row my-3 d-flex justify-content-center">
                <div className="col-11 col-md-6">
                    <form action="https://formsubmit.co/e76047e5a345e07112815e4ff91bd5f4" method="POST">
                        <h1>Let's chat</h1>
                        <div className="form-group mb-3 mt-3">
                            <label htmlFor="contact.name" className="form-label">What's your name?</label>
                            <input type="text" className="form-control" name="name" id="contact.name" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="contact.email" className="form-label">What's your email?</label>
                            <input type="email" className="form-control" name="email" id="contact.email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact.message">What do you want to talk about?</label>
                            <textarea name="message" type="text" className="form-control" id="contact.message" rows="5" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}></textarea>
                            <input type="hidden" name="_url" value="https://silver-orbit-v6ppvx5pgwg3w5vw-5173.app.github.dev/contact"/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                   {/*  {formStatus && <div className="form-status mt-3">{formStatus}</div>} */}
                </div>
            </div>
        </div>
    )


}