import { useState } from "react";
import "../App.css";
import kotcLogo from "../assets/King-of-the-Cove-2024-LOGO-SHARK-TEETH-BLACK-Transparent-5x5inches.png";
import KotcNavbar from "./Navbar.jsx";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="navbar-container">
      <img
        className={`kotcteeth ${isHovered ? "kotc-hovered" : ""}`}
        src={kotcLogo}
        alt="kotc-logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <KotcNavbar />
    </header>
  );
}

export default Header;
