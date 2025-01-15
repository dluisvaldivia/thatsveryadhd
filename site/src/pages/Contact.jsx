import React from 'react';

export default function Contact() {

    return (
        <div className="container contacts-container mb-5 pb-5 mt-5">
            <div className="row my-3 d-flex justify-content-center">
            <div className="col-11 col-md-6">
                <form>
                    <h1>Let's chat</h1>
                    <div className="mb-3 mt-3">
                        <label for="contact.name" className="form-label">What´s your name?</label>
                        <input type="text" className="form-control" id="contact.name" />
                    </div>
                    <div className="mb-3">
                        <label for="contact.email" className="form-label">What's your email?</label>
                        <input type="email" className="form-control" id="contact.email" />
                    </div>
                    <div className="formrgroup">
                        <label for="contact.message">What do you want to talk about?</label>
                        <textarea type="text" className="form-control" id="contact.message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
                </div>
            </div>
        </div>
    )


}