import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedin, FaSteam, FaInstagram } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import ReactRotatingText from "react-rotating-text";

const FooterStyles = styled.div`
    text-align: center;
    margin: 25px;
    line-height: 1.75;
    .icons {
        color: black;
        margin-top: 10px;
        transition: 0.3s;
        &:hover {
            color: green;
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

function Footer() {
    return (
        <div className="footer">
        <FooterStyles>
            <footer>
            <p className="love">Things I &#x2764;&#xFE0F; <ReactRotatingText items={[`Open Source`, `Nature`, `Web 3.0`, `Music`,`Cryptocurrency`, `Learning and building new things`, `Dogs`, `The Beach`, `Gaming`]} eraseMode="erase" pause={2000} /></p>
            {/* Figure out how to stop the text being deleted after the loop ends and add to GitHub repo - https://github.com/adrianmcli/react-rotating-text/ */}
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
            <a href="https://www.instagram.com/geerodge">
                <FaInstagram className="icons" />
            </a>
            <a href="https://steamcommunity.com/id/Geerodge">
                <FaSteam className="icons" />
            </a>
            <a href="mailto:geerodge@gmail.com">
                <SiMinutemailer className="icons" />
            </a>
            </footer>
        </FooterStyles>
        </div>
    )
}

export default Footer;