import React from "react";
import styled from "styled-components";
import ImageTopCard from "./ImageTopCard";

const ImageTopCardsStyles = styled.div`

    margin: 4em 1em;

    .item-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }

    .item {
        min-width: 100%;
    }

    .link {
        position: absolute;
        bottom: 0;
    }

    /* For devices with width greater than or equal to 769px, like desktop computers */
    @media only screen 
        and (min-width: 768px) {

        .link {
            position: relative;
        }

        .item-wrapper {
            justify-content: space-evenly;
        }

    }

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

        .item-wrapper {
            flex-wrap: wrap;
        }

        .item {
            min-width: 20%;
            flex: 1;
        }

        .link {
            position: absolute;
        }

    }

    /* For devices with width greater than or equal to 1280px, like desktop computers */
    @media only screen 
        and (min-width: 1280px) {

        .item-wrapper {
            flex-wrap: nowrap;
        }

        .four p.link {
            position: absolute;
        }

    }
  
`;

const ImageTopCards = () => (

  // imgsrc name needs to match the file name and extension exactly.
  // imgsrc needs to match here, in ImageTopCard.js and in the components GraphQL query within /components/Images

    <ImageTopCardsStyles>
        <div className="item-wrapper">
            <div className="item one">
                <ImageTopCard
                    heading="Cheeky Tea"
                    description="An online tea store and wholesale tea supplier."
                    link="https://cheekytea.co.uk"
                    imgsrc="cheeky-tea.png"
                    alt="Cheeky Tea"
                />
            </div>
            <div className="item two">
                <ImageTopCard
                    heading="House Buy Fast"
                    description="A cash property buying company that purchase property UK wide."
                    link="https://housebuyfast.co.uk"
                    imgsrc="house-buy-fast.png"
                    alt="House Buy Fast"
                />
            </div>
            <div className="item three">
                <ImageTopCard
                    heading="The Tree Planters"
                    description="A UK tree planting charity that I'm a Trustee of."
                    link="http://thetreeplanters.georgemc.net"
                    imgsrc="the-tree-planters.png"
                    alt="The Tree Planters"
                />
            </div>
            <div className="item four">
                <ImageTopCard
                    heading="My Web Tools"
                    description="The tools I use for my freelance web development clients are a really important part of how I can offer so much value."
                    link="https://sunnyworthing.co.uk"
                    imgsrc="sunny-worthing.png"
                    alt="Sunny Worthing"
                />
            </div>
        </div>
    </ ImageTopCardsStyles>
  
)

export default ImageTopCards;