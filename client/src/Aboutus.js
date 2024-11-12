import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import background from './Assets/background.jpg'; // Import the image

const AboutUs = () => {
  return (
    <div
      className="about-us-background"
      style={{ backgroundImage: `url(${background})` }} // Apply the background image inline
    >
      <div className="about-us-container">
        <header className="hero-section">
          <Link className='nav-item' to='/demo'>
            <h1>Welcome to CommunityHub360</h1>
          </Link>
          <p className="intro">
            CommunityHub360 is redefining residential community management with state-of-the-art technology. Our platform streamlines communication and operations, creating a connected, efficient, and engaged community.
          </p>
        </header>

        <section className="card-section">
          <h2>Experience the CommunityHub360 Advantage</h2>
          <div className="card-container">
            <div className="card">
              <h3>Technology-Driven</h3>
              <p>Our platform, powered by React, offers a seamless and interactive experience for all users.</p>
            </div>
            <div className="card">
              <h3>User-Friendly Interface</h3>
              <p>Our platform is designed for accessibility, ensuring intuitive use for all community members.</p>
            </div>
            <div className="card">
              <h3>Adaptable and Robust</h3>
              <p>CommunityHub360 scales to meet the evolving needs of every community we serve.</p>
            </div>
          </div>
        </section>

        <section className="distinction-section">
          <h2>Our Distinction</h2>
          <p>Dedicated to Community Excellence</p>
          <ul>
            <li><strong>Resident-Centric Service:</strong> Your satisfaction is our priority, with dedicated support and engagement.</li>
            <li><strong>Continuous Innovation:</strong> Regular updates and enhancements ensure that we empower your community.</li>
          </ul>
        </section>

        <section className="team-section">
  <h2>Our Team</h2>
  <p>A Collective of Community Champions</p>
  <p><strong>Vignesh Appani</strong> - Founder & Community Lead</p>
  <p><strong>Nick Shah</strong> - Technology Strategist</p>
  <p><strong>Peter</strong> - Operations Manager</p>
  <p><strong>Johnny</strong> - Community Engagement Specialist</p>
</section>


        <section className="contact-section">
          <h2>Connect With Us</h2>
          <p>Discover more about CommunityHub360 and join us in building better communities.</p>
          <p>
            <a href="mailto:vigneshappani2000@gmail.com" className="contact-link">vigneshappani2000@gmail.com</a> |
            <a href="tel:+15186988918" className="contact-link"> +1 (518) 698-8918</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
