import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactRotatingText from "react-rotating-text";
import styled from "styled-components";

const RotatingTextStyles = styled.div`

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
  
`;



const IndexPage = () => (
  <Layout>
  <RotatingTextStyles>
  <div>
      <SEO title="Home" />
      <h1><ReactRotatingText items={[`Hi, I'm George`, `Thanks for stopping by...`, 0]} eraseMode="erase" pause="3000" /></h1> 
      {/* Need to stop the text being deleted after the loop ends */}
      <p>I'm a web developer with a passion for building and learning new things.</p>
  </div>
  <div>
      <h2>About</h2>
      <p>I'm a web developer with a passion for building and learning new things.</p>
  </div>
  <div>
      <h2>Contact</h2>
      <p>I'm a web developer with a passion for building and learning new things.</p>
  </div>
  </RotatingTextStyles>
  </Layout>
)

export default IndexPage;



