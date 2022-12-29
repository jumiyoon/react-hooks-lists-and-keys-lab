import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkWithTag = links.map((link) => {
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav> {linkWithTag} </nav>;
}

export default NavBar;
