import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Key_Icon from '../../../assets/icons/Key_Icon.png';
import Clock_Icon from '../../../assets/icons/Clock_Icon.png';
import Trash_Icon from '../../../assets/icons/Trash_Icon.png';
import Edit_Icon from '../../../assets/icons/Edit_Icon.png';
import Car_Driving_llustration from '../../../assets/images/Car_Driving_llustration.png';
import Right_Icon from '../../../assets/icons/Right_Icon.png';
import Plus_Icon from '../../../assets/icons/Plus_Icon.png';
import axios from 'axios';
import { getCars, deleteCars } from '../../../redux/action/carsAction';


function Cars() {
    const navigate = useNavigate();
    let location = useLocation();
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [getId, setGetId] = useState();
    // const [dataCars, setDataCars] = useState([]);

    const dispatch = useDispatch();
    const { isLoading: loadingCars, data: scoreData } = useSelector((state) => state.cars);

    useEffect(() => {
        document.title = "Admin | Cars";
        dispatch(getCars());
        // getDataCars();
        handleSuccessAlert();
    }, []);
    
    const handleSuccessAlert = () => {
        console.log("State ", location)
        if (location.state != null) {
            const hide = () => setShowAlertSuccess(false)
            setShowAlertSuccess(true)
            setTimeout(hide, 3000);
        }
    }

    const handleDeleteAlert = () => {
        const hide = () => setShowAlertDelete(false)
        setShowAlertDelete(true)
        setTimeout(hide, 3000);
    }

    // const getDataCars = async () => {
    //     try {
    //         const res = await axios.get('https://rent-car-appx.herokuapp.com/admin/car');
    //         setDataCars(res.data)
    //     } catch (error){
    //         console.log(error);
    //     }
    // }
    
    return (
        <React.Fragment>

            <section className="content-section ps-5 pe-4">
                <div className="row">
                    <div className="col-xl-2 collapse show" id="collapseWidthExample">
                        <div className="adding-space" style={{width: '300px'}} />
                    </div>
                    <div className="col-lg" id="show-col-lg-12">


                        {/* <!-- ALERT SUCCESS BEGIN --> */}
                        {showAlertSuccess? (
                            <div className="d-flex justify-content-center">
                                <div className="alert success-box fade show" role="alert">
                                    <strong>Data Berhasil Disimpan</strong>
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button> */}
                                </div>
                            </div>
                        ) : null}
                        {/* <!-- ALERT SUCCESS END --> */}

                        {/* <!-- ALERT DELETE BEGIN --> */}
                        {showAlertDelete? (
                            <div className="d-flex justify-content-center">
                                <div className="alert delete-box fade show" role="alert">
                                    <strong>Data Berhasil Dihapus</strong>
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                </div>
                            </div>
                            ) : null}
                        {/* <!-- ALERT DELETE END --> */}


                        {/* <!-- LIST CAR BEGIN --> */}
                        <section className="list-car">
                            <div className="sub-tree d-flex mt-3">
                                <Link to="/cars">
                                    <p className="fw-bold">Cars</p>
                                </Link>
                                <img src={Right_Icon} className="mx-2 my-1" height={17} alt="" />
                                <p>List Car</p>
                            </div>

                            <div className="list-button">
                                <h2 className="fw-bold mb-4 mt-4">List Car</h2>
                                <div className="button-right">
                                        <button type="button" className="btn btn-primary add-btn" onClick={() => {
                                            navigate('addcars')
                                        }}><img src={Plus_Icon} alt='' /> Add New Car
                                        </button>
                                </div>
                            </div>

                            <div className="btn-group mt-2 mb-4">
                                <button type="button" className="btn btn-sort">All</button>
                                <button type="button" className="btn btn-sort">Small</button>
                                <button type="button" className="btn btn-sort">Medium</button>
                                <button type="button" className="btn btn-sort">Large</button>
                            </div>

                            <div className="row">
                                {loadingCars? "Loading..." : scoreData.map((item) => {
                                    return(
                                        <div className="col mt-5 p-0 d-flex justify-content-center align-item-center" key={item.id}>
                                            <div className="card-list">
                                                <div className="car-img">
                                                    <img src={item.image} className="car-size" alt="car" />
                                                </div>
                                                <p className="m-0">{item.name}</p>
                                                <h5 className="mt-2 mb-3 fw-bold">Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.price))} / hari</h5>
                                                <p className="font-weight-light"><img src={Key_Icon} className="pe-2" alt=''/>Start rent - Finish
                                                    rent</p>
                                                <p className="font-weight-light mb-4"><img src={Clock_Icon} className="pe-2" alt=''/>Updated at 4
                                                    Apr 2022, 09.00</p>

                                                <div className="d-flex justify-content-center">
                                                    <button type="button" className="btn border border-2 border-danger rounded-2 me-3 delete-btn" data-bs-toggle="modal" data-bs-target="#deleteCarModal" onClick={() => {
                                                        setGetId(item.id)
                                                        setShowAlertDelete(false)
                                                    }}>
                                                        <img src={Trash_Icon} className="pe-2" alt=''/>Delete
                                                    </button>
                                                    <Link to="/cars/editcars" state={{ data: item, condition: "Edit Cars" }}>
                                                        <button type="button" className="btn btn-success edit-btn">
                                                            <img src={Edit_Icon} className="pe-2" alt=''/>Edit
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                 })}
                            </div>
                        </section>
                        {/* <!-- LIST CAR END --> */}

                        {/* <!-- MODAL BEGIN --> */}
                        <div className="modal fade" id="deleteCarModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteCarModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-center d-flex justify-content-center">
                                <div className="modal-content" style={{maxWidth: '387px'}}>
                                    <div className="popup text-center">
                                        <img src={Car_Driving_llustration} width="153" alt="" />
                                        <h5>Menghapus Data Mobil</h5>
                                        <div className="content">
                                            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
                                        </div>
                                        <div className="d-flex justify-content-center mt-4">
                                            
                                            <button type="button" className="btn btn-popup-yes mx-2" onClick={() => {
                                                dispatch(deleteCars(getId))
                                                setGetId()
                                                handleDeleteAlert()
                                            }} data-bs-dismiss="modal">Ya</button>
                                            
                                            <button type="button" className="btn btn-popup-no mx-2" data-bs-dismiss="modal" onClick={() => {
                                                setGetId()
                                            }} >Tidak</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- MODAL END --> */}

                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
}

export default Cars;
