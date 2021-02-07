import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>CV Maker</h1>
      <a href='https://github.com/Paradoxer77/cv-project' target='_blank'>
        <img
          src='https://image.flaticon.com/icons/png/512/25/25231.png'
          alt='github-icon'
          className='github-icon'
        />
      </a>
    </header>
  );
}

export default Header;
