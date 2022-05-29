import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Upload_Icon from '../../../assets/icons/Upload_Icon.png';
import Right_Icon from '../../../assets/icons/Right_Icon.png';


function AddOrEditCars() {
    const navigate = useNavigate()
    const location = useLocation()
    const { condition } = location.state || {condition: "Add New Cars"}

    useEffect(() => {
        document.title = condition;
    }, []);
    
    return (
        <React.Fragment>

            <section className="content-section ps-5 pe-4">
                <div className="row">
                    <div className="col-xl-2 collapse show" id="collapseWidthExample">
                        <div className="adding-space" style={{width: '300px'}} />
                    </div>
                    <div className="col-lg" id="show-col-lg-12">

                        {/* <!-- ADD NEW CAR BEGIN --> */}
                        <div className="sub-tree d-flex mt-3 mb-3">
                            <Link to="/cars">
                                <p className="fw-bold">Cars</p>
                            </Link>
                            <img src={Right_Icon} className="mx-2 my-1" height={17} alt="" />
                            <Link to="/cars">
                                <p className="fw-bold">List Car</p>
                            </Link>
                            <img src={Right_Icon} className="mx-2 my-1" height={17} alt="" />
                            <p>{condition}</p>
                        </div>

                        <h2>{condition}</h2>

                        <div className="card p-4">
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Nama<span className="text-danger">*</span>
                                        </p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" placeholder="Nama" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Kategori<span className="text-danger">*</span>
                                        </p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" placeholder="Kategori" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Harga<span className="text-danger">*</span>
                                        </p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" placeholder="Harga" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <label>Status<span className="text-danger">*</span>
                                        </label>
                                    </label>
                                </div>
                                <div className="col-lg-5 pb-3">
                                    <select class="form-select fs-6 text-secondary" aria-label="Default select example" style={{width: '100%'}}>
                                        <option value={false}>False</option>
                                        <option value={true}>True</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Foto<span className="text-danger">*</span>
                                        </p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <input type="file" className="form-control" id="upload-file" style={{display: 'none'}}/>
                                    <label for="upload-file" className="form-control icon text-secondary">
                                        <span id="file-input">No file selected</span>
                                        <img src={Upload_Icon} className="float-end" alt='' />
                                    </label>
                                    <p className="text-secondary mt-1" style={{fontSize: '10px'}}>File size max. 2MB</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Start Rent</p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <p className="text-secondary col-form-label">-</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Finish Rent</p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <p className="text-secondary col-form-label">-</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Created at</p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <p className="text-secondary col-form-label">-</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <label className="col-form-label">
                                        <p>Updated at</p>
                                    </label>
                                </div>
                                <div className="col-lg-5">
                                    <p className="text-secondary col-form-label">-</p>
                                </div>
                            </div>
                        </div>

                        <div className="btn-decision mb-5">
                            <Link to="/cars"><button type="button" className="btn rounded-2 me-3 btn-cancel">Cancel</button></Link>
                            <button type="submit" className="btn btn-save" onClick={() => {navigate('/cars', { state: { showAlert: true, name: "ad" }})}}>Save</button>
                        </div>
                        {/* <!-- ADD NEW CAR END --> */}

                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
}

export default AddOrEditCars;
