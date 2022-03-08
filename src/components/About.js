import React from "react";
import styled from "styled-components";
import ImageMorph from "./ImageMorph";

const AboutStyles = styled.div`

    margin: 1em 1em;

    .item-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .two {
        padding: 1em;
        width: 100%;
    }

    /* For devices with width greater than or equal to 992px, like desktop computers */
    @media only screen 
        and (min-width: 992px) {

        .item-wrapper {
            flex-direction: row;
        }

        .one {
            padding: 2.5%;
            width: 45%;
        }

        .two {
            padding: 2.5%;
            width: 45%;
        }

        .three {
            padding: 2.5%;
            width: 100%;
        }
    }

    /* For devices with width greater than or equal to 1280px and more, like desktop computers */
    @media only screen 
        and (min-width: 1280px) {

        margin: 3em 1em;

    }

`;

const About = (props) => {

    let homepage = props.homepage;
    
    return (
        <AboutStyles>
            <div className="item-wrapper">
                <div className="item one">
                    {homepage === true ? <h2>About</h2> : <h1>About</h1>}
                    <p>I'm a New Zealand-born <span role="img" aria-label="New Zealand Flag">🇳🇿</span> web developer based in <span role="img" aria-label="United Kingdom Flag">🇬🇧</span> North Devon, UK.</p> 
                    <p><span className="highlight">I love to help people grow their businesses and projects</span>. I've been building websites and working in the IT industry for over 10 years <span role="img" aria-label="Nerd Face">🤓</span> <span role="img" aria-label="Thumb Up Sign">👍</span> </p>
                    <p>My background includes creating websites for small and midsize businesses, search engine optimisation (SEO), conversion rate optimization (CRO) and email marketing.</p>
                    <p>Visit my <a href="https://www.notion.so/George-McEntegart-54f946adb15d4ababfad7b490f1183ff" target="_blank" rel="noopener noreferrer">Notion</a> for more details.</p>
                </div>
                <div className="item two">
                    <ImageMorph />
                </div>
                <div className="item three">
                    <h2>How I Can Help You</h2>
                </div>
            </div>
        </AboutStyles>
    )
}

export default About;