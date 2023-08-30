import React from "react";
import './home.css';
import consulting from './consulting.jpg'
import manipic from './mainpic.jpg'

function Consulting() {

    return (
        <>
            <div className="contentconsulting">
                <img src={consulting} alt='client' className='aboutimage' />
                <h3 className='about'>CUSTOM CONSULTING SERVICES</h3>
            </div>
            <div className='content-container-consult'>
                <img src={manipic} alt='besideimg' className='manipic' />

                <p className='paragraphconsult'>
                    Perk Systems, Inc. provides complete consulting and custom application services.
                    Our management consulting services focus on our client’s most critical issues and opportunities.
                    We take the time to understand your needs carefully and work with you to implement the agreed solutions.
                    With extensive understanding of global and local businesses entity and industry,
                    our simplified, cost-efficient processes provide a customized range of software consulting services
                    to the middle level to multi-national companies. Our services are available over a wide range of
                    geographical area that spans United States.
                    We have cultivated team of talented consultants who understand business operations and how to bridge that
                    to technical execution. Our expert team size for different segment to make sure that our clients get the
                    best services for their needs.Our approach ensures that the client can be confident in a successful
                    managed delivery.
                </p>

            </div>
        </>
    )
}

export default Consulting;