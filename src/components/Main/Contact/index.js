import React from "react";

function Contact () {
    return (
        <div>
            <h2>Contact Me</h2>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"></input>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email"></input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="3"></textarea>
                </div>
                <button type="submit">Send Message!</button>
            </form>
        </div>
    )
}

export default Contact;