import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import User_Picture from '../assets/images/User_Picture.jpg';
import Menu_Icon from '../assets/icons/Menu_Icon.svg';
import Rectangular_Icon from '../assets/icons/Rectangular_Icon.svg';
import Rectangle_Icon from '../assets/icons/Rectangle_Icon.svg';
import Home_Icon from '../assets/icons/Home_Icon.svg';
import Truck_Icon from '../assets/icons/Truck_Icon.svg';


function AdministratorDashboardLayout({menu, menuList}) {
    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }
      
    return (
        <React.Fragment>
            {/* <!-- NAVBAR SECTION BEGIN --> */}
            <section className="navbar-admin-section" style={{zIndex: '900'}}>
                <nav className="navbar navbar-admin navbar-expand-lg border-bottom ms-5">
                    <div className="container-fluid">
                        <div className="sidebar-toggler ps-5 d-flex">
                            <div className="collapse show collapse-horizontal" id="collapseWidthExample">
                                <Link to="/dashboard"><img className="ms-5 me-5 collapseSidebar" src={Rectangular_Icon} alt='' /></Link>
                            </div>
                            <button className="btn ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                <img src={Menu_Icon} alt=''/>
                            </button>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><img src="/icons/Menu_Icon.svg"
                                alt="" /></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <div className="d-flex ms-5">
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-primary border-3 me-3 fw-bold"
                                            type="submit">Search</button>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <Link to="/"
                                            className="d-flex flex-row justify-content-center align-items-center link-dark text-decoration-none dropdown-toggle me-2"
                                            id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={User_Picture} width="32" height="32"
                                                className="rounded-circle me-2" style={{objectFit: 'cover'}} alt="PP-User" />
                                            <p className="my-0 me-2">
                                                Unis
                                                Badri</p>
                                        </Link>
                                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser" >
                                            <li className='text-center'><button onClick={() => {handleLogout()}} style={
                                                {background: 'none',
                                                color: 'inherit',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                outline: 'inherit'}
                                                }>Log Out</button></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
            {/* <!-- NAVBAR SECTION END --> */}

            {/* <!-- SIDEBAR SECTION BEGIN --> */}
            <section className="sidebar-section">
                {/* <!-- Sidebar - Main Menu --> */}
                <div className="main-menu" style={{zIndex: '1000'}}>
                    <Link to="/dashboard">
                        <div className="box text-center d-flex justify-content-center align-items-center">
                            <img className="side-icon" src={Rectangle_Icon} alt=""/>
                        </div>
                    </Link>
                    <Link to="/dashboard">
                        <div className="box text-center py-2">
                            <img className="side-icon" src={Home_Icon} alt="" />
                            <div>Dashboard</div>
                        </div>
                    </Link>
                    <Link to="/cars">
                        <div className="box text-center py-2">
                            <img className="side-icon" src={Truck_Icon} alt="" />
                            <div>Cars</div>
                        </div>
                    </Link>
                </div>

                <div className="collapse show collapse-horizontal" id="collapseWidthExample">
                    <div className="menu-list pt-3" style={{zIndex: '800'}}>
                        <h4 className="text-secondary px-3 py-2">{menu}</h4>
                        {menuList.map((item) => {
                            return(
                                <Link to={item.link}>
                                    <div className="list-menu">
                                        <p className="m-0">{item.listName}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* <!-- SIDEBAR SECTION END --> */}
            <Outlet />
        </React.Fragment>
    );
}

export default AdministratorDashboardLayout;
