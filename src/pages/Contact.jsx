import React from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Footer2 from '../components/footer/Footer2';

import icon1 from '../assets/images/svg/loaction.svg'
import icon2 from '../assets/images/svg/email.svg'
import icon3 from '../assets/images/svg/phone.svg'
import dataFaqs from '../assets/fake-data/data-faq';
import Faqs from '../components/faqs/Faqs';
function Contact(props) {
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
                                        <img src={icon1} alt="Binabox" />
                                    </div>
                                    <h3 className="title">Location</h3>
                                    <p className="sub-title">57 Ramakrishna Rd, Colombo 00600</p>
                                </div>
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon2} alt="Binabox" />
                                    </div>
                                    <h3 className="title">Email</h3>
                                    <p className="sub-title">rciit.3220@gmail.com</p>
                                </div>
                                <div className="tf-infor">
                                    <div className="icon">
                                        <img src={icon3} alt="Binabox" />
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
                            <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                                <div className="form-inner">
                                    <fieldset className="name">
                                        <input type="text" id="name" placeholder="Name" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>    
                                    <fieldset className="email">
                                        <input type="email" id="email" placeholder="Enter your email" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>
                                    <fieldset className="phone">
                                        <input type="tel" id="phone" placeholder="Phone Number" className="tb-my-input" name="phone" tabIndex="2" aria-required="true" required="" />
                                    </fieldset>
                                    
                                    <fieldset className="message">
                                        <textarea id="message" name="message" rows="4" placeholder="Message" tabIndex="4" aria-required="true" required=""></textarea>
                                    </fieldset>
                                </div>

                                <div className="btn-submit"><button className="tf-button style-2" type="submit">SEND</button></div>
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