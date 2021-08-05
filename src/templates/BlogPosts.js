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
    width: calc(100vw - 2em);

    h1 {
        line-height: 1.2em;
    }



    /* For devices with width greater than or equal to 768px, like landscape tablets and laptops */
    @media only screen
        and (min-width: 768px) {

    }

    /* For devices with width greater than or equal to 992px, like landscape tablets and laptops */
    @media only screen
        and (min-width: 992px) {

    }

    /* For devices with width greater than or equal to 1200px, like landscape tablets and laptops */
    @media only screen
        and (min-width: 1200px) {


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