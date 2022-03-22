import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import About from "../components/About";

const IndexPage = () => {
  return (
    <Layout>
      <Seo 
        title="Home"
        description="Practical web development tips and insights that will help you improve your skills."
      />
      <About homepage={true} />
    </Layout>
  )
}

export default IndexPage;