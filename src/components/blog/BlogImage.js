import React from "react";
import Img from "gatsby-image";

// Checks if the main blog image has been added to post in Sanity CMS
function checkForMainBlogImage(data) {

    if (typeof data.mainImage.asset.fluid === 'undefined'
    || data.mainImage.asset.fluid === null
    || data.mainImage.alt === 'undefined'
    || data.mainImage.alt === null) {
        return <p>Featured image or alt text not set</p>
    } else {
        return <Img src={data.mainImage.asset.fluid.src} alt={data.mainImage.alt} />
    }

}

const BlogImage = (props) => (

        checkForMainBlogImage(props.data)

)

export default BlogImage;