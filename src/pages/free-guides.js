import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styled from "styled-components";
import BlogPostPreviewList from "../components/blog/BlogPostPreviewList";
import seoImage from "../images/george-mcentegart.jpg"

const FreeGuidesStyles = styled.div`

    margin: 2em 1em;

    .center {
        text-align: center;
    }

`;

export default function Newsletter({ data: { allSanityPost } }) {

    const blogData = allSanityPost.edges;

    return (
        <Layout>
            <FreeGuidesStyles>
            <Seo 
                title="Free Guides for Beginner Web Developers"
                description="Free guides and resources for beginner web developers."
                image={seoImage}
            />
            <h1 className="center">Free Guides for Beginner Web Developers</h1>
            <p className="center">I'm on a journey to share what I know and create useful resources for web developers, especially for people just starting out in the industry. I'm continuously learning, but here are some guides that cover what I've learned so far.</p>
            <BlogPostPreviewList
            title=""
            data={blogData}
            />
        </FreeGuidesStyles>
        </Layout>
    )
}

export const query = graphql`
    query FreeGuideQuery {
        allSanityPost(filter: {categories: {elemMatch: {_id: {eq: "05948542-63c4-4c92-802f-892d8264ed8c"}}}}) {
            edges {
                node {
                    slug {
                        current
                    }
                    mainImage {
                        alt
                        asset {
                            fluid(maxWidth: 1000) {
                            ...GatsbySanityImageFluid
                            }
                        }
                    }
                    title
                    seoTitle
                    seoDescription
                    _updatedAt
                    _createdAt
                    author {
                    name
                    mainImage {
                        alt
                        asset {
                        fixed(width: 400) {
                            ...GatsbySanityImageFixed
                        }
                        }
                    }
                    bio {
                        _key
                        _type
                        style
                        list
                        _rawChildren
                    }
                    }
                    categories {
                        title
                    }
                }
            }
        }
    }
`;
