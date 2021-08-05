import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Projects from "../components/Projects/Projects";
import About from "../components/About";
import Services from "../components/Services";

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Home"
      description="I create attractive websites and web applications that make your business grow."
    />
    <Services />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage;