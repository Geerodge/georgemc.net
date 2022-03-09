import React from "react";
import styled from "styled-components";
import Box from "./Box";

const CardStyles = styled.div`

    margin: 3em 1em;

    .box-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }

    .box {
        background-color: var(--secondary);
        color: var(--white);
        padding: 1em;
        box-shadow: 10px 10px rgba(85,122,149,.3);
        h1, h2, h3 {
            color: var(--white);
        }
    }

  /* For devices with width greater than or equal to 768px, like landscape tablets and laptops */
  @media only screen
    and (min-width: 768px) {

       .box-wrapper {
            justify-content: space-evenly;
        }

        .box__one {
            flex: 2;
        }

        .box__two {
            flex: 2;
        }

        .box__three {
            flex-wrap: wrap;
        } 

  }

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

        .box {
            box-shadow: 10px 10px rgba(85,122,149,.15);
            transition: all .4s ease;
            &:hover {
                border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
                box-shadow: 5px 5px rgba(85,122,149,.25);
            }
        }

    }

    /* For devices with width greater than or equal to 1025px, like desktop computers */
    @media only screen 
        and (min-width: 1025px) {

        .box-wrapper {
            flex-wrap: nowrap;
        }

        .box {
            box-shadow: 20px 20px rgba(85,122,149,.15);
            margin: .5em;
            flex: 1;
        }

    }

`;

const Projects = () => (

    <CardStyles>
        <div className="box-wrapper">
            <div className="box box__one">
                <Box 
                    icon="email"
                    heading="The Primo Post"
                    description="Practical web development tips and insights that will help you improve your skills."
                />
            </div>
            <div className="box box__two">
                <Box
                    icon="mobile"
                    heading="Websites You Can Trust"
                    description="Using the latest tools and trends, I create websites that are blisteringly fast, accessible and great looking."
                />
            </div>
            <div className="box box__three">
            <Box
                icon="handshake"
                heading="Consultation &amp; Training"
                description="Need advice or training for a new or existing project? No problem. Lets discuss how I can help you."
            />
            </div>
        </div>
    </CardStyles>

);

export default Projects;