import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Box from "./Box";

const IntroStyles = styled.div`

    --color-1: #16253f;
    --color-2: #16253f;
    --color-3: #16253f;
    --color-4: #16253f;
    --color-5: #16253f;

    margin: 1em;

    .arrow {
        border: solid var(--black);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
    }
    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    .text-wrapper {
        line-height: 1;
        min-height: 100%;
        display: grid;
        place-items: center;
        min-height: calc(100vh - 16px);
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
            line-height: 1.2;
        }
    }

    .item-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }

    .item {
        background-color: var(--secondary);
        color: var(--white);
        padding: 1em;
        h1, h2, h3 {
            color: var(--white);
        }
    }

  /* For devices with width greater than or equal to 768px, like landscape tablets and laptops */
  @media only screen
    and (min-width: 768px) {

        .text-wrapper h1 {
            font-size: 5em;
       }

       .item-wrapper {
            justify-content: space-evenly;
        }

        .one {
            flex: 2;
        }

        .two {
            flex: 2;
        }

        .three {
            flex-wrap: wrap;
        } 

  }

  /* For devices with width greater than or equal to 822px (slight tweek to text size) */
  @media only screen
    and (min-width: 822px) {

        .text-wrapper h2 {
            width: 90%;
       }

  }

  /* For devices with width greater than or equal to 1025px, like desktop computers */
  @media only screen 
    and (min-width: 1025px) {

    .text-wrapper h1 {
        font-size: 4em;
    }

    .item-wrapper {
        flex-wrap: nowrap;
    }

    .item {
        margin: .5em;
        flex: 1;
    }

  }

    /* For devices with width greater than or equal to 2300px, like large screen desktop computers */
    @media only screen 
    and (min-width: 2300px) {

        margin: 0 1em 4em;

  }

`;

const Intro = () => (
    
    <IntroStyles>
        <div className="text-wrapper">
            <h1>Hi, I'm George</h1>
            <h2>I create attractive websites that make your business grow...</h2>
            <Link to="/contact" target="_blank" rel="noreferrer">
                <button className="primary">Contact now</button>
            </Link>
            <i className="arrow down"></i>
        </div>
        <div className="item-wrapper">
            <div className="item one">
                <Box 
                    icon="handshake"
                    heading="Web Design You Can Trust"
                    description="Using the latest tools and trends, I create websites that are blisteringly fast, accessible and great looking."
                />
            </div>
            <div className="item two">
                <Box
                    icon="mobile"
                    heading="Mobile and SEO Optimised"
                    description="Every website I develop works seamlessly on mobile and tablets, whilst similtanously being SEO optimised to ensure that your website is accessible by search engines."
                />
            </div>
            <div className="item three">
            <Box
                icon="tools"
                heading="Hosting and Maintenance "
                description="I can offer industry leading web hosting and maintenance to ensure your website or application is always available for it's users, giving you peace of mind to focus on what matters."
            />
            </div>
        </div>
    </IntroStyles>

)

export default Intro;
