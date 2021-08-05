import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import BlogDate from "../components/blog/BlogDate";
import BlogCategories from "../components/blog/BlogCategories";
import BlogAuthor from "../components/blog/BlogAuthor";
import BlogImage from "../components/blog/BlogImage";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogStyles = styled.div`

    margin: 1em;

    h1 {
        line-height: 1.2em;
    }

    /* Code in text */
    p > code,
    li > code,
    dd > code,
    td > code {
        background-color: rgb(115, 149, 174, .3);
        word-wrap: break-word;
        box-decoration-break: clone;
        padding: .1rem .3rem .2rem;
        border-radius: .2rem;
    }

`;

// Data is passed in via context in gatsby-node.js
export default function BlogPosts({ pageContext: { data } }) {
    const serializers = {
        types: {
            code: (props) => (
                <SyntaxHighlighter language={props.node.language} style={coldarkDark}>
                    {props.node.code}
                </SyntaxHighlighter>
            ),
        },
    }
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
            serializers={serializers}
          />
          <BlogCategories
            categories={data.categories}
          />
          <BlogAuthor 
            author={data.author.name}
            src={data.author.mainImage.asset.fixed}
            alt={data.author.mainImage.alt}
            bio={data.author.bio[0]._rawChildren[0].text}
          />
        </BlogStyles>
      </Layout>
    )
}