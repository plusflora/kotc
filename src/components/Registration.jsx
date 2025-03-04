import { useState } from "react";
import "../App.css";
import kotcLogo from "../assets/King-of-the-Cove-2024-LOGO-SHARK-TEETH-BLACK-Transparent-5x5inches.png";

function Registration() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="registration-button">
      <h2 className="registration-title">Registration is open!</h2>
    </div>
  );
}

export default Registration;
