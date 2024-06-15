import React from "react";
import { useLocation, useNavigate } from "react-router-dom";



const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const includedPaths = ["/register", "/login"];
  const showNavbar = includedPaths.includes(location.pathname);

  if (showNavbar) {
    return null;
  }


  const handleClick = () => {
    navigate("/");
  }

  return (
    <nav className="navbar">
        <div className="container">
            <h1 className="navbar__title" onClick={handleClick}>TTPU Questionary</h1>
        </div>
    </nav>
  );
};

export default Navbar;