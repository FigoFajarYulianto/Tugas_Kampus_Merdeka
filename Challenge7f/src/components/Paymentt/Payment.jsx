import React from "react";
import { Col, Row } from "reactstrap";
import style from "./Payment.css";
import check from '../../assets/icons/check.svg';
import Icon_Left_Arrow from '../../assets/icons/Icon_Left_Arrow.svg';
import { Link } from "react-router-dom";



function PaymentFlow() {
    return (
            <React.Fragment>
                <section className={`${style.paymentFlowSection}`}>
                    <div className={`d-flex justify-content-center`}>
                        <Row style={{width: "80%"}}>
                            <Col lg={6} md={6} className={`p-0 mb-4`}>
                                <div className={`d-flex align-items-center`}>
                                    <Link to={'/cars'}><img src={Icon_Left_Arrow} alt="" height={30} className={`mx-2`} /></Link>
                                    <p>Tiket</p>
                                </div>
                            </Col>
                            <Col lg={6} md={12} className={`d-flex justify-content-end align-items-center p-0 mb-4`}>
                                <div className={`d-flex align-items-center me-2`}>
                                    <img src={check} alt="" height={30} className={`mx-2`} />
                                    <p>Pilih Metode</p>
                                </div>
                                <hr />
                                <div className={`d-flex align-items-center me-2`}>
                                    <img src={check} alt="" height={30} className={`mx-2`} />
                                    <p>Bayar</p>
                                </div>
                                <hr />
                                <div className={`d-flex align-items-center me-2`}>
                                    <img src={check} alt="" height={30} className={`mx-2`} />
                                    <p>Tiket</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`${style.orderId}`}>
                            Order ID: xxxxxxxx
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

export default PaymentFlow;