import React from "react";
import './home.css';
import clients from './clients.jpg'

function Client() {
  return (
    <>
      <div className="contentclient">
        <img src={clients} alt='client' className='aboutimage' />
        <h3 className='about'>CLIENTS</h3>
      </div>
      <div className="clientpara">
        <p className="paraperk">Perk Systems Inc proud to have associated with outstanding companies in all sectors
          and all sizes from fortune 500 companies to individual start up companies.
          For most of our consultants, this diversity is a key reason for their choice of profession:
          because this guarantees a broad variety of tasks and challenges.
          We typically assign a dedicated team of experienced staff members to our clients
          that will coordinate all matters with respect to your international subsidiaries,
          so continuity and quality of service are guaranteed.</p>
        <h4 className="vertical">Verticals Served:</h4>
        <ul className="listitems">
          <li>Automotive</li>
          <li>Communications</li>
          <li>Financial/Banking</li>
          <li>Manufacturing</li>
          <li>Retail</li>
          <li>Health Care</li>
          <li>Information Technology</li>
        </ul>
      </div>
    </>
  )
}

export default Client;