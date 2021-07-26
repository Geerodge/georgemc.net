import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.div`

    /* Mobile Nav */
    @keyframes bugfix { from {padding:0;} to {padding:0;}}
    @-webkit-keyframes bugfix { from {padding:0;} to {padding:0;}}

    #overlay-button {
        position: absolute;
        right: 1em;
        top: .5em;
        padding: 26px 11px;
        z-index: 5;
        cursor: pointer;
        user-select: none;
        span {
            height: 4px;
            width: 35px;
            border-radius: 2px;
            background-color: var(--white);
            position: relative;
            display: block;
            transition: all .2s ease-in-out;
            &:before {
                top: -10px;
                visibility: visible;
            }
            &:after {
                top: 10px;
            }
            &:before, &:after {
                height: 4px;
                width: 35px;
                border-radius: 2px;
                background-color: var(--white);
                position: absolute;
                content: "";
                transition: all .2s ease-in-out;
            }
        }
        &:hover span, &:hover span:before, &:hover span:after {
            background: var(--darkgrey);
        }
    }

    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox]:checked ~ #overlay {
        visibility: visible;
    }

    input[type=checkbox]:checked ~ #overlay-button {
        &:hover span, span{
            background: transparent;
        }
        span {
            &:before {
                transform: rotate(45deg) translate(7px, 7px);
                opacity: 1;
            }
            &:after {
                transform: rotate(-45deg) translate(7px, -7px);
            }
        }
    }

    #overlay {
        height: 100vh;
        width: 100vw;
        background: var(--primary);
        z-index: 2;
        visibility: hidden;
        position: fixed;
        &.active {
            visibility: visible;
        }
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            height: 100vh;
            padding-left: 0;
            list-style-type: none;
            li {
                padding: 1em;
                a {
                    color: var(--white);
                    text-decoration: none;
                    font-size: 1.5em;
                    &:hover {
                        color: var(--darkgrey);;
                    }
                }
            }
        }
    }

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

            #overlay-button {
                display: none;
            }

            #overlay {
                position: static;
                background: none;
                font-size: .85em;
                height: inherit;

                ul {
                    visibility: visible;
                    flex-flow: row nowrap;
                    height: 75px;
                    margin: 0;
                }
            }

    }
    
`;

const Header = () => (

    <HeaderStyles>
        <nav>
            <input type="checkbox" id="overlay-input" />
            <label htmlFor="overlay-input" id="overlay-button"><span></span></label>
            <div id="overlay">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </HeaderStyles>

)

export default Header;