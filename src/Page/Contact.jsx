import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
            {/* Contact Info Section */}
            <div className="contact-info">
                <h3>Call Us</h3>
                <ul>
                    <li>We are available 24/7, 7 days a week.</li>
                    <li>Phone: +8801611112222</li>
                </ul>

                <h3>Email Us</h3>
                <ul>
                    <li>Fill out our form and we will contact you within 24 hours.</li>
                    <li>Email: customer@exclusive.com</li>
                    <li>Email: support@exclusive.com</li>
                </ul>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-container">
                <form>
                    {/* User Details Section */}
                    <div className='user-details'>
                        <div className='user-info'>
                            <div className="input-group">
                                <input type="text" id="name" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="input-group">
                                <input type="email" id="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="input-group">
                                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div className="input-group">
                            <textarea id="message" name="message" placeholder="Write your message here..." rows="4"></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions">
                        <button type="submit" className="submit-button">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
