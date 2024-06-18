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
    document.location.href = "/"
  }

  return (
    <nav className="navbar shadow-md max-w-full">
        <div className="container p-2">
            {/* <h1 className="navbar__title" onClick={handleClick}>TTPU Questionary</h1> */}
            <img src="/src/assets/turin_1.jpg" onClick={handleClick} className="w-80 cursor-pointer" alt="" />
        </div>
    </nav>
  );
};

export default Navbar;