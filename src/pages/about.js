import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => {
  let { isHomePage } = false;
  return (
    <Layout>
      <Seo 
        title="About"
        description="Freelance web developer based in North Devon, UK."
      />
      <About isHomePage={isHomePage} />
    </Layout>
  )
}
export default AboutPage;