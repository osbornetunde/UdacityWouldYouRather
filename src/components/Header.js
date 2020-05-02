import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      sty
      <span>
        <Link>Home</Link>
      </span>
      <span>
        <Link>New Question</Link>
      </span>
      <span>
        <Link>Leader Board</Link>
      </span>
    </nav>
  );
};

export default Header;
