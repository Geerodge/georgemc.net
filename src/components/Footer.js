import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import ReactRotatingText from "react-rotating-text";

const FooterStyles = styled.div`

    text-align: center;
    margin: 25px;
    line-height: 1.75;

    .icons {
        color: var(--tertiary);
        margin-top: 10px;
        transition: 0.3s;
        &:hover {
            color: var(--secondary);
        }
    }
    
    a {
        margin: 10px;
    }

    .love {
        text-align: center;
    }

    .react-rotating-text-cursor {
        animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
    }
  
    @keyframes blinking-cursor {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <div className="footer">
                <footer>
                    <p className="love">Things I <span role="img" aria-label="Heart">&#x2764;&#xFE0F;</span> <ReactRotatingText items={[`Open Source`, `Nature`, `Web 3.0`, `Music`,`Ethereum`, `Wine`, `Learning and building new things`, `Dogs`, `The Beach`, `Gaming`]} eraseMode="erase" pause={2000} /></p>
                    © {new Date().getFullYear()} George McEntegart<br />
                    <a href="https://github.com/Geerodge" target="_blank" rel="noreferrer">
                        <FaGithub className="icons" />
                    </a>
                    <a href="https://twitter.com/geerodge" target="_blank" rel="noreferrer">
                        <FaTwitter className="icons" />
                    </a>
                    <a href="https://www.linkedin.com/in/georgemcentegart/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="icons" />
                    </a>
                    <a href="https://www.instagram.com/geerodge" target="_blank" rel="noreferrer">
                        <FaInstagram className="icons" />
                    </a>
                    <a href="mailto:geerodge@gmail.com">
                        <SiMinutemailer className="icons" />
                    </a>
                </footer>
            </div>
        </FooterStyles>
    )
}

export default Footer;