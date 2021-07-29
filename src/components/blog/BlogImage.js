import React from "react";
import Img from "gatsby-image"

// Checks if the main blog image has been added to post in Sanity CMS
function checkForMainBlogImage(data) {

    if (typeof data.mainImage === 'undefined' || data.mainImage === null) {
        return <p>Featured image not set</p>
    } else {
        return <Img fluid={data.mainImage.asset.fluid} alt={data.mainImage.alt} />
    }

}

const BlogImage = (props) => (

        checkForMainBlogImage(props.data)

)

export default BlogImage;