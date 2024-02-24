import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const handleNavLinkClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="text-center text-lg-start footer-custom">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <FaInstagram size={25} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaFacebook size={25} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaLinkedin size={25} />
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Snehita Well being
              </h6>
              <p>
                IIT Ropar's mental health non-Profital organization. Always
                available to help you.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Must visits</h6>
              <p>
                <Link
                  to="/knowyourself"
                  className="text-reset text-decoration-none" onClick={handleNavLinkClick}
                >
                  Know Yourself
                </Link>
              </p>
              <p>
                <Link to="/blogs" className="text-reset text-decoration-none" onClick={handleNavLinkClick}>
                  Blogs/Articles
                </Link>
              </p>
              <p>
                <Link
                  to="/appointment"
                  onClick={handleNavLinkClick}
                  className="text-reset text-decoration-none"
                >
                  Appointment
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  href="https://www.iitrpr.ac.in/"
                  target="_blank"
                  className="text-reset text-decoration-none"
                >
                  IIT Ropar Website
                </a>
              </p>
              <p>
                <Link to="/aboutus" className="text-reset text-decoration-none" onClick={handleNavLinkClick}>
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  to="/contactus"
                  className="text-reset text-decoration-none" onClick={handleNavLinkClick}
                >
                  Contact Us
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className=" ms-3 text-uppercase fw-bold mb-4 ">Contact</h6>
              <FaHome size={25} className="pb-1 mx-2" />
              <p>
                Utility Block, IIT Ropar
                <br />
                Main Campus, Rupnagar
                <br />
                Punjab,India,140001
              </p>

              <FaEnvelope size={25} className="pb-1 mx-2" />
              <p>snehita@iitrpr.ac.in</p>

              <FaPhone size={25} className="pb-1 mx-2" />
              <p>01881 -2322373</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 ">
        © 2024 Copyright:
        <a
          className="text-reset fw-bold"
          target="_blank"
          href="https://www.iitrpr.ac.in/"
        >
          iitrpr.com
        </a>
      </div>
    </div>
  );
};
export default Footer;
