import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styled from "styled-components";
import Review from "../components/Review";

const ReviewsStyles = styled.div`

    margin: 2em 1em;

`;

export default function ReviewsPage({ data: { allSanityReview } }) {

    const data = allSanityReview.nodes;

    return (
        <Layout>
            <ReviewsStyles>
            <Seo 
                title="Website Design Reviews, Devon"
                description="Here is a collection of my website reviews to date. Lots of happy clients!"
            />
            <h1>Web Design Reviews</h1>
            <Review
                data={data}
                reviews="all"
            />
            </ReviewsStyles>
        </Layout>
    )
}
export const query = graphql`
    query ReviewQuery {
        allSanityReview {
            nodes {
                reviewer
                id
                company
                review
            }
        }
    }
`;