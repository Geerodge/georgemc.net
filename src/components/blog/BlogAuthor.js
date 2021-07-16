import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"

const BlogAuthorStyles = styled.div`

`;

const BlogAuthor = (props) => (

    <BlogAuthorStyles>
        <h4>{props.author}</h4>
        <Img fluid={props.src} alt={props.alt} />
        <p>{props.bio}</p>
    </BlogAuthorStyles>

)

export default BlogAuthor;