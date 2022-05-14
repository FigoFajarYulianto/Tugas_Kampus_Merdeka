import React from "react";
import Rectangle from "../../assets/images/icon/Rectangle 63.png";
import Home from "../../assets/images/icon/Home_Icon.svg";
import Truck from "../../assets/images/icon/Truck_Icon.svg";

export default function Sidebar() {
  return (
    <>
      <section className="sidebar-section">
        <div className="main-menu">
          <a href="#">
            <div className="box text-center d-flex justify-content-center align-items-center">
              <img className="side-icon" src={Rectangle} />
            </div>
          </a>
          <a href="#">
            <div className="box text-center py-2">
              <img className="side-icon" src={Home} />
              <div>Dashboard</div>
            </div>
          </a>
          <a href="#">
            <div className="box text-center py-2">
              <img className="side-icon" src={Truck} />
              <div>Cars</div>
            </div>
          </a>
        </div>

        <div className="collapseSidebar">
          <div className="menu-list pt-3">
            <h4 className="text-secondary px-3 py-2">CARS</h4>
            <a href="#">
              <div className="list-menu">
                <p className="m-0">Dashboard</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
