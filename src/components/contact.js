import React from "react";
import './home.css';
import contact from './contact.jpg'

function Contact() {
    return (
        <>
            <div className="contentcontact">
                <img src={contact} alt='aboutus' className='aboutimage' />
                <h3 className='about'>CONTACT US</h3>
            </div>
            <div className="googlemap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.0112209446906!2d-97.02098602540842!3d32.92430177644643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2a32884c138b%3A0xb2c58e6e943cd846!2sPERK%20SYSTEMS!5e0!3m2!1sen!2sin!4v1693297291420!5m2!1sen!2sin"
                    width="650" height="290" style={{ margin: '40px 20px 50px 120px' }} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="address">
                    <h3 className="contacthead">Contact Us</h3>
                    <li className="listdetails"><i class="fa fa-phone" style={{fontSize:'24px', marginRight:'5px'}}></i>214-842-6969</li>
                    <li className="listdetails"><i class="fa fa-phone" style={{fontSize:'24px', marginRight:'5px'}}></i>214-614-4848</li>
                    <li className="listdetails"><i class="fa fa-envelope" style={{fontSize:'24px', marginRight:'5px'}}></i>info@perksys.com</li>
                    <li className="listdetails"><i class="fa fa-bookmark-o" style={{fontSize:'24px',marginRight:'5px'}}></i>www.perksys.com</li>
                    <li className="listdetails"><i class="fa fa-area-chart" style={{fontSize:'24px', marginRight:'5px'}}></i>Perk Systems, Inc.<br />
                        8505, Freeport Parkway, Suite#385<br />
                        Irving, TX-75063</li>
                </div>
            </div>
            <div className="contact-form">
                <h3>Get in Touch</h3>
                <input type="text" placeholder="Name" id="contactinput" /><input type="email" placeholder="Email" id="contactinput" /><input type="number" placeholder="Phone" id="contactinput" /><br />
                <textarea type="text" placeholder="Message" id="contactinput" /><br />
                <button id="contactbutton">SUBMIT</button>
            </div>
        </>
    )
}

export default Contact;