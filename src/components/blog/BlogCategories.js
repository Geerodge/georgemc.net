import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`

`;

const BlogCategories = (props) => (

    <CategoryStyles>
        <p>
            {props.categories.map((category, index) => (
                <span key={index}>{category.title + ` `}</span>
            ))}
        </p>
    </CategoryStyles>

)

export default BlogCategories;