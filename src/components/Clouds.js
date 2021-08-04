import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// import background from "../images/sky-clouds.jpg"

const HeroStyles = styled.div`

    --color-1: var(--tertiary);
    --color-2: var(--tertiary);
    --color-3: var(--tertiary);
    --color-4: var(--tertiary);
    --color-5: var(--tertiary);

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
            color: var(--tertiary);
        }
    }

    .arrow {
        border: solid var(--tertiary);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }
    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    #background-wrap {
        bottom: 0;
        left: 0;
        padding-top: 200px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        overflow: hidden;
    }

    /* KEYFRAMES */

    @-webkit-keyframes animateCloud {
        0% {
            margin-left: -1000px;
        }
        100% {
            margin-left: 100%;
        }
    }

    @-moz-keyframes animateCloud {
        0% {
            margin-left: -1000px;
        }
        100% {
            margin-left: 100%;
        }
    }

    @keyframes animateCloud {
        0% {
            margin-left: -1000px;
        }
        100% {
            margin-left: 100%;
        }
    }

    /* ANIMATIONS */

    .x1 {
        -webkit-animation: animateCloud 35s linear infinite;
        -moz-animation: animateCloud 35s linear infinite;
        animation: animateCloud 35s linear infinite;
        
        -webkit-transform: scale(0.65);
        -moz-transform: scale(0.65);
        transform: scale(0.65);
    }

    .x2 {
        -webkit-animation: animateCloud 20s linear infinite;
        -moz-animation: animateCloud 20s linear infinite;
        animation: animateCloud 20s linear infinite;
        
        -webkit-transform: scale(0.3);
        -moz-transform: scale(0.3);
        transform: scale(0.3);
    }

    .x3 {
        -webkit-animation: animateCloud 30s linear infinite;
        -moz-animation: animateCloud 30s linear infinite;
        animation: animateCloud 30s linear infinite;
        
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        transform: scale(0.5);
    }

    .x4 {
        -webkit-animation: animateCloud 18s linear infinite;
        -moz-animation: animateCloud 18s linear infinite;
        animation: animateCloud 18s linear infinite;
        
        -webkit-transform: scale(0.4);
        -moz-transform: scale(0.4);
        transform: scale(0.4);
    }

    .x5 {
        -webkit-animation: animateCloud 25s linear infinite;
        -moz-animation: animateCloud 25s linear infinite;
        animation: animateCloud 25s linear infinite;
        
        -webkit-transform: scale(0.55);
        -moz-transform: scale(0.55);
        transform: scale(0.55);
    }

    /* OBJECTS */

    .cloud {
        background: #fff;
        background: -moz-linear-gradient(top,  #fff 5%, #f1f1f1 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(5%,#fff), color-stop(100%,#f1f1f1));
        background: -webkit-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        background: -o-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        background: -ms-linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        background: linear-gradient(top,  #fff 5%,#f1f1f1 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );
        
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
        
        -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
        box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

        height: 120px;
        position: relative;
        width: 350px;
    }

    .cloud:after, .cloud:before {
        background: #fff;
        content: '';
        position: absolute;
        z-index: -1;
    }

    .cloud:after {
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;

        height: 100px;
        left: 50px;
        top: -50px;
        width: 100px;
    }

    .cloud:before {
        -webkit-border-radius: 200px;
        -moz-border-radius: 200px;
        border-radius: 200px;

        width: 180px;
        height: 180px;
        right: 50px;
        top: -90px;
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
                font-size: 5vw;
            }
        }
    }

`;

const Hero = () => (

    <HeroStyles>
        <div id="background-wrap">
            <div class="x1">
                <div class="cloud"></div>
            </div>

            <div class="x2">
                <div class="cloud"></div>
            </div>

            <div class="x3">
                <div class="cloud"></div>
            </div>

            <div class="x4">
                <div class="cloud"></div>
            </div>

            <div class="x5">
                <div class="cloud"></div>
            </div>
        </div>
        <div className="hero-text">
            <h1>Hi, I'm George</h1>
            <h2>I create attractive websites that make your business grow...</h2>
            <Link to="/contact" target="_blank" rel="noreferrer">
                <button className="primary">Contact now</button>
            </Link>
            <i className="arrow down"></i>
        </div>
    </HeroStyles>

)

export default Hero;