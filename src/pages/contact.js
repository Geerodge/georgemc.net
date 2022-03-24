import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContactForm from "../components/ContactForm";
import styled from "styled-components";
import seoImage from "../images/george-mcentegart.jpg"

const ContactPageStyles = styled.div`

    margin: 2em 1em;

    .wave {
        animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
        animation-duration: 2.5s;        /* Change to speed up or slow down */
        animation-iteration-count: infinite;  /* Never stop waving :) */
        transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
        display: inline-block;
    }

    @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
        100% { transform: rotate( 0.0deg) }
    }
    
`;

const ContactPage = () => (
  <Layout>
    <ContactPageStyles>
      <Seo 
        title="Contact"
        description="I’m always open to ideas and new opportunities."
        image={seoImage}
      />
      <h1>Say Hello <span className="wave" role="img" aria-label="Hand Waving">👋</span></h1>
      <p>I love to help people grow their businesses and projects. If you want to work together or need some help with a project, please contact me directly using the form below.</p>
      <ContactForm />
    </ContactPageStyles>
  </Layout>

)

export default ContactPage;