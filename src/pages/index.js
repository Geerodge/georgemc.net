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
        description="Practical web development tips and insights that will help you improve your skills."
        image={seoImage}        
      />
      <About homepage={true} />
    </Layout>
  )
}

export default IndexPage;