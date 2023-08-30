import React, { useState, useEffect } from 'react';
import laptopImage1 from './Laptop.jpg';
import laptopImage2 from './LaptopAncient.jpg';
import laptopImage3 from './LaptopOld.jpg';
import laptopImage4 from './HomeView.jpg';
import './home.css';

const images = [laptopImage1, laptopImage2, laptopImage3, laptopImage4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Update the image index every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="content">
        <img
          src={images[currentImageIndex]}
          alt={`Laptop ${currentImageIndex + 1}`}
          // style={{ width: '100%', height: '454px' }}
          id="imgslide"
        />
      </div>
      <div className="services-section">
        <div className="service">
          <div className="service-title">
            {/* <i className="fas fa-cogs"></i> */}
            <i className="fa fa-lightbulb-o" style={{ fontSize: '48px', color: 'white', marginRight: '20px' }}></i>
            <div className="subHeading"> IT Services</div>
          </div>
          <p className='itservice'>
            Our focus is on meeting your technology needs. We offer a
            spectrum of services that are appropriate to your requirements..
          </p>
        </div>
        <div className="service">
          <div className="service-title">
            {/* <i className="fas fa-cogs"></i> */}
            <i class="fa fa-briefcase" style={{ fontSize: '48px', color: 'white', marginRight: '20px' }}></i>
            <div className="subHeading"> Custom Services</div>
          </div>
          <p className='itservice'>
            Perk Systems Inc provides complete consulting and custom
            application services. Our management consulting services focus
            on..
          </p>
        </div>
        <div className="service">
          <div className="service-title">
            {/* <i className="fas fa-cogs"></i> */}
            <i class="fa fa-trophy" style={{ fontSize: '48px', color: 'white', marginRight: '20px' }}></i>
            <div className="subHeading"> Training</div>
          </div>
          <p className='itservice'>
            In today’s demanding business world, training is of critical
            importance. successful training is a planned process to modify
            attitude, knowledge or skill behavior through learning
            experience to achieve effective performance.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
