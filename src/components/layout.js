import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

const LayoutStyles = styled.div`

  .myGrid {
    display: grid;
    grid: 
        "header" auto
        "body" 1fr
        "footer" auto
        / 1fr;
    grid-gap: 16px;
    justify-content: center;
    margin: auto
  }

  .header {
    grid-area: header;
    min-height: 75px;
    background: var(--primary);
  }

  .body {
    grid-area: body;
    max-width: 1280px;
    margin: 0 auto;
  }

  .footer {
    grid-area: footer;
  }

`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <LayoutStyles>
        <section className='myGrid'>
          <div className='header'>
            <Header />
          </div>
          <div className='body'>
            {children}
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </section>
      </LayoutStyles>
    </>
  )
}

export default Layout


