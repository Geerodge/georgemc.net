import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const HeaderStyles = styled.div`
    :root {
    --smallerDevicesMaxWidth: 360px;
    --maxWidth: 700px;
    --minWidth: 701px;
    --maxHeight: 600px;
  }

  .header {
    width: 100%;
    border-bottom: 1px solid rgba(205, 205, 205, 0.4);
    box-sizing: border-box;
    background-color: white;
    padding: 0 1rem 0 1rem;
    display: flex;
    /* to have logo on the left and links on the right */
    justify-content: space-between;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    a {
      color: inherit;
    }
  }

  @media (max-width: 700px) {
    .header {
      height: 54px;
    }
  }
  @media (min-width: 701px) and (min-height: 600px) {
    .header {
      height: 72px;
    }
  }
  /* headerMenu */
  .headerMenu {
    list-style: none;
    margin: 0;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }

  .headerMenu li a {
    display: block;
    text-decoration: none;
  } &:hover {
    position: relative;
    transition: color .5s cubic-bezier(.19,1,.22,1);
    text-decoration: none;
  }
  
  @media (max-width: 700px) {
    .headerMenu li a {
      padding: 3px 10px 5px 0;
      font-size: 1.6rem;
    }
    .header p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 360px) {
    .headerMenu li a {
      padding: 3px 5px 5px 0;
      font-size: 1.3rem;
    }
    .header p {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 700px) {
    .headerMenu li a {
      padding: 15px 15px;
      font-size: 2.2rem;
    }
    .header p {
      font-size: 2.2rem;
    }
  }
`;

const listItems = [
  { link: "https://github.com/Geerodge", name: "GitHub" },
  { link: "https://twitter.com/geerodge", name: "Twitter" },
  { link: "https://www.linkedin.com/in/georgemcentegart", name: "LinkedIn" }
];

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <header className="header">
      <p>{siteTitle}</p>
      <ul className="headerMenu">
        {listItems.map(item => (
          <li>
            <a target="_blank" rel="noreferrer" href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
