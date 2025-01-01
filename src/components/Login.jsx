import { Link, useNavigate } from "react-router-dom"
import { logInAPIConfig } from "../api/apiConfig"
import { useFormik } from "formik"
import * as Yup from "yup";
import axios from "axios";
import bgImages from "../assets/images/bgGIF.mp4"
import logoImage from "../assets/images/logo.png"
import { useEffect, useState } from "react";
import Loader from "../lib/Loader";
import { toast, ToastContainer } from "react-toastify";
import { Grid } from "@mui/material";

const validationSchema = Yup.object({
    userName: Yup.string().required("Username is required"),
    password: Yup.string()
        .required("Password is required"),
});

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values) => {
        setLoading(true)
        axios.post(
            logInAPIConfig.login,
            {
                username: values.userName,
                password: values.password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('access_token', response.data.token)
                toast.success("Login successful!");
                // setTimeout(() => {
                window.location.href = '/user';
                // }, 1000);
            }
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            console.error(error);
        });

    }
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    })

    if (loading) {
        return <Loader />
    }
    return <Grid container >
        <video
            autoPlay
            loop
            muted
            className="video-animation"
      
        >
            <source src={bgImages} type="video/mp4" />
        </video>
        <Grid item className="left-image" xs={12} sm={12} md={6} lg={6} xl={6} style={{ minHeight: '100vh', position: 'relative' }}>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="md:min-h-[100vh]" style={{ background: '#eadede8a',borderRadius:'20px',margin:'30px'  }}>
                <div className="card-body">
                    <div className="row m-0 justify-content-center">
                        <div className="col-xl-12 col-md-12 col-lg-12 flex items-center">
                            <div className="sign-in-your w-full">
                                <center><img src={logoImage} style={{ height: "100px", width: "auto" }}></img></center>
                                <h3 className="text-center">Sign in your account</h3>
                                <div className="text-white text-center mb-8">Welcome back !!! To GMFX</div>

                                <form onSubmit={formik.handleSubmit}>
                                    <div className="mb-3">
                                        <label className="mb-1 text-white"><strong>Username</strong></label>
                                        <span className="text-danger">*</span>
                                        <input
                                            type="text"
                                            name="userName"
                                            className="form-control"
                                            value={formik.values.userName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.userName && formik.errors.userName ? (
                                            <p className="text-danger">{formik.errors.userName}</p>
                                        ) : null}
                                    </div>
                                    <div className="mb-3">
                                        <label className="mb-1 text-white"><strong>Password</strong></label>
                                        <span className="text-danger">*</span>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <p className="text-danger">{formik.errors.password}</p>
                                        ) : null}
                                    </div>
                                    <div className="row d-flex justify-content-between mt-4 mb-2">

                                        <div className="mb-3">
                                            <a href="page-forgot-password.html">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                    </div>
                                    <div className="new-account text-center mt-3">
                                        <p className="text-white">Dont't have an account? <Link className="text-primary" to={'/user/signup/0/0/0'}>Sign up</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Grid>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </Grid>
}
export default Login