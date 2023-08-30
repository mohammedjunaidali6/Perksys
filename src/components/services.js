import React from "react";
import { Link } from "react-router-dom";
import servicefinal from './servicefinal.jpg'
import services from './services.jpg'
import './home.css'

function Services() {
  return (
    <>
      <div className="contentservice">
        <img src={servicefinal} alt='aboutus' className='aboutimage' />
        <h3 className='about'>SERVICES</h3>
      </div>
      <div className='content-container-service'>
        <img src={services} alt='beside' id="serviceimg" />

        <p className='paragraph'>
          Our focus is on meeting your technology needs.
          We offer a spectrum of services that are appropriate to your requirements –
          custom product development, application maintenance, system implementation, technical support,
          and onsite consulting. Whether you are a small company or a Fortune 500 leader,
          we have the experience and capabilities to work with you. In addition to our technology services,
          our senior management has extensive expertise in strategy, product innovation, supply chain management,
          and other areas of business. <br /><h3><b>Our core areas of services:</b></h3>
          <div className="servicelinks">
            <Link to="/application-development">Application Development</Link><br />
            <Link to="/consulting">Custom Consulting Services</Link><br />
            <Link to="/training">Training</Link><br />
          </div>
        </p>

      </div>

    </>
  )
}
export default Services;