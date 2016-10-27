import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about__hello">
        <div className="about__hello__header">
          <h2><u>HELLO, MY NAME IS WILLIAM SHAW</u></h2>
        </div>
        <div className="about__hello__content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem ut lectus fringilla tincidunt. Pellentesque fringilla enim interdum dui lacinia, quis aliquet leo volutpat. Nullam egestas consequat lectus sit amet vestibulum. </p>
        </div>
      </div>
      <div className="about__facts">
        <div className="about__facts__header">
          <h2><u>FACTS</u></h2>
        </div>
        <div className="about__facts__content">
          <ul className="about__facts__list">
            <li>I am a huge baseball fan. Lets go Mets!!!</li>
            <li>I am a winter baby and have always wanted a pool party for my birthday</li>
            <li>I believe in the motto "Under promise, Over Deliver"</li>
            <li>I can play a few instruments and used to tour in a band</li>
          </ul>
        </div>
      </div>
      <div className="about__skills">
        <div className="about__skills__header">
          <h2><u>SKILL SETS</u></h2>
        </div>
      </div>
    </div>
  );
};

export default About;