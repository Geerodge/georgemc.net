import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "../components/About";
import seoImage from "../images/george-mcentegart.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <Seo 
        title="Home"
        description="Practical SEO, marketing and website tips that will help you grow your business."
        image={seoImage}        
      />
      <About homepage={true} />
    </Layout>
  )
}

export default IndexPage;