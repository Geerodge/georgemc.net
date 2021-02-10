import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactRotatingText from "react-rotating-text";
import styled from "styled-components";
import Image from "../components/image";

const RotatingTextStyles = styled.div`

  line-height: 1.75;

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

  .content-container {
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-template-rows:  1fr;
    gap: 50px;
    grid-template-areas:
      "item-1 item-2"
  }

  .item-1 {
    grid-area: item-1;
    align-self: center;
  }
  .item-2 {
    grid-area: item-2;
  }

  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  .me {
    max-width: 80%;
  }
  .love {
    margin: 50px 0px;
  }
  .contact {
    margin-top: 25px;
  }
  .highlight {
    background-color: #fff2ac;
    background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
  }
  .image-wrapper {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    overflow: hidden;
  }
  .intro {
    margin: 0 0 100px 0;
  }
  .button {
    background-color: #e7e7e7; 
    color: black;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    margin-top: 25px;
  }
  
`;



const IndexPage = () => (
  <Layout>
  <RotatingTextStyles>
  <SEO title="Home" />
  <div className="intro">
    <h1>Hi, I'm George</h1>
    <h3>Thanks for stopping by...</h3>
    <p>I'm a developer with a <span className="highlight">passion for building and learning</span> new things.</p>
    {/* Figure out how to stop the text being deleted after the loop ends and add to GitHub repo - https://github.com/adrianmcli/react-rotating-text/ */}
  </div>
    <div className="content-container">
      <div className="item-1">
        <h2 id="about">About</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <div className="item-2">
        <div className="me image-wrapper">
          <Image />
        </div>
      </div>
    </div>
    <h3 className="love">Things I ❤️ <ReactRotatingText items={[`Open Source`, `Nature`, `Web 3.0`, `Music`,`Cryptocurrency`, `Learning and building new things`, `Dogs`]} eraseMode="erase" pause={2000} /></h3>
    <h2 id="projects">Projects</h2>
    <div className="content-container">
      <div className="item-1">
          <h3>Cheeky Tea</h3>
        <ul>
          <li>Description: An online tea store and wholesale tea supplier</li>
          <li>Built with: Gatsby, Sanity</li>
          <li><a href="https://cheekytea.co.uk" target="_blank" rel="noreferrer noopener">Live Site</a></li>
          <li>View an old <a href="https://cheekytea.georgemc.net" target="_blank" rel="noreferrer noopener">demo version here</a>, built on WordPress with WooCommerce</li>
        </ul>
      </div>
      <div className="item-2">
          <h3>Sunny Worthing</h3>
        <ul>
          <li>Description: A website promoting Worthing and the Sussex areas</li>
          <li>Built with: WordPress, Elementor</li>
          <li><a href="https://sunnyworthing.co.uk" target="_blank" rel="noreferrer noopener">Live Website</a></li>
        </ul>
      </div>
    </div>
    <div className="content-container">
      <div className="item-1">
          <h3>The Tree Planters</h3>
        <ul>
          <li>Description: A UK tree planting charity that I'm involved with</li>
          <li>Built with: Wordpress, customised theme <a GeneratePress href="https://generatepress.com/" target="_blank" rel="noreferrer noopener">GeneratePress</a></li>
          <li><a href="http://thetreeplanters.georgemc.net" target="_blank" rel="noreferrer noopener">Demo Website</a></li>
        </ul>
      </div>
      <div className="item-2">
          <h3>More soon...</h3>
      </div>
    </div>
    <h2 id="contact">Contact</h2>
    <p>If you need a developer for your new or on-going project, feel free to contact me.</p>
    <ul className="contact">
      <li><strong>Email:</strong> geerodge@gmail.com</li>
      <li><strong>Phone:</strong> +44 7899 890 634</li>
      <li><strong>Location:</strong> United Kingdom</li>
    </ul>
    <a href="#" className="button">Download CV</a>
  </RotatingTextStyles>
  </Layout>
)

export default IndexPage;



