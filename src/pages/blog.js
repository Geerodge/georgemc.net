import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogPostPreviewList from "../components/blog/BlogPostPreviewList";

export default function BlogPage({ data: { allSanityPost } }) {

  const blogData = allSanityPost.edges;

  return (
    <Layout>
      <Seo 
        title="Blog"
        description="I write about web development and things I've learnt building websites."
      />
      <BlogPostPreviewList
        title="Latest blog posts"
        data={blogData}
      />
    </Layout>
  )
}

export const query = graphql`
query BlogQuery {
    allSanityPost(filter: {slug: {current: {ne: null}}}) {
        edges {
            node {
                slug {
                    current
                }
                mainImage {
                  alt
                  asset {
                    gatsbyImageData
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
                      gatsbyImageData
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