import { Link, useNavigate } from "react-router-dom"
import { logInAPIConfig } from "../api/apiConfig"
import { useFormik } from "formik"
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../lib/Loader";
import { toast, ToastContainer } from "react-toastify";

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
                setTimeout(() => {
                    navigate('/')
                }, 1000);
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
    return <div style={{ backgroundImage: "url(src/assets/images/bg1.png)", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-6">
                    <div className="card mt-10" style={{ backgroundColor: "rgb(87 81 84 / 76%)" }}>
                        <div className="card-body ">
                            <div className="row m-0 justify-content-center">
                                {/* <div className="col-xl-6 col-md-6 sign text-center">
                                    <div>
                                        <div className="text-center my-5">
                                            <div className="logo">
                                                <img src="src/assets/images/logo.png" className="h-[60px]" />
                                            </div>
                                        </div>

                                        <img src="https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-critical-thinking-vector-concept-illustration-png-image_11950065.png" className="education-img"></img>
                                    </div>
                                </div> */}
                                <div className="col-xl-12 col-md-12 col-lg-12 flex items-center">
                                    <div className="sign-in-your w-full">
                                        <center><img src="src/assets/images/logo.png" style={{ height: "100px", width: "auto" }}></img></center>
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
                                                <p className="text-white">Dont't have an account? <Link className="text-primary" to={'/signup'}>Sign up</Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    </div>
}
export default Login