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
        description="I love to help people grow their businesses and projects. Find out more about how I can help you."
        image={seoImage}
      />
      <About isHomePage={isHomePage} />
    </Layout>
  )
}
export default AboutPage;