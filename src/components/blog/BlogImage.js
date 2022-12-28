import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const BlogStyles = styled.div`
.featured-image {
    max-height: 400px;
  }
`;

// Checks if the main blog image has been added to post in Sanity CMS
function checkForMainBlogImage(data) {

    if (typeof data.mainImage.asset.fluid === 'undefined'
    || data.mainImage.asset.fluid === null
    || data.mainImage.alt === 'undefined'
    || data.mainImage.alt === null) {
        return <p>Featured image or alt text not set</p>
    } else {
        return <Img fluid={data.mainImage.asset.fluid} alt={data.mainImage.alt} />
    }
}

const BlogImage = (props) => (
    checkForMainBlogImage(props.data)
)

export default BlogImage;