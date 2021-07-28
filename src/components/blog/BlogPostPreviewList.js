import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import BlogDate from "./BlogDate";
import BlogImage from "./BlogImage";

const BlogPostPreviewListStyles = styled.div`

    a {
        text-decoration: none;
    }

    .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }

    .post {
        display: flex;
        justify-content: space-around;
        align-items: center;

        min-width: 100%;
        height: 250px;
        margin-top: 1em;
        padding: 1em .3em;
        background-color: var(--primary);

        overflow: hidden;

        .left {
            width: 35%;
        }

        .right {
            width: 65%;
        }

        .date {
            font-size: .8em;
        }

        .gatsby-image-wrapper {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 0 auto;
        }

        h2, p {
            margin: .5em 0 0 0;
            color: var(--white);
            line-height: 1.2em;
        }

        button {
            margin: 1em 0;
        }
    }

`;

// Grabs a snippet of text at a certain legnth, but cuts off at the closest space
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
        {console.log(props)}
        <div className="container">
            {props.data.map((post, i) => (
                <div className="post" key={post.toString()}>
                    <div className="left">
                        <BlogImage 
                            data={props.data[i].node}
                        />
                    </div>
                    <div className="right">
                        <Link to={`blog/` + props.data[i].node.slug.current}>
                            <h2>{props.data[i].node.title}</h2>
                        </Link>
                        <BlogDate
                            createdAt={props.data[i].node._createdAt}
                            updatedAt={props.data[i].node._updatedAt}
                        />
                        <p>{truncate(props.data[i].node.seoDescription, 100 + `...`)}</p>
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