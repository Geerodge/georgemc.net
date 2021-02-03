import React from "react";
import styled from "styled-components";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

const FooterStyles = styled.div`
    text-align: center;
    margin: 25px;
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
`;

function Footer() {
    return (
        <>
        <div className="footer">
        <FooterStyles>
            <footer>
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
            <a href="mailto:geerodge@gmail.com">
                <SiMinutemailer className="icons" />
            </a>
            </footer>
            </FooterStyles>
        </div>
        </>
    )
}

export default Footer;