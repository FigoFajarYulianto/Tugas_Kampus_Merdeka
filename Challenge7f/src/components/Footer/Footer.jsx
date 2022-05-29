import React from "react";
import { Col, Container, Row } from "reactstrap";
import facebookIcon from '../../assets/icons/icon_facebook.png';
import icon_instagram from '../../assets/icons/icon_instagram.png';
import icon_twitter from '../../assets/icons/icon_twitter.png';
import icon_mail from '../../assets/icons/icon_mail.png';
import icon_twitch from '../../assets/icons/icon_twitch.png';
import logo from '../../assets/icons/logo.png';
import style from './Footer.css';


function Footer() {

    return (
            <Container>
                {/* <!-- ---------- FOOTER SECTION BEGIN ---------- --> */}
                <section className={style.footerSection}>
                    <Row>
                        {/* <!-- Address --> */}
                        <Col lg="3" md="6" sm="12" className={`mb-4`}>
                            <div className={style.address}>
                                <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
                                <h5>binarcarrental@gmail.com</h5>
                                <h5>081-233-334-808</h5>
                            </div>
                        </Col>
                        {/* <!-- Navigation --> */}
                        <Col lg="2" md="6" sm="12" className={`mb-4`}>
                            <div className={style.navigation}>
                            <ul>
                                    <li>
                                        <a href="#our-services-section">Our services</a>
                                    </li>
                                    <li>
                                        <a href="#why-us-section">Why Us</a>
                                    </li>
                                    <li>
                                        <a href="#testimony-section">Testimonial</a>
                                    </li>
                                    <li>
                                        <a href="#faq-section">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* <!-- Sosmed --> */}
                        <Col lg="3" md="6" sm="12" className={`mb-4`}>
                            <div className={style.sosmed}>
                                <h5>Connect with us</h5>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/"><img src={facebookIcon} alt=""/></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/"><img src={icon_instagram} alt=""/></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/"><img src={icon_twitter} alt=""/></a>
                                    </li>
                                    <li>
                                        <a href="/"><img src={icon_mail} alt=""/></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitch.tv/"><img src={icon_twitch} alt=""/></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* <!-- Copyright --> */}
                        <Col lg="4" md="6" sm="12" className={`mb-4`}>
                            <div className={style.copyright}>
                                <h5>Copyright Binar 2022</h5>
                                <img src={logo} alt="Binar Academy"/>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* <!-- ---------- FOOTER SECTION END ---------- --> */}
            </Container>
        )
    }

export default Footer;