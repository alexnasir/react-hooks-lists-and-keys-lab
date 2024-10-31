import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((link, index))}
    <a href="#home" key={links.index} {links.link}> home</a></nav>;
}

export default NavBar;
