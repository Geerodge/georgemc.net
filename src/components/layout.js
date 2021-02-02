/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

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

  .header { grid-area: header; }

  .footer { grid-area: footer; }

  .content { grid-area: content; }
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
      <div class="grid-container">
        <div class="header">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
        <div class="content">
          <main>{children}</main>
        </div>
        <div class="footer">
          <footer>
            © {new Date().getFullYear()} George McEntegart
          </footer>
        </div>
      </div>
      </LayoutStyles>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


