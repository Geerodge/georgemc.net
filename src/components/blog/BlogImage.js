import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

// Checks if the main blog image has been added to post in Sanity CMS
function checkForMainBlogImage(data) {

    if (typeof data.mainImage.asset.gatsbyImageData === 'undefined'
    || data.mainImage.asset.gatsbyImageData === null
    || data.mainImage.alt === 'undefined'
    || data.mainImage.alt === null) {
        return <p>Featured image or alt text not set</p>
    } else {
        return <GatsbyImage image={data.mainImage.asset.gatsbyImageData} alt={data.mainImage.alt} />
    }

}

const BlogImage = (props) => (

        checkForMainBlogImage(props.data)

)

export default BlogImage;