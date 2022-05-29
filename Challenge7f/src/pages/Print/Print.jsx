import React from "react";
import { Button, Card, Container } from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./Print.css";
import check from '../../assets/icons/check.svg'
import PaymentFlow from "../../components/Paymentt/Payment";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PrintTicket() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
            <React.Fragment>
                <Header />

                <PaymentFlow />

                <Container className={`d-flex flex-column justify-content-center align-items-center`}>
                    <div className={`text-center ${style.notificationSuccess}`}>
                        <img src={check} alt="" height={100} />
                        <h4 className={`fw-bold my-4`}>Pembayaran Berhasil</h4>
                        <p className={`text-secondary`}>Tunjukkan invoice ini.</p>
                    </div>
                    
                    <section className={`${style.invoicePreviewSection}`}>
                        <Card className={`p-4 ${style.invoiceCard}`}>
                            <div lg={12} md={6} sm={6} className={`d-flex justify-content-between align-items-center`} style={{width: '100%'}}>
                                <h4 className={`fw-bold m-0`}>Invoice</h4>
                                <Button outline type="button" className={`${style.btnDownloadInvoice}`}>Unduh</Button>
                            </div>

                            <div className={`mt-4 ${style.invoiceSection}`}>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.js">
                                        <div className={`${style.pdfViewer}`}>
                                            <Viewer
                                                fileUrl={`${process.env.PUBLIC_URL}/Invoice_Example.pdf`}
                                                plugins={[defaultLayoutPluginInstance]}
                                            />
                                        </div>
                                </Worker>
                            </div>
                        </Card>
                    </section>
                </Container>

                <Footer />
            
            </React.Fragment>
        )
    }

export default PrintTicket;