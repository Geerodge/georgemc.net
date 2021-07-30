import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ProjectsStyles = styled.div`

    margin: 4em 1em;

    .item-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }

    .item {
        min-width: 100%;
    }

    .gatsby-image-wrapper {
        min-height: 200px;
        max-height: 200px;
    }

    .link {
        position: absolute;
        bottom: 0;
    }

    /* For devices with width greater than or equal to 769px, like desktop computers */
    @media only screen 
        and (min-width: 768px) {

        .item-wrapper {
            justify-content: space-evenly;
        }

        .gatsby-image-wrapper {
            min-height: 400px;
            max-height: 400px;
        }

        .link {
            position: relative;
        }

    }

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

        .item-wrapper {
            flex-wrap: wrap;
        }

        .item {
            min-width: 20%;
            flex: 1;
        }

        .gatsby-image-wrapper {
            min-height: 200px;
            max-height: 200px;
        }

        .box {
            min-height: 600px;  
        }
    
        .link {
            position: absolute;
            bottom: 0;
        }

    }

    /* For devices with width greater than or equal to 1280px, like desktop computers */
    @media only screen 
        and (min-width: 1280px) {

            .item-wrapper {
                flex-wrap: nowrap;
            }

    }
  
`;

const Projects = () => (

  // img name needs to match the file name and extension exactly.
  // img needs to match here, in Project.js and in the components GraphQL query within /components/Images

    <ProjectsStyles>
        <h2 id="projects">Projects</h2>
        <div className="item-wrapper">
            <div className="item one">
                <Project
                    heading="Cheeky Tea"
                    description="An online tea store and wholesale tea supplier."
                    link="https://cheekytea.co.uk"
                    img="cheeky-tea.png"
                    alt="Cheeky Tea"
                />
            </div>
            <div className="item two">
                <Project
                    heading="House Buy Fast"
                    description="A cash property buying company that purchase property UK wide."
                    link="https://housebuyfast.co.uk"
                    img="house-buy-fast.png"
                    alt="House Buy Fast"
                />
            </div>
            <div className="item three">
                <Project
                    heading="The Tree Planters"
                    description="A UK tree planting charity that I'm a Trustee of."
                    link="http://thetreeplanters.georgemc.net"
                    img="the-tree-planters.png"
                    alt="The Tree Planters"
                />
            </div>
            <div className="item four">
                <Project
                    heading="Sunny Worthing"
                    description="A website promoting Worthing and the Sussex areas."
                    link="https://sunnyworthing.co.uk"
                    img="sunny-worthing.png"
                    alt="Sunny Worthing"
                />
            </div>
        </div>
    </ ProjectsStyles>
  
)

export default Projects;