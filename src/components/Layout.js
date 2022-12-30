import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";
import Footer from "./Footer";
import Clouds from "./Clouds";

const LayoutStyles = styled.div`

  .myGrid {
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid: 
        "header"
        "hero"
        "body"
        "footer";
    grid-gap: 0;
    justify-content: center;
    margin: auto;
  }

  .header {
    grid-area: header;
    min-height: 75px;
    background: var(--primary);
    width: 100vw;
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
  
    return (
        <>
        <GlobalStyles />
        <LayoutStyles>
            <section className="myGrid">
                <div className="header">
                    <Nav />
                </div>
                <div className="hero">
                    <Clouds />
                </div>
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
