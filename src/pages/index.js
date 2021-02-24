import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import Image from "../components/image";
import Projects from "../components/Projects";

const IndexStyles = styled.div`

  line-height: 1.75;

  .content-container {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    grid-template-rows:  1fr;
    grid-template-areas:
      "item-1 item-1 item-1 item-1"
      "item-2 item-2 item-3 item-3";
    h3 {
      margin-bottom: 0;
    }
  }
  .item-1 {
    grid-area: item-1;
  }
  .item-2 {
    grid-area: item-2;
    margin-right: 4rem;
  }
  .item-3 {
    grid-area: item-3;
  }

   /* Main Styles */
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
  .contact-container {
    ul {
    margin-top: 25px;
    }
  }
  .highlight {
    background-color: #fff2ac;
    background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
  }
  .intro {
    margin: 0 0 100px 0;
  }
  .button {
    display: block;
    max-width: 10%;
    background-color: #e7e7e7; 
    color: black;
    padding: 20px 15px;
    text-decoration: none;
    font-size: 2rem;
    margin-top: 30px;
    text-align: center;
    &:hover {
      background-color: #f3f3f3;
    }
  }

  /* Image Effect */
  .morphing {
    max-width: 85%;
    background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 15px 15px 50px rgba(0,0,0,0.25);
    animation: morphing 10s infinite;
  }
  .morphing:hover {
    animation-play-state: paused;
  }
  .morphing h1 {
    color: #fff;
    font-size: 35px;
    text-transform:uppercase;
    text-align: center;
    line-height: 300px;
    font-weight: 400;
    text-shadow: 1px 1px 4px rgba(0,0,0.1);
  }
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      }
    25% {
      border-radius: 50% 50% 50% 70% / 50% 50% 70% 60%;
      box-shadow: -15px -15px -50px rgba(0,0,0,0.25);
    }
    50% {
      border-radius: 50% 40% 50% 80% / 50% 45% 70% 50%;
      box-shadow: -15px -15px -50px rgba(0,0,0,0.25);
    }
    70% {
      border-radius: 50% 70% 50% 50% / 70% 60% 50% 50%;
      box-shadow: -30x -30x -20x rgba(0,0,0,0.25);
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  };

  /* Mobile CSS */
  /* For devices with width of 480px and less, like phones */
  @media only screen and (max-width: 480px) {
    .content-container {
      grid-template-columns: 1fr;
      grid-template-areas:
      "item-1"
      "item-2"
      "item-3"
      "item-4";
      
      margin: 5%;

      .item-2 {
        margin-right: 0;
      }
      .item-3 {
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }

    /* Main Content */
    .intro {
      margin: 0;
      h1 {
        font-size: 4.5rem;
        line-height: 1;
      }
      h2 {
        font-size: 3rem;
      }
      h3 {
        font-size: 2rem;
      }
    }
    .contact-container {
      margin: 5%;
      ul {
        padding-left: 20px;
      }
    }
    .button {
      max-width: 50%;
      margin: 4rem auto;
      text-align: center;
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

const IndexPage = () => (
  <Layout>
  <IndexStyles>
  <SEO title="Home" />
    <article>
      <div className="content-container">
        <div className="item-1">
          <div className="intro">
            <h1>Hi, I'm George</h1>
            <h3>Thanks for stopping by...</h3>
            <p>I'm a developer <span className="highlight">using JavaScript, React, Gatsby and Express</span>. I'm always interested in new opportunities, <a href="https://www.notion.so/George-McEntegart-54f946adb15d4ababfad7b490f1183ff" target="_blank" rel="noreferrer">check out my CV here</a>.</p>
          </div>
        </div>
        <div className="item-2">
        <h2 id="about">About</h2>
        <p>I've been building websites and working in the IT industry for over 10 years &#129299;</p>
        <p>I have a wide range of experience which includes marketing, SEO, CRO, lead generation, content creation, steamlining business process and business operations.</p>
        <p>I'm now focusing on making websites using React and JavaScript.</p>
        </div>
        <div className="item-3">
          <Image name="me-2.jpg" />
        </div>
      </div>
      <Projects />
      <div className="contact-container">
        <h2>Contact</h2>
        <p>If you need a developer, please feel free to contact me.</p>
        <ul>
          <li><strong>Email:</strong> geerodge@gmail.com</li>
          <li><strong>Phone:</strong> +44 7899 890 634</li>
          <li><strong>Location:</strong> United Kingdom</li>
        </ul>
        <a className="button" href="https://www.notion.so/George-McEntegart-54f946adb15d4ababfad7b490f1183ff" target="_blank" rel="noreferrer">View CV</a>
      </div>
    </article>
  </IndexStyles>
  </Layout>
)

export default IndexPage;



