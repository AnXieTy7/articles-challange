import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/contacts', contact)
            .then(res => {
                console.log(res.data);
                // Reset form or give feedback to user
            })
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
            <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
