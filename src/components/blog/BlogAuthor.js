import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"

const BlogAuthorStyles = styled.div`

    background-color: var(--primary);
    color: var(--white);
    padding: 1em;
    text-align: center;
    box-shadow: 10px 10px rgba(85,122,149,.15);
    transition: all .4s ease;
    &:hover {
        box-shadow: 5px 10px rgba(85,122,149,.25);
    }

    h4, h3 {
        color: var(--white);
        margin-top: 0;
    }

    img, .gatsby-image-wrapper {
        border-radius: 50%;
        max-width: 200px;
        max-height: 200px;
    }

    .bio {
        text-align: left;
        margin-top: 1em;
    }

    /* For devices with width greater than or equal to 992px, like landscape tablets and laptops */
    @media only screen
        and (min-width: 992px) {

        .author {
            display: flex;
            align-items: center;
            align-content: center;
            margin: 0 auto;
            width: 100%;
        }
        
        .bio {
            margin-left: 1em;
            h4 {
                color: var(--white);
                margin: 0;
            }
        }

    }

    /* For devices with width greater than or equal to 1200px, like landscape tablets and laptops */
    @media only screen
        and (min-width: 1200px) {

        box-shadow: 20px 20px rgba(85,122,149,.15);
        transition: all .4s ease;
        &:hover {
            box-shadow: 10px 10px rgba(85,122,149,.25);
        }

    }


`;

const BlogAuthor = (props) => (

    <BlogAuthorStyles>
        <div className="author">
            <Img 
                fixed={props.src}
                alt={props.alt}
            />
            <div className="bio">
                <h4>{props.author}</h4>
                <p>{props.bio}</p>
            </div>
        </div>
    </BlogAuthorStyles>

)

export default BlogAuthor;