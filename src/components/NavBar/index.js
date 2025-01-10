import { useContext } from "react";
// import logo from "../images/Logo 1.jpg";
import { NavLink } from "react-router-dom";
import { Store } from "../../App";
import { removeToken } from "../../Context/Context";
import "./index.css";

function Navbar() {
  const [isAuth, setisAuth] = useContext(Store);

  const logutFunct = () => {
    removeToken();
    setisAuth(null);
  };

  return (
    <div className="navbar">
      <img src="/assets/Logo 1.jpg" className="logo" alt="Logo" />

      {isAuth ? (
              <NavLink to="/" onClick={logutFunct}>
                <div className="logout">
                   <p className="user-name">Sumanth Vartha</p>
                   <button className="logout-btn">Logout</button>
                </div>
              </NavLink>
            ) : (
                <div className="logout">
                   <p className="user-name">Sumanth Vartha</p>
                </div>
            
            )}

      
    </div>
  );
}

export default Navbar;
