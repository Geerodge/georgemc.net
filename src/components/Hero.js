import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import background from "../images/sky-clouds.jpg"

const HeroStyles = styled.div`

    --color-1: var(--white);
    --color-2: var(--white);
    --color-3: var(--white);
    --color-4: var(--white);
    --color-5: var(--white);

    .hero-text {
        line-height: 1;
        min-height: 100%;
        display: grid;
        place-items: center;
        min-height: calc(95vh - 16px);

        h1 {
            font-family: "Exo", sans-serif;
            font-size: 15vw;
            font-weight: 900;
            width: -webkit-min-content;
            width: -moz-min-content;
            width: min-content;
            margin: auto;
            text-transform: uppercase;
            background: linear-gradient(219deg, 
                var(--color-1) 19%, 
                transparent 19%,transparent 20%, 
                var(--color-2) 20%, var(--color-2)  39%,
                transparent 39%,transparent 40%, 
                var(--color-3) 40%,var(--color-3) 59% ,
                transparent 59%,transparent 60%, 
                var(--color-4) 60%, var(--color-4) 79%,
                transparent 79%, transparent 80%, 
                var(--color-5) 80%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            text-align: center;
        }
        h2 {
            text-align: center;
            color: var(--white);
        }
    }

    .hero-image {
        background-image:
            linear-gradient(
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
            ),
            url(${background});
        
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .arrow {
        border: solid var(--white);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }
    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

        .hero-text{
            h1 {
                font-size: 10vw;
            }
        }
    }

    /* For devices with width greater than or equal to 1200px, like desktop computers */
    @media only screen 
        and (min-width: 1200px) {

        .hero-text{
            h1 {
                font-size: 7vw;
            }
        }
    }

`;

const Hero = () => (

    <HeroStyles>
        <div className="hero-image">
            <div className="hero-text">
                <h1>Hi, I'm George</h1>
                <h2>I create attractive websites that make your business grow...</h2>
                <Link to="/contact" target="_blank" rel="noreferrer">
                    <button className="primary">Contact now</button>
                </Link>
                <i className="arrow down"></i>
            </div>
        </div> 
    </HeroStyles>

)

export default Hero;