import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogDate from "../components/blog/BlogDate";
import BlogCategories from "../components/blog/BlogCategories";
import BlogAuthor from "../components/blog/BlogAuthor";
import Img from "gatsby-image"

const BlogStyles = styled.div`

`;

// Data is passed in via context in gatsby-node.js
export default function BlogPosts({ pageContext: { slug }, data: { allSanityPost } }) {
    // Deconstruct page data
    const blogData = allSanityPost.edges[0].node;

    console.log(blogData);

    return (
      <Layout>
        <BlogStyles>
          <Seo 
            title={blogData.seoTitle}
            description={blogData.seoDescription}
          />
          <BlogDate 
            createdAt={blogData._createdAt}
            updatedAt={blogData._updatedAt}
          />
          <Img
            fluid={blogData.mainImage.asset.fluid}
            alt={blogData.mainImage.alt}
          />
          <h1>{blogData.title}</h1>
          <BlockContent
            blocks={blogData._rawBody}
          />
          <BlogCategories
            categories={blogData.categories}
          />
          <BlogAuthor 
            author={blogData.author.name}
            src={blogData.author.mainImage.asset.fluid}
            alt={blogData.author.mainImage.alt}
            bio={blogData.author.bio[0]._rawChildren[0].text}
          />
        </BlogStyles>
      </Layout>
    )
}

export const query = graphql`
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
                    fluid(maxWidth: 400) {
                      ...GatsbySanityImageFluid
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
`;