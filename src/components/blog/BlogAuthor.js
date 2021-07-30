import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogAuthorStyles = styled.div`

    background-color: var(--primary);
    color: var(--white);
    padding: 1em;
    text-align: center;

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


`;

const BlogAuthor = (props) => (

    <BlogAuthorStyles>
        <div className="author">
            <GatsbyImage 
                image={props.image}
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