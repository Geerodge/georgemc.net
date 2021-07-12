import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm";
import styled from "styled-components";


const ContactPageStyles = styled.div`

  margin: 3em 1em;

`;

const ContactPage = () => (
  <Layout>
    <ContactPageStyles>
      <SEO title="Home" />
      <h1>Say Hello 👋</h1>
      <p>Fill out the form below and I'll be in touch as soon as possible.</p>
      <p>Alternatively, call me to discuss your requirements on <strong>07899 890634</strong>.</p>
      <ContactForm />
    </ContactPageStyles>
  </Layout>

)

export default ContactPage;