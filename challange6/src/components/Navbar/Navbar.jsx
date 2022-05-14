import React from "react";
import Rectangle2 from "../../assets/images/icon/Rectangle 62.png";
import Menu from "../../assets/images/icon/fi_menu.png";
import User from "../../assets/images/icon/Group 15.png";

export default function Navbar({ logout }) {
  return (
    <>
      <section className="navbar-section">
        <nav className="navbar navbar-expand-lg border-bottom ms-5">
          <div className="container-fluid">
            <div className="sidebar-toggler ps-5">
              <a href="#">
                <img className="ms-5 me-5 collapseSidebar" src={Rectangle2} />
              </a>
              <button className="btn ms-5" id="toggleSidebar">
                <img src={Menu} />
              </button>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={Menu} alt="" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <form className="d-flex ms-5">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-primary border-2 me-4 fw-bold"
                      type="submit"
                      style={{ width: "80px" }}
                    >
                      Search
                    </button>
                  </form>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <a
                      onClick={logout}
                      className="d-flex flex-row justify-content-center align-items-center link-dark text-decoration-none dropdown-toggle me-2"
                      id="dropdownUser"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={User}
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                        style={{ objectFit: "cover" }}
                      />
                      <p className="my-0 me-2">Unis Badri</p>
                    </a>
                    <ul
                      className="dropdown-menu text-small shadow"
                      aria-labelledby="dropdownUser"
                    >
                      <li>
                        <a className="dropdown-item">Log Out</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
