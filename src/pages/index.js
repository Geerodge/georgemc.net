import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Projects from "../components/Projects/Projects";
import About from "../components/About";
import Services from "../components/Services";

const IndexPage = () => {
  return (
    <Layout>
      <Seo 
        title="Home"
        description="I create attractive websites that make your business grow."
      />
      <Services />
      <About homepage={true} />
      <Projects />
    </Layout>
  )
}

export default IndexPage;