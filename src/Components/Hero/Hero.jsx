import React from "react";
import "./Hero.css";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineBookOpen, HiOutlineUserGroup } from "react-icons/hi";
import { LuCalendarMinus2 } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="hero">
      <div className="info">
        <h1>What is</h1>
        <h1>EleaThom?</h1>
        <p>
          The core pillar of EleaThom is giving back and paying it forward.
          Founded in honor of Eleanor and Thomas, who contributed tremendously
          to their community through time and resources during their lifetime.
        </p>
        <div></div>
      </div>
      <div className="services">
        <div className="iconService">
            <HiOutlineBookOpen className="ricons"/>
            <div className="texts">
                <h4>Legal Resources</h4>
                <small>Comprehensive study materials</small>
            </div>
        </div>
        <div className="iconService">
            <HiOutlineUserGroup className="ricons"/>
            <div className="texts">
                <h4>Community</h4>
                <small>Connect with peers</small>
            </div>
        </div>
        <div className="iconService">
            <LuCalendarMinus2 className="ricons"/>
            <div className="texts">
                <h4>Events</h4>
                <small>Professional development</small>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
