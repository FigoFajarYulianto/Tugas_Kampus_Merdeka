import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import style from "./landingPage.css";
import img_car from '../../assets/images/img_car.png';

function HeroSection() {
    const navigate = useNavigate()

    return (
            <Container fluid className={`p-0`}>
                <section className={`${style.heroSection}`}>
                    <Container>
                        {/* <!-- ---------- HERO SECTION BEGIN ---------- --> */}
                        <Row>
                            <Col lg={6} md={12} sm={12} className={`${style.heroDesc}`}>
                                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                                    terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                <Button className={`${style.btnRentNow}`} onClick={() => navigate("/search")}>Mulai Sewa Mobil</Button>
                            </Col>
                            <Col lg={6} md={12} sm={12} className={`text-center p-0`}>
                                <img src={img_car} className={`${style.imgCar}`} alt="Mobil" />                    
                            </Col>
                        </Row>
                        {/* <!-- ---------- HERO SECTION END ---------- --> */}
                    </Container>
                </section>
            </Container>
        )
    }

export default HeroSection;