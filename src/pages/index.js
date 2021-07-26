import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Projects from "../components/Projects/Projects";
import Intro from "../components/Intro";
import About from "../components/About";

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Home"
      description="I create attractive websites and web applications that make your business grow."
    />
    <Intro />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage;