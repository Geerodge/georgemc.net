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
                title="SEO Marketing Blog For Online Business Owners"
                description="Tips and strategies for improving your website's SEO, driving more traffic to your website and getting more sales."
                image={seoImage}
            />
            <h1 className="center">SEO Marketing Blog</h1>
            <p className="center">Welcome to my SEO marketing blog for online business owners! I'll be sharing tips and strategies for improving your website's SEO, driving more traffic to your website and getting more sales.</p>
            <BlogPostPreviewList
            title=""
            data={blogData}
            />
        </FreeGuidesStyles>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuery {
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
