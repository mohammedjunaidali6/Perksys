import React from 'react';
import aboutus12 from './aboutus12.jpg'
import perksysinc from './perksysinc.jpg'
import primacel from './primacel-vision.jpg'
import team from './team.jpg'
import our from './our-approach.jpg'

import './home.css';
const About = () => {
  return (
    <>
      <div className="contentabout">
        <img src={aboutus12} alt='aboutus' className='aboutimage' />
        <h3 className='about'>ABOUT US</h3>
      </div>
      <div className='content-container'>
        <img src={perksysinc} alt='besideimg' className='perksysinc' />

        <p className='paragraph'>
          <h1>Welcome to Perk Systems, Inc.</h1>
          <b>Perk Systems, Inc.</b> customized technology service provider for a wide variety of clients from different
          industries. Over the decade we have been offering recruitment, consulting, project outsourcing and
          unparalleled expertise in delivering solutions.We offer a uniquely comprehensive and innovative solution
          set that effectively meets the needs of our clients and associates from recruitment to IT Technology solutions.
          During that time, both the client and the employee have time to evaluate the situation and determine the relationship.
          All our processes are designed to leverage our knowledge most effectively to facilitate our client satisfaction and candidate’s growth.

          We provide services to a wide spectrum of clients ranging from startups to fortune 500 companies.
          We always take the time to understand your vision, requirements and needs – simply so we can develop the right solution for your business.
          We’re extremely experienced at developing solutions to meet all kinds of business and client needs. We employ highly skilled professionals,
          all of which have extensive experience, ensuring we meet client expectations and industry standards.</p>

      </div>
      <div className='sidebyside'>
        <div className='content-container'>
          <p className='paragraph'>
            <h2 className="vertical">Our Vision</h2>
            To capture the high market share by maintaining consistently high level
            of value proposition&customer service excellence in order to continuously exceed customer expectations.
          </p>
          <img src={primacel} alt='vision' />
        </div>
        <div className='content-container'>
          <p className='paragraph'>
            {/* <h1 className='blue'>Our Mission</h1> */}
            <h2 className="vertical">Our Mission</h2>
            To be an enduring company by creating superior service products for several diversified industries
            by constantly upgrading our professional & technological competencies to suit the customer needs
            and changing IT industry trends. Exceed industry standards for quality, growth, profitability,
            rates of return and shareholder equity.
          </p>
          <img src={team} alt='team' />
        </div>
      </div>
      <div className='content-container'>
        <p className='paragraph1'>
          {/* <h1>Our Approach</h1> */}
          <h2 className="vertical">Our Approach</h2>
          <b>Integrity –</b> Always dealing with our clients and our colleagues in a fair and ethical manner; gaining trust through our actions.<br />

          <b>Knowledge –</b> The value we place on our ability to develop leaders and the need to continually grow our collective technical expertise to meet the needs of ever more sophisticated clients.<br />

          <b>Service –</b> Encompasses the concept of quality in everything we do, having a service-mindset when dealing with clients and demanding a lot of ourselves.<br />

          <b>Respect –</b> Respect for one another in the office will lead to greater morale and staff satisfaction, which ultimately will result in lower to higher turnover.<br />

          <b>Leadership –</b> Leadership both within the firm with respect to developing our next generation of leaders and within our market segment with respect to being recognized by current and prospective clients as a firm that is the leading expert in the field.<br />

          <b>Enthusiasm –</b> Employing and nurturing staff with a passion for providing the highest-level quality service to our clients.
        </p>

        <img src={our} alt='besideimg' />
      </div>
    </>
  );
};

export default About;