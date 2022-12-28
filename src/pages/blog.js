import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import styled from "styled-components";
import BlogPostPreviewList from "../components/blog/BlogPostPreviewList";
import seoImage from "../images/george-mcentegart.jpg"

const FreeGuidesStyles = styled.div`

    margin: 2em 1em;

    h1 {
        max-width: 35ch;
        margin: 0 auto;
    }

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
                description="Free guides, tools and resources to help your grow your business."
                image={seoImage}
            />
            <h1 className="center">Blog</h1>
            <p className="center">Here you'll find all my newsletters, free guides and articles. I write about growing your online business, marketing, SEO and analytics.</p>
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
        allSanityPost(filter: {categories: {elemMatch: {_id: {eq: "3603cf4d-9d4a-429e-b54e-3cd43132a1f3"}}}}) {
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
