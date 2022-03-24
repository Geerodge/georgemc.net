import React from "react";
import About from "../components/About";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import seoImage from "../images/george-mcentegart.jpg"

const AboutPage = () => {
  let { isHomePage } = false;
  return (
    <Layout>
      <Seo 
        title="About"
        description="Freelance web developer based in North Devon, UK."
        image={seoImage}
      />
      <About isHomePage={isHomePage} />
    </Layout>
  )
}
export default AboutPage;