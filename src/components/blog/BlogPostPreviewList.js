import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import BlogDate from "./BlogDate";
import BlogImage from "./BlogImage";

const BlogPostPreviewListStyles = styled.div`

    margin: 1em;

    a {
        text-decoration: none;
    }

    h2, p {
        margin: .5em 0;
        line-height: 1.2em;
    }

    h2 {
        &:hover {
            text-decoration: underline;
        }
    }

    button {
        margin: 1em 0;
    }

    .post {
        margin-top: 2em;
        width: 90%;
        &::after {
            content:"";
            display: block;
            width: 100%;
            height: 20px;
            border-bottom: 5px dotted var(--quinary);
        }
    }

    @media only screen 
        and (min-width: 768px) {
    
        .container {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
        }

        .post {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1em 2em;
            background-color: var(--primary);
            overflow: hidden;
            box-shadow: 20px 20px rgba(85,122,149,.15);
            transition: all .4s ease;
            &:hover {
                box-shadow: 10px 10px rgba(85,122,149,.25);
            }
            &::after {
                content: none;
            }

            .date {
                font-size: .8em;
            }

            .gatsby-image-wrapper {
                width: 175px;
                height: 175px;
                margin: 0 auto;
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                box-shadow: 15px 15px 50px rgba(0,0,0,0.25);
            }

            h2, p {
                color: var(--white);
            }

            // Background shape
            .block-color {
                position: relative;
                background-color: var(--white);
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                box-shadow: 15px 15px 50px rgba(0,0,0,0.25);
                margin: 2em 2em 2em auto;
            }

            // Even numbered blog posts
            &:nth-child(even) .left .block-color {
                border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            }

            // Odd numbered blog posts
            &:nth-child(odd) .left .gatsby-image-wrapper {
                border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            }

            // Every third blog post
            &:nth-child(3n+0) .left .gatsby-image-wrapper {
                border-radius: 50%;
            }
            &:nth-child(3n+0) .left .block-color {
                border-radius: 100% 50% 60% 50% / 80% 30% 100% 35%;
            }

        }
    }

    @media only screen 
        and (min-width: 992px) {

        .gatsby-image-wrapper {
            width: 225px!important;
            height: 225px!important;
        }

    }

    @media only screen 
        and (min-width: 1200px) {

        .gatsby-image-wrapper {
            width: 300px!important;
            height: 300px!important;
        }

    }

`;

// Grabs a snippet of text at a certain length, but cuts off at the closest space
function truncate(str, len) {
    if (str.length > len) {
        var i = str.indexOf(" ", len);
        return str.substring(0, i);
    }
    return str;
}

const BlogPostPreviewList = (props) => (

    <BlogPostPreviewListStyles>
        <h1>{props.title}</h1>
        <div className="container">
            {props.data.map((post, i) => (
                <div className="post" key={post.toString()}>
                    <div className="left">
                        <div className="block-color">
                            <BlogImage 
                                data={props.data[i].node}
                            />
                        </div>
                    </div>
                    <div className="right">
                        <Link to={`blog/` + props.data[i].node.slug.current}>
                            <h2>{props.data[i].node.title}</h2>
                        </Link>
                        <BlogDate
                            createdAt={props.data[i].node._createdAt}
                            updatedAt={props.data[i].node._updatedAt}
                        />
                        <p>{truncate(props.data[i].node.seoDescription, 100)}...</p>
                        <Link to={`blog/` + props.data[i].node.slug.current}>
                            <button className="primary">Read more...</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </BlogPostPreviewListStyles>


)

export default BlogPostPreviewList;