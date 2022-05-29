import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import style from './Header.css';
import logo from '../../assets/icons/logo.png'
import Toggler from '../../assets/icons/Toggler.png'


function Header() {

    return (
            <Container fluid className={`p-0`}>
                <section className={`${style.headerSection}`} style={{minHeight: 266}}>
                    <Container>
                        {/* <!-- ---------- NAVIGATION SECTION BEGIN ---------- --> */}
                        <section className={`${style.navigationSection}`}>
                            <nav className={`navbar navbar-expand-lg justify-content-end`}>
                                <Container className={`p-0 ${style.fixedPosition}`}>
                                    {/* <!-- Logo --> */}
                                    <Link className={`navbar-brand ms-4 ${style.navPosition}`} to="/"><img src={logo} alt="Logo" /></Link>
                                    {/* <!-- Toggle Navigate Interface Mobile --> */}
                                    <Button className={`navbar-toggler mt-5 ${style.btnToggler}`} type="button" data-bs-toggle="collapse"
                                        data-bs-target="#mynavbar">
                                        <img src={Toggler} alt="" />
                                    </Button>
                                    {/* <!-- Navbar List --> */}
                                    <div className={`collapse navbar-collapse justify-content-end`} id="mynavbar">
                                        <ul className={`navbar-nav nav ms-auto navbar-right`}>
                                            <li className={`nav-item ms-4`}>
                                                <a className={`nav-link ${style.navPosition}`} href="#our-services-section">Our Services</a>
                                            </li>
                                            <li className={`nav-item ms-4`}>
                                                <a className={`nav-link ${style.navPosition}`} href="#why-us-section">Why Us</a>
                                            </li>
                                            <li className={`nav-item ms-4`}>
                                                <a className={`nav-link ${style.navPosition}`} href="#testimony-section">Testimonial</a>
                                            </li>
                                            <li className={`nav-item ms-4`}>
                                                <a className={`nav-link ${style.navPosition}`} href="#faq-section">FAQ</a>
                                            </li>
                                            <li className={`nav-item ms-4`}>
                                                <Link to={'/register'}><Button className={`${style.btnRegister}`}>Register</Button></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Container>
                            </nav>
                        </section>
                        {/* <!-- ---------- NAVIGATION SECTION END ---------- --> */}
                    </Container>
                </section>
            </Container>
        )
    }

export default Header;