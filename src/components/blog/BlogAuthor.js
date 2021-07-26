import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"

const BlogAuthorStyles = styled.div`

    /* background-color: var(--primary);
    color: var(--white);
    padding: 1em;

    h4 {
        color: var(--white);
        margin-top: 0;
    }

    img, .gatsby-image-wrapper {
        border-radius: 50%;
        max-width: 200px;
        max-height: 200px;
    }

    .author {
        display: flex;
        align-items: center;
        align-content: center;
    }
    .bio {
        margin-left: 1em;
        h4 {
            color: var(--white);
            margin: 0;
        }
    } */

`;

const BlogAuthor = (props) => (

    <BlogAuthorStyles>
        <div className="author">
            <Img fixed={props.src} alt={props.alt} />
            <div className="bio">
                <h4>{props.author}</h4>
                <p>{props.bio}</p>
            </div>
        </div>
    </BlogAuthorStyles>

)

export default BlogAuthor;