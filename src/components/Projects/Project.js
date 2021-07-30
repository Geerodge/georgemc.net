import React from "react";
import styled from "styled-components";
import Cheekytea from "../Images/Cheekytea";
import Housebuyfast from "../Images/Housebuyfast";
import Treeplanters from "../Images/Treeplanters";
import Sunnyworthing from "../Images/Sunnyworthing";

const ProjectStyles = styled.div`

    .box {
        background-color: var(--secondary);
        color: var(--white);
        min-height: 500px;
        position: relative;
        h1, h2, h3 {
            color: var(--white);
            margin-top: 0;
        }
    }

    a {
        color: var(--white);
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }

    .cover {
        object-fit: cover;
        width: 100%;
        max-height: 20em;
    }

    .info {
        padding: 1em 1.5em;
    }

`;

const Project = ({ heading, description, link, img, alt }) => (

  <ProjectStyles>
    <a href={link} target="_blank" rel="noreferrer">
        <div className="box">
            {(() => {
                if (img === "cheeky-tea.png") {
                    return (
                        <Cheekytea alt={alt} />
                        )
                } else if (img === "house-buy-fast.png") {
                    return (
                        <Housebuyfast alt={alt} />
                        )
                } else if (img === "the-tree-planters.png") {
                    return (
                        <Treeplanters alt={alt} />
                        )
                } else {
                    return (
                        <Sunnyworthing alt={alt} />
                        )
                }
            })()}
            <div className="info">
                <h3>{heading}</h3>
                <p>{description}</p>
                <p className="link">Visit website</p>
            </div>
        </div>
    </a>
  </ ProjectStyles>
  
)

export default Project;