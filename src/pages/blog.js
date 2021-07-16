import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogPostPreviewList from "../components/blog/BlogPostPreviewList";

export default function BlogPage({ data: { allSanityPost } }) {

  const blogData = allSanityPost.edges;
  console.log(allSanityPost);

  return (
    <Layout>
      <Seo 
        title="Blog"
        description="I write about web development and things I've learnt building websites."
      />
      {/* <BlogPostPreviewList
        title="Latest blog posts"
        data={blogData}
      /> */}
      {/* Need to work out what to replace blogData.slug with and then work this into the component BlogPostPreviewList.js with perhaps a map or foreach function */}
      <ul>
        {blogData.map((post, index) => (
            <li key={index}>{blogData.slug}</li>
        ))}
      </ul>
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
            }
        }
    }
}
`;