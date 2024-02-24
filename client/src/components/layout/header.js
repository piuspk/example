// import { Fragment } from "react"
import logo from '../assets/SWBLogo.png';
import { Link } from "react-router-dom";
import Button from '../templates/button';
import './header.css';
const Header = () => {
  return (
    <nav className="navbar bg-white sticky-top navbar-expand-xl  header-custom" id="sectionsNav" >
      <div className="container-fluid  ">
        <Link className="navbar-brand  fw-bold custom-brandName" href="/">
            <img src={logo} alt="Snehita well being logo"  />
            SNEHITA WELL BEING
        </Link>
        <button
          className="navbar-toggler"  
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav px-1  ">
            <li className="nav-item mx-1">
              <Link className="nav-link active  fw-bold mx-1" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active  fw-bold mx-1" aria-current="page" to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active  fw-bold mx-1" aria-current="page" to="/blogs">
                BLOGS
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active  fw-bold mx-1" aria-current="page" to="/knowyourself">
                KNOW YOURSELF
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active  fw-bold mx-1" aria-current="page" to="/appointment">
                APPOINTMENT
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active  fw-bold mx-1" aria-current="page" to="/contactus">
                CONTACT US
              </Link>
            </li>
            
          </ul>
          <Button onClick={()=>{}}> LOG IN </Button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
