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
    grid-template-rows: 1fr 1fr 1fr;
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


