import React, { useState } from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Footer2 from '../components/footer/Footer2';

import icon1 from '../assets/images/svg/loaction.svg'
import icon2 from '../assets/images/svg/email.svg'
import icon3 from '../assets/images/svg/phone.svg'
import dataFaqs from '../assets/fake-data/data-faq';
import Faqs from '../components/faqs/Faqs';
function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form fields
        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Additional validation for email and phone
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^\d{10}$/;

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email.');
            return;
        }

        if (!phonePattern.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Submit the form
        const form = document.getElementById('commentform');
        form.submit();
    };

    return (
        <div>



            <section className="tf-contact ">
                <div className="tf-container">
                    <div className="tf-heading">
                        <h2 className="heading">Get In Touch</h2>
                        <p className="sub-heading">Reach out and join the RACIIT community today.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-infor-wrap">
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon1} alt="RACIIT" />
                                    </div>
                                    <h3 className="title">Location</h3>
                                    <p className="sub-title">57 Ramakrishna Rd, Colombo 00600</p>
                                </div>
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon2} alt="RACIIT" />
                                    </div>
                                    <h3 className="title">Email</h3>
                                    <p className="sub-title">rciit.3220@gmail.com</p>
                                </div>
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon3} alt="RACIIT" />
                                    </div>
                                    <h3 className="title">Phone Number</h3>
                                    <p className="sub-title">+94 76 536 8956</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-9">
                            <div className="tf-heading">

                            </div>
                            {/*  */}
                            <form
                                action="https://submit-form.com/81HsrhAWU"
                                method="post"
                                id="commentform"
                                className="comment-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-inner">
                                    <fieldset className="name">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Name"
                                            className="tb-my-input"
                                            name="name"
                                            tabIndex="2"
                                            aria-required="true"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </fieldset>
                                    <fieldset className="email">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            className="tb-my-input"
                                            name="email"
                                            tabIndex="2"
                                            aria-required="true"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </fieldset>
                                    <fieldset className="phone">
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Phone Number"
                                            className="tb-my-input"
                                            name="phone"
                                            tabIndex="2"
                                            aria-required="true"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </fieldset>

                                    <fieldset className="message">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            placeholder="Message"
                                            tabIndex="4"
                                            aria-required="true"
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </fieldset>
                                </div>

                                <div className="btn-submit">
                                    <button className="tf-button style-2" type="submit">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer2 />

        </div>
    );
}

export default Contact;