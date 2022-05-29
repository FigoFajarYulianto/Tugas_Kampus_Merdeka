import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import carsLogin from '../../assets/images/Cars_Login_Image.png';
import BCRLogo from '../../assets/images/BCR_Logo.png';
import axios from 'axios';


function Register() {
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const [dataRegistrasi, setDataRegistrasi] = useState({
        email: "",
        password: "",
        role: "Customer"
    });

    useEffect(() => {
        document.title = "Register";
    }, []);

    const createDataUser = async (data) => {
        try {
            const res = await axios({
                method: 'POST',
                url: 'https://rent-car-appx.herokuapp.com/admin/auth/register',
                data: data
            })
            if(res.status === 201){
                setShowAlertSuccess(true)
            }
        } catch (error){
            setShowAlertError(true);
            console.log(error);
        }
    }
      
    return (
        <React.Fragment>
            <div className="container-fluid">
                {/* <!-- LOGIN ADMIN SECTION BEGIN --> */}
                <section className="login-admin-section">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 p-0 hidden-on-small-size">
                            <img src={carsLogin} className="cars-baner w-100 vh-100" alt="cars" />
                        </div>
                        <div className="col-lg-4 col-md-6 px-0 py-5 d-flex flex-column align-items-center mt-auto mb-auto">
                            <div className="form-container" style={{maxWidth: "400px"}}>
                                <div className="form-head">
                                    <img src={BCRLogo} alt="logo BCR" />
                                    <h1>Buat Akun baru</h1>
                                </div>
                                <div className="form-content">
                                    <div className="mb-3">
                                        <label for="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail"
                                            placeholder="Contoh: johndee@gmail.com" onChange={(e) => {
                                                setDataRegistrasi({
                                                    ...dataRegistrasi,
                                                    email: e.target.value
                                                })
                                            }} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" placeholder="6+ karakter" onChange={(e) => {
                                            setDataRegistrasi({
                                                ...dataRegistrasi,
                                                password: e.target.value
                                            })
                                        }} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={() => {
                                        setShowAlertSuccess(false)
                                        setShowAlertError(false)
                                        if(dataRegistrasi.password.length >= 6){
                                            createDataUser(dataRegistrasi)
                                        }
                                    }}>Sign Up</button>

                                    <div className="redirect-login mt-2">Already have an account? <strong><Link to={'/login'} style={{color: 'blue', textDecoration: 'none'}}>Sign In</Link></strong></div>
                                    
                                </div>
                            </div>

                            {showAlertError? (
                                <div class="d-flex justify-content-center mt-4" style={{maxWidth: "350px"}}>
                                    <div class="alert error-box alert-dismissible fade show" role="alert">
                                        <strong>Email Already exists!!</strong>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            ) : null}

                            {showAlertSuccess? (
                                <div class="d-flex justify-content-center mt-4" style={{maxWidth: "350px"}}>
                                    <div class="alert success-box alert-dismissible fade show" role="alert">
                                        <strong>Selamat!! Akun Berhasil Dibuat</strong>
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            ) : null}

                            
                        </div>
                    </div>
                </section>
                {/* <!-- LOGIN ADMIN SECTION END --> */}
            </div>
        </React.Fragment>
    );
}

export default Register;
