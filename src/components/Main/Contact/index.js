import React, { useState, useRef } from "react";
import validateEmail from "../../../utils/helpers";
import emailjs from "@emailjs/browser";

function Contact() {

    // select modal
    const modal = document.querySelector('#modal-bg');

    // set values for form input fields
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // set error messages
    const [errorMessage, setErrorMessage] = useState('');

    // set 'form' as reference to form, to send email through emailjs
    const form = useRef();

    // use emailjs to send email
    const sendEmail = () => {
        // TODO use .env to hide ids?
        emailjs.sendForm('service_d26dc06', 'template_6z4wf8u', form.current, 'ltpzhMJUSQ39yAQTh')
            .then((result) => {
                modal.style.display = 'block';
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    // exit from 'message sent' modal
    const exitModal = (e) => {
        modal.style.display = 'none';
        setFormState({ name: "", email: "", message: "" });
    }

    // if no errors, upon submit, log value of input fields
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log(formState);
        }
        sendEmail(e);
    }

    // validate input fields and send error messages if not valid
    const handleChange = (e) => {
        // if email is not valid, send error message
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('**Please enter a valid e-mail address.');
            } else {
                setErrorMessage('');
            }
            // if name or message are not entered, send error message
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`**Please enter a ${e.target.name}.`);
            } else {
                setErrorMessage('');
            }
        };
        // if there are no error messages, set form input values
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });

        }
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <div id="modal-bg">
                <div id="modal-container">
                    <div id="msg-sent-modal">
                        <p>Your message has been sent!</p>
                        <button id="modal-exit" onClick={exitModal}>OK!</button>
                    </div>
                </div>
            </div>
            <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <div key={name}>
                        <input type="text" id="name" name="name" defaultValue={name} onBlur={handleChange} required></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <div key={email}>
                        <input type="email" id="email" name="email" defaultValue={email} onBlur={handleChange} required></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <div key={message}>
                        <textarea id="message" name="message" rows="3" defaultValue={message} onBlur={handleChange} required></textarea>
                    </div>
                </div>
                <button className="submit-btn" type="submit">Send Message!</button>
                {errorMessage && (
                    <div className="error-msg">
                        <p>{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Contact;