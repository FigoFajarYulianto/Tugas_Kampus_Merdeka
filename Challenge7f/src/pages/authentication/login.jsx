// import styles from './login.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import carsLogin from '../../assets/images/Cars_Login_Image.png';
import BCRLogo from '../../assets/images/BCR_Logo.png';
import axios from 'axios';


function Login() {
    let navigate = useNavigate();
    const [showAlertError, setShowAlertError] = useState({
        status: false,
        message: ""
    });
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        document.title = "Login";
    }, []);

    const userAuthentication = async (dataLogin) => {
        try {
          const res = await axios({
            method: 'POST',
            url: 'https://rent-car-appx.herokuapp.com/admin/auth/login',
            data: dataLogin
          })
          console.log("respon..  ", res);
          if (res.status === 201){
            localStorage.setItem("access_token", res.data.access_token)
            if (res.data.role === "admin") {
                navigate("/dashboard")
            } else {
                navigate("/")
            }
          }

        } catch (error){
            if (error.response.status === 400) {
                setShowAlertError({
                    status: true,
                    message: "Password anda salah!!"
                })
            } else if (error.response.status === 404) {
                setShowAlertError({
                    status: true,
                    message: "Email tidak ditemukan!!"
                })
            }
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
                        <div className="col-lg-4 col-md-6 px-0 py-5 d-flex flex-column mt-auto mb-auto align-items-center">
                            <div className="form-container" style={{maxWidth: "350px"}}>
                                <div className="form-head">
                                    <img src={BCRLogo} alt="logo BCR" />
                                    <h1>Admin BCR</h1>
                                </div>
                                <div className="form-content">
                                    <div className="mb-3">
                                        <label for="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail"
                                            placeholder="Contoh: admin@mail.com" onChange={(e) => {
                                                setDataLogin({
                                                    ...dataLogin,
                                                    email: e.target.value
                                                })
                                            }} required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" placeholder="6 karakter" onChange={(e) => {
                                            setDataLogin({
                                                ...dataLogin,
                                                password: e.target.value
                                            })
                                        }} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={() => {
                                        setShowAlertError({
                                            status: false,
                                            message: ""
                                        })
                                        if(dataLogin.password.length >= 6){
                                            userAuthentication(dataLogin)
                                        }
                                    }}>Sign In</button>

                                    <div className="redirect-login mt-2">Don't have an account? <strong><Link to={'/register'} style={{color: 'blue', textDecoration: 'none'}}>Sign Up</Link></strong></div>

                                </div>
                            </div>
                            
                            {showAlertError.status? (
                                <div class="d-flex justify-content-center mt-4" style={{maxWidth: "350px"}}>
                                    <div class="alert error-box alert-dismissible fade show" role="alert">
                                        <strong>{showAlertError.message}</strong>
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

export default Login;
