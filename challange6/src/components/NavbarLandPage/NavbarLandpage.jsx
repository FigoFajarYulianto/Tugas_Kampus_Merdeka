import React from "react";
import Logo from "../../assets/images/logo.png";
import "./NavbarLandpage.css";

function NavbarRental({ logout }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light py-3 sticky-top"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="#top">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mr-5">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-sm btn-register"
                  onClick={logout}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarRental;
