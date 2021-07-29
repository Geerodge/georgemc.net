import React from "react";
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
export default function BlogPosts({ pageContext: { data } }) {

    {console.log(data)}

    return (
      <Layout>
        <BlogStyles>
          <Seo 
            title={data.seoTitle}
            description={data.seoDescription}
          />
          <h1>{data.title}</h1>
          <BlogDate 
            createdAt={data._createdAt}
            updatedAt={data._updatedAt}
          />
          <BlogImage 
            data={data}
          />
          <BlockContent
            blocks={data._rawBody}
          />
          <BlogCategories
            categories={data.categories}
          />
          <BlogAuthor 
            author={data.author.name}
            src={data.author.mainImage.asset.fixed.src}
            alt={data.author.mainImage.alt}
            bio={data.author.bio[0]._rawChildren[0].text}
          />
        </BlogStyles>
      </Layout>
    )
}