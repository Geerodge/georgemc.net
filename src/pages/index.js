import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Projects from "../components/Projects/Projects";
import Intro from "../components/Intro";
import About from "../components/About";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage;