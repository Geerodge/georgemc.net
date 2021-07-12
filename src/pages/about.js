import React from "react"
import About from "../components/About";
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
  </Layout>
)

export default AboutPage;