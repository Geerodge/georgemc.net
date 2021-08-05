import React from "react";
import styled from "styled-components";

const CategoryStyles = styled.div`

`;


const BlogCategories = (props) => (

    <CategoryStyles>
        <p>
            <strong>Categories: </strong>
            {props.categories.map((category, i) => {
                const lastIndex = props.categories.length - 1;
                if (i === lastIndex) {
                    return (<span key={category.title.toString()}>{category.title}</span>)
                } else {
                    return (<span key={category.title.toString()}>{category.title + `, `}</span>)
                }
            })}
        </p>
    </CategoryStyles>

);

export default BlogCategories;