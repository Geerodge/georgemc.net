import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import Clouds from "./Clouds";

const LayoutStyles = styled.div`

  .myGrid {
    display: grid;
    grid: 
        "header" auto
        "hero" auto
        "body" 1fr
        "footer" auto
        / 1fr;
    grid-gap: 0;
    justify-content: center;
    margin: auto;
  }

  .header {
    grid-area: header;
    min-height: 75px;
    background: var(--primary);
  }

  .hero {
    grid-area: hero;
  }

  .body {
    grid-area: body;
    max-width: 1280px;
    min-height: calc(100vh - 255px);
    margin: 0 auto;
  }

  .footer {
    grid-area: footer;
  }

`;

const Layout = ({ children }) => {

    // Check if it's the homepage to display Hero component
    function isHome() {
        if (typeof window !== `undefined` && window.location.pathname === "/") {
            return <div className="hero"><Clouds /></div>
        }
    }

    return (
        <>
        <GlobalStyles />
        <LayoutStyles>
            <section className="myGrid">
                <div className="header">
                    <Header />
                </div>
                {isHome()}
                <div className="body">
                    {children}
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </section>
        </LayoutStyles>
        </>
    )
}

export default Layout;
