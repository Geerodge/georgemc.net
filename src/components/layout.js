import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./header"
import styled from "styled-components";

const LayoutStyles = styled.div`

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "header header header header"
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
      <main className="content">{children}</main>
      <div className="footer">
        <footer>
          © {new Date().getFullYear()} George McEntegart
        </footer>
      </div>
      </LayoutStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


