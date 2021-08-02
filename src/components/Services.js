import React from "react";
import styled from "styled-components";
import Box from "./Box";

const ProjectStyles = styled.div`

    margin: 3em 1em;

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
        box-shadow: 10px 10px rgba(85,122,149,.3);
        h1, h2, h3 {
            color: var(--white);
        }
    }

  /* For devices with width greater than or equal to 768px, like landscape tablets and laptops */
  @media only screen
    and (min-width: 768px) {

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

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

        .item {
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

        .item-wrapper {
            flex-wrap: nowrap;
        }

        .item {
            box-shadow: 20px 20px rgba(85,122,149,.15);
            margin: .5em;
            flex: 1;
        }

    }

`;

const Projects = () => (

    <ProjectStyles>
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
                    description="Every website I develop works seamlessly on mobile and tablets, whilst simultaneously being SEO optimised to ensure that your website is accessible by search engines."
                />
            </div>
            <div className="item three">
            <Box
                icon="tools"
                heading="Troubleshooting and Maintenance"
                description="I can help you troubleshoot your application or set up your website to ensure it's secure and available for users, giving you peace of mind to focus on what matters."
            />
            </div>
        </div>
    </ProjectStyles>

);

export default Projects;