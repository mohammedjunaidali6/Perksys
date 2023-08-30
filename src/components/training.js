import React from "react";
import './home.css';
import training1 from './training1.jpg'
import ApplicationDevelopment from "./ApplicationDevelopment.jpg";

function Training() {

    return (
        <>
            <div className="contenttraining">
                <img src={training1} alt='client' className='aboutimage' />
                <h3 className='about'>TRAINING</h3>
            </div>
            <div className='content-container-consult'>
                <img src={ApplicationDevelopment} alt='besideimg' className='manipic' />

                <p className='paragraphconsult'>
                    In today’s demanding business world, training is of critical importance.
                    successful training is a planned process to modify attitude, knowledge or skill behavior
                    through learning experience to achieve effective performance. Training focuses on learning
                    the necessary skills and acquiring the knowledge required to perform the job. It deals with
                    the design and delivery of learning to improve organization performance.

                    Perk Systems, Inc. provide more economic and convenient training solution for individuals &
                    groups as well. Our training use leading edge, high quality course manuals in all courses that we train.
                    Advanced training can provide fully customized training needs analysis, course programs, course outlines
                    and evaluation forms that incorporates software applications and modules specific to growing technology
                    trends & requirements.
                </p>

            </div>
            <div className="training-page">
                <h1 className="ourtraininghead">Our training methodology:</h1>
                <ul className="listtraining">
                    <li>Train in a comfortable, ready-to-learn environment</li>
                    <li>Interact face-to-face with peers and expert instructors</li>
                    <li>Study topical, results-oriented course content</li>
                    <li>Use state-of-the-art equipment</li>
                    <li>Get hands-on labs practice</li>
                </ul>
                <h1 className="trainingsbelow">We provide regular trainings on below <span className="techno">Technologies:</span></h1>
                <ul className="listtraining">
                    <li>Java/J2EE</li>
                    <li>.NET</li>
                    <li>QA testing</li>
                    <li>Business analysis</li>
                    <li>SQL server development</li>
                    <li>UI developers</li>
                    <li>Datapower and hadoop technologies</li>
                </ul>
            </div>
        </>
    )
}

export default Training;