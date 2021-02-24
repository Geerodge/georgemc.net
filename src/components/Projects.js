import React from "react"
import styled from "styled-components";

const ProjectStyles = styled.div`

  margin-top: 0px;
  margin-bottom: 100px;

  .project-container {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-template-rows:  1fr;
    gap: 25px;
    grid-template-areas:
      "item-1 item-1 item-2 item-2"
      "item-3 item-3 item-4 item-4";
  }
  .item-1 {
    grid-area: item-1;
  }
  .item-2 {
    grid-area: item-2;
  }
  .item-3 {
    grid-area: item-3;
  }
  .item-4 {
    grid-area: item-4;
  }

  /* Underline Effect */
  p:first-child:before {
    display: none;
  }
  p:before {
      content: " ";
      border: 1px solid black;
      margin-top: 15px;
      margin-bottom: 15px;
      display: block;
      max-width: 100px;
  }

  /* Mobile CSS */
  /* For devices with width of 480px and less, like phones */
  @media only screen and (max-width: 480px) {
    margin: 5%;

    .project-container {
      display: grid;
      grid-template-columns:  1fr;
      grid-template-rows:  1fr;
      gap: 0;
      grid-template-areas:
        "item-1"
        "item-2"
        "item-3"
        "item-4";

      ul {
        padding-left: 20px;
      }

      .item-2 {
        margin-right: 0;
      }
    }
  }
  /* For devices with width between 481px and 768px, like larger phones and portrait tablets */
  @media only screen and (min-width: 481px) {

  } 
  /* For devices with width between 769px and 1279px, like landscape tablets and laptops */
  @media only screen and (min-width: 769px) {

  } 
  /* For devices with width of 1280px and more, like desktop computers */
  @media only screen and (min-width: 1280px) {

  }
`;


const Projects = () => (
<ProjectStyles>
    <h2 id="projects">Projects</h2>
    <div className="project-container">
        <div className="item-1">
            <h3>Cheeky Tea</h3>
            <p>An online tea store and wholesale tea supplier.</p>
            <ul>
                <li>Built with Gatsby, Sanity</li>
                <li><a href="https://cheekytea.co.uk" target="_blank" rel="noreferrer noopener">Live Site</a></li>
                <li>View an old <a href="https://cheekytea.georgemc.net" target="_blank" rel="noreferrer noopener">demo version here</a>, built on WordPress with WooCommerce</li>
            </ul>
        </div>
        <div className="item-2">
            <h3>House Buy Fast</h3>
            <p>A cash property buying company that purchase property UK wide.</p>
            <ul>
                <li>Built with PHP and JavaScript</li>
                <li><a href="https://housebuyfast.co.uk" target="_blank" rel="noreferrer noopener">Live Website</a></li>
            </ul>
        </div>
        <div className="item-3">
            <h3>The Tree Planters</h3>
            <p>A UK tree planting charity that I'm involved with.</p>
            <ul>
                <li>Built with Wordpress, customised theme <a href="https://generatepress.com/" target="_blank" rel="noreferrer noopener">GeneratePress</a></li>
                <li><a href="http://thetreeplanters.georgemc.net" target="_blank" rel="noreferrer noopener">Demo Website</a></li>
            </ul>
        </div>
        <div className="item-4">
            <h3>Sunny Worthing</h3>
            <p>A website promoting Worthing and the Sussex areas.</p>
            <ul>
                <li>Built with WordPress, Elementor</li>
                <li><a href="https://sunnyworthing.co.uk" target="_blank" rel="noreferrer noopener">Live Website</a></li>
            </ul>
        </div>
    </div>
</ ProjectStyles>

)

export default Projects;