import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styled from "styled-components";
import ImageTopCards from "../components/ImageTopCard/ImageTopCards";

const FreeGuidesStyles = styled.div`

    margin: 2em 1em;

    .center {
        text-align: center;
    }

`;

const FreeGuidesPage = () => {
    return (
        <Layout>
            <FreeGuidesStyles>
            <Seo 
                title="Free Guides for Beginner Web Developers"
                description="Free guides and resources for beginner web developers."
            />
            <h1 className="center">Free Guides for Beginner Web Developers</h1>
            <p className="center">I'm on a journey to share what I know and create useful resources for web developers, especially for people just starting out in the industry. I'm continuously learning, but here are some guides that cover what I've learned so far.</p>
            <ImageTopCards />
            </FreeGuidesStyles>
        </Layout>
    )
}
export default FreeGuidesPage;
