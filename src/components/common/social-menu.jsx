import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { config } from '../../helpers/config';
import { FaFacebook, FaTwitter, FaLinkedin,FaInstagram,FaYoutube, FaGithub } from "react-icons/fa";

const SocialMenu = (props) => {
  return (
    <>
                 <Nav {...props}>                 
                    <Nav.Link href={config.contact.socialMedia.facebook} target="_blank">
                    <FaFacebook/>
                    </Nav.Link>
                    <Nav.Link href={config.contact.socialMedia.twitter} target="_blank">
                    <FaTwitter/>
                    </Nav.Link>
                    <Nav.Link href={config.contact.socialMedia.linkedin} target="_blank">
                    <FaLinkedin/>
                    </Nav.Link>
                    <Nav.Link href={config.contact.socialMedia.instagram} target="_blank">
                    <FaInstagram/>
                    </Nav.Link>
                    <Nav.Link href={config.contact.socialMedia.youtube} target="_blank">
                    <FaYoutube/>
                    </Nav.Link>
                    <Nav.Link href={config.contact.socialMedia.github} target="_blank">
                    <FaGithub/>
                    </Nav.Link>
                  
                    </Nav>
    </>
  );
};

export default SocialMenu;