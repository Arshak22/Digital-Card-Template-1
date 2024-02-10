import React from 'react';
import './style.css';

//Pictures
import topBG from '../../assets/topBG.jpg';
import logo from '../../assets/Logo.png';
import agentPic from '../../assets/agentPic.jpg';

//Icons
import { FaPhone } from 'react-icons/fa6';
import { BsEnvelopePaperFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { FaGlobe } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function IntroSection() {
  return (
    <div className='IntroSection'>
      <div className='topBG'>
        <img src={topBG} alt='topBG' />
      </div>
      <div className='topLogo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='agentPic'>
        <img src={agentPic} alt='agentPic' />
      </div>
      <div className='half-circle'></div>
      <div className='triangle-down'></div>
      <div>
        <h1 className='agent-name'>Johnson Smith</h1>
        <h2 className='agent-name agent-profession'>Real Estate Agent</h2>
      </div>
      <div className='social-icons'>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <div className='main-contact-l'>
            <div className='main-contact-icon'>
              <FaPhone />
            </div>
            <h3>+01 123 423 10101</h3>
          </div>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <div className='main-contact-r'>
            <h3>mail@gmail.com</h3>
            <div className='main-contact-icon'>
              <BsEnvelopePaperFill />
            </div>
          </div>
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <div className='main-contact-l'>
            <div className='main-contact-icon'>
              <FaMapMarkerAlt />
            </div>
            <h3>7 Seven Avenue, Ney York, NY, 1211</h3>
          </div>
        </a>
        <div className='grouped-social-icons'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon'>
              <FaGlobe />
            </div>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon'>
              <FaFacebookF />
            </div>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon'>
              <FaFacebookMessenger />
            </div>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon instagram-icon'>
              <AiFillInstagram />
            </div>
          </a>
        </div>
        <div className='grouped-social-icons'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon'>
              <FaLinkedinIn />
            </div>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon'>
              <BsTwitterX />
            </div>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <div className='main-contact-icon'>
              <FaYoutube />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
