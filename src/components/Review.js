import React from "react";
import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai';

const ReviewStyles = styled.div`

    .review {
        background-color: var(--secondary);
        color: var(--white);
        position: relative;
        box-shadow: 10px 10px rgba(85,122,149,.3);
        padding: 1em;
        margin: 2em 0em;
        transition: all .3s ease;
        &:hover {
            box-shadow: 5px 5px rgba(85,122,149,.25);
        }
        h1, h2, h3, h4, p {
            color: var(--white);
            margin: 0;
        }
    }

    .stars {
        padding: .5em 0;
    }

`;

const Review = (props) => {
    return (
        <ReviewStyles>
            {props.data.map((review, i) => (
                <div className="review" key={props.data[i].id}>
                    <p>{props.data[i].review}</p>
                    <div className="stars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <h3>{props.data[i].reviewer}</h3>
                    <h4>{props.data[i].company}</h4>
                </div>
            ))}
        </ReviewStyles>
    )
}

export default Review;