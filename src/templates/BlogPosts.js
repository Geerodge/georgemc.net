import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogDate from "../components/blog/BlogDate";
import BlogCategories from "../components/blog/BlogCategories";
import BlogAuthor from "../components/blog/BlogAuthor";
import BlogImage from "../components/blog/BlogImage";

const BlogStyles = styled.div`

    margin: 1em;

    h1 {
        line-height: 1.2em;
    }

`;

// Data is passed in via context in gatsby-node.js
export default function BlogPosts({ pageContext: { slug }, data: { allSanityPost } }) {
    // Deconstruct page data
    const blogData = allSanityPost.edges[0].node;

    return (
        <StaticQuery
          query={graphql`
          query($slug: String!) {
            allSanityPost(filter: {slug: {current: {eq: $slug}}}) {
                edges {
                    node {
                      id
                      title
                      seoTitle
                      seoDescription
                      _rawBody
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
                      mainImage {
                        alt
                        asset {
                          fluid(maxWidth: 1000) {
                            ...GatsbySanityImageFluid
                          }
                        }
                      }
                      body {
                        _key
                        _type
                        style
                        list
                        _rawChildren
                      }
                    }
                  }
                }
              }
          `}
          render={blogData => (
            <Layout>
              <BlogStyles>
                <Seo 
                  title={blogData.seoTitle}
                  description={blogData.seoDescription}
                />
                <h1>{blogData.title}</h1>
                <BlogDate 
                  createdAt={blogData._createdAt}
                  updatedAt={blogData._updatedAt}
                />
                <BlogImage 
                  data={blogData}
                />
                <BlockContent
                  blocks={blogData._rawBody}
                />
                <BlogCategories
                  categories={blogData.categories}
                />
                <BlogAuthor 
                  author={blogData.author.name}
                  src={blogData.author.mainImage.asset.fixed}
                  alt={blogData.author.mainImage.alt}
                  bio={blogData.author.bio[0]._rawChildren[0].text}
                />
              </BlogStyles>
            </Layout>
          )}
        />
    )
}