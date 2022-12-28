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
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

const BlogStyles = styled.div`

    margin: 1em;
    width: calc(100vw - 2em);
    max-width: 100%;

    h1 {
      line-height: 1.2em;
    }

    img,
    iframe,
    figure {
      max-width: 100%;
    }
/* 
    figure {
      text-align: center;
    }
    figure img {
      margin: 0 auto;
    } */

    @media only screen 
      and (min-width: 800px) {
        .youtube-video {
          float: left;
          margin: 2.5%;
          max-width: 45%;
        }
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
            youtube: ({node}) => {
              const { url } = node
              const id = getYouTubeId(url)
              return (<YouTube containerClassName="youtube-video" videoId={id} />)
            }
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
            projectId={'3rtiop9p'}
            dataset={'production'}
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