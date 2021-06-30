import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksList = links.map((link, index)=>{
    return <a key={index} href={'#'+link}>{link}</a>
  })
  return <nav>{linksList}</nav>;
}

export default NavBar;
