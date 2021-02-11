import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./header"
import styled from "styled-components";
import Footer from "./Footer";

const LayoutStyles = styled.div`

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". content content ."
      "footer footer footer footer";
  }

  .header {
    grid-area: header;
  }

  .content { 
    grid-area: content;
  }

  .footer { 
    grid-area: footer;
  }

  /* For devices with width of 480px and less, like phones */
  @media only screen and (max-width: 480px) {
    .grid-container {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
      "content content"
      "footer footer";
    }
  } 

  /* For devices with width between 481px and 768px, like larger phones and portrait tablets */
  @media only screen and (min-width: 481px) {...} 

  /* For devices with width between 769px and 1279px, like landscape tablets and laptops */
  @media only screen and (min-width: 769px) {...} 

  /* For devices with width of 1280px and more, like desktop computers */
  @media only screen and (min-width: 1280px) {...}

`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyles />
      <LayoutStyles>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="grid-container">
        <main className="content">{children}</main>
        <Footer />
      </div>
      </LayoutStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


