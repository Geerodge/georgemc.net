import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`

`;


const BlogCategories = (props) => (

    <CategoryStyles>
        <p>
            {props.categories.map((category, i, index) => {
                const lastIndex = props.categories.length - 1;
                if (i === lastIndex) {
                    return (<span key={index}>{category.title}</span>)
                } else {
                    return (<span key={index}>{category.title + `, `}</span>)
                }
            })}
        </p>
    </CategoryStyles>

);

export default BlogCategories;