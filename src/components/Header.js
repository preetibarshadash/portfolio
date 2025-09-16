import React from "react";
function Header() {
  return (
    <header className="header">
      <h2 className="logo"> Let's talk code 💻 </h2>
      <nav>
        <a href="#about"> About </a>
        <a href="#contact"> Contact </a>
        <a href="#upto"> Currently upto </a>
      </nav>
    </header>
  );
}

export default Header;
