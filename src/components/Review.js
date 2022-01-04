import React from "react";
import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai';
import SplitText from "./SplitText";

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

    h3 span span {
        color: var(--white);
        position: relative;
        bottom: -1em;
        opacity: 0;
        animation: move-text 0.5s forwards;
        animation-timing-function: ease-in-out;
    }

    @keyframes move-text {
        0% {
            bottom: -0.2em;
            opacity: 1;
        }
        50% {
            bottom: 0.2em;
        }
        100% {
            bottom: 0;
            opacity: 1;
        }
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
                    {/* <h3>{WrapCharactersInSpan(props.data[i].reviewer)}</h3> */}
                    <h3><SplitText
                        copy={props.data[i].reviewer}
                        role=''
                    /></h3>
                    <h4>{props.data[i].company}</h4>
                </div>
            ))}
        </ReviewStyles>
    )
}

export default Review;