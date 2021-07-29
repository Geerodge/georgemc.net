import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const MorphStyles = styled.div`

    .gatsby-image-wrapper {
        margin: 0 auto;
    }

    /* Image Effect */
    .morphing {
        max-width: 85%;
        background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        box-shadow: 15px 15px 50px rgba(0,0,0,0.25);
        animation: morphing 10s infinite;
    }

    .morphing:hover {
        animation-play-state: paused;
    }

    .morphing h1 {
        color: #fff;
        font-size: 35px;
        text-transform: uppercase;
        text-align: center;
        line-height: 300px;
        font-weight: 400;
        text-shadow: 1px 1px 4px rgba(0,0,0.1);
    }

    @keyframes morphing {
        0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            }
        25% {
            border-radius: 50% 50% 50% 70% / 50% 50% 70% 60%;
            box-shadow: -15px -15px -50px rgba(0,0,0,0.25);
        }
        50% {
            border-radius: 50% 40% 50% 80% / 50% 45% 70% 50%;
            box-shadow: -15px -15px -50px rgba(0,0,0,0.25);
        }
        70% {
            border-radius: 50% 70% 50% 50% / 70% 60% 50% 50%;
            box-shadow: -30x -30x -20x rgba(0,0,0,0.25);
        }
        100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
    }

    .block-color {
        position: relative;
        background-color: var(--secondary);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        box-shadow: 15px 15px 50px rgba(0,0,0,0.25);
    }

`;

const ImageMorph = () => {
  const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "george-mcentegart.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <MorphStyles><div className="block-color"><Img className="morphing" fluid={data.placeholderImage.childImageSharp.fluid} /></div></MorphStyles>
  
}

export default ImageMorph
