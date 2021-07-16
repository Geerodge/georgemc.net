import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`

`;

const BlogCategories = (props) => (

    <CategoryStyles>
        <ul>
            {props.categories.map((category, index) => (
                <li key={index}>{category.title}</li>
            ))}
        </ul>
    </CategoryStyles>

)

export default BlogCategories;