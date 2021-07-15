import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const AboutPage = () => (
  <Layout>
    <SEO 
      title="About"
      description="Freelance web developer based in North Devon, UK."
    />
    <About />
  </Layout>
)

export default AboutPage;