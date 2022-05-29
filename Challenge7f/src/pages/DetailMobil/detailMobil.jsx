import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import ModalImage from "react-modal-image";
import ReactPlayer from 'react-player';
import style from "./detailMobil.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GreenButton from "../../components/tombolHijau";
import SearchingForm from "../../components/pencarianForm";
import keyIcon from '../../assets/icons/Users_Icon.png';
import settingIcon from '../../assets/icons/Settings_Icon.png';
import calendarIcon from '../../assets/icons/Calendar_Icon.png';
import Play_Icon from '../../assets/icons/Play_Icon.png';
import Picture_Icon from '../../assets/icons/Picture_Icon.png';
import { Link } from "react-router-dom";


function CarDetails() {
    const [isPlayingVideo, setIsPlayingVideo] = useState(false);
    const { data: dataCarById } = useSelector((state) => state.carById);

    return (
            <Container fluid className={`p-0`}>

                <Header/>

                <Container>
                    <div className="box-pencarian-without-header-text mx-5">

                        <h5 className="mb-3 fw-bold">Pencarian</h5>
                        <SearchingForm useButton={false} isDisabled={true}/>

                    </div>

                    <Row className="px-5">
                        <Col lg="8" className="d-flex flex-column px-2 mt-3">
                            <div className="cars-card w-100 m-0">
                                <h5 className="fw-bold mb-4">Tentang Paket</h5>
                                <p>Include</p>
                                <ul className="text-secondary mb-4">
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <p>Exclude</p>
                                <ul className="text-secondary mb-2">
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>

                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h5 className="fw-bold m-0">Refund, Reschedule, Overtime</h5>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <ul className="text-secondary m-0">
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column align-items-center align-items-center p-0 mt-3 px-2" key={dataCarById.id}>
                            <div className="cars-card w-100">
                                {isPlayingVideo? (
                                    <div className="car-img">
                                        <ReactPlayer url='https://video-frx5-2.xx.fbcdn.net/v/t39.25447-2/10000000_760196224968558_3280527224341590404_n.mp4?_nc_cat=109&vs=7629cc6ef64c6895&_nc_vs=HBksFQAYJEdJQ1dtQUJ1NS1MNVpMTUNBSVR4NENvaHhvWXRibWRqQUFBRhUAAsgBABUAGCRHSkt4SGdQclVfRGRyZUVIQUFBQUFBQllQRmg5YnY0R0FBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAmip%2FK3uGB8wgVAigCQzMYC3Z0c19wcmV2aWV3HBdAhVIgxJul4xgpZGFzaF9pNGxpdGViYXNpY181c2VjZ29wX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAQ5NTk4EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQQMjUwNDcxNzc5NjIzNjg2OBJvZW1fdmlkZW9fYXNzZXRfaWQQMjUwNDcxNzc4OTU3MDIwMhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQQMjUwNDcxNzc4NjIzNjg2ORxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDU2NzAzMDI0OTI5ODY0MDAOdnRzX3JlcXVlc3RfaWQAJQIcACW%2BARsHiAFzBDMxMTYCY2QKMjAxOS0wMi0wOANyY2IEOTUwMANhcHAHVsOtZGVvcwJjdBlDT05UQUlORURfUE9TVF9BVFRBQ0hNRU5UE29yaWdpbmFsX2R1cmF0aW9uX3MHNjgyLjMwNAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-7&_nc_sid=edb743&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=UE4WMndKjRYAX8nEO4u&_nc_ht=video-frx5-2.xx&edm=AGo2L-IEAAAA&oh=00_AT-KG9GvmhvWALA33jOptzOQlwGXP5GcSRpVjEPvRHJ3bg&oe=62960782&_nc_rid=748795179670172' controls={true} width={'100%'} height={'100%'} />
                                    </div>
                                ) : (
                                    <div className="car-img">
                                        <ModalImage
                                            small={dataCarById.image}
                                            large={dataCarById.image}
                                            showRotate={true}
                                            alt={`${dataCarById.image}`}
                                            />
                                    </div>
                                )}
                                <Button type="button" className={`${style.playBtn}`} onClick={() => {
                                    isPlayingVideo? (setIsPlayingVideo(false)) : (setIsPlayingVideo(true))
                                }}><img src={isPlayingVideo? Picture_Icon : Play_Icon } className={`${style.btnIcon}`} alt=""/></Button>

                                <p className="m-0 fw-bold">{dataCarById.name}</p>
                                <div className="d-flex justify-content-start">
                                    <p className="pe-3"><img src={keyIcon} className="pe-2" alt=""/>{dataCarById.category}</p>
                                    <p className="pe-3"><img src={settingIcon} className="pe-2" alt=""/>Manual</p>
                                    <p className="pe-3"><img src={calendarIcon} className="pe-2" alt=""/>Tahun {dataCarById.createdAt.slice(0, 4)}</p>
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <p>Total</p>
                                    <h5 className="mt-2 mb-3 fw-bold">Rp {new Intl.NumberFormat('de-DE').format(parseInt(dataCarById.price))}</h5>
                                </div>

                                <Link to={'/ticket'}><GreenButton buttonName="Lanjutkan Pembayaran"/></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer />
                
            </Container>
        )
    }

export default CarDetails;