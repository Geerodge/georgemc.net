import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import styled from 'styled-components';

const BlogStyles = styled.div`

`;

// Data is passed in via context in gatsby-node.js
export default function BasicPage({ pageContext: { slug }, data: { allSanityPost } }) {

    // Deconstruct page data
    const blogData = allSanityPost.edges[0].node;

    const serializers = {
        types: {
            code: (props) => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
            ),
        },
    }

    console.log(blogData);

    return (
        <BlogStyles>
            <h1>{slug}</h1>
            <p>{blogData.author.name}</p>
            {/* <BlockContent
                blocks={blogPosts._rawContent}
                serializers={serializers}
            /> */}
        </BlogStyles>
    )
}

export const query = graphql`
query($slug: String!) {
    allSanityPost(filter: {slug: {current: {eq: $slug}}}) {
        edges {
            node {
              id
              title
              author {
                name
                image {
                  asset {
                    fluid {
                      src
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
                asset {
                  fluid {
                    src
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