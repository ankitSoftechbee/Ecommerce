import { Link, useNavigate } from "react-router-dom"
import { logInAPIConfig, signUpAPIConfig } from "../api/apiConfig"
import { useFormik } from "formik"
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    country: Yup.string().required("Country is required"),
    code: Yup.string().required("Code is required"),
    mobile: Yup.string().required("Mobile is required"),
    position: Yup.string().required("Position is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
});

const Signup = () => {
    const navigate = useNavigate()
    const [countryList, setCountryList] = useState('');
    const [isSponser, setIsSponser] = useState(false);
    const [debounceTimer, setDebounceTimer] = useState(null); // State for managing debounce

    useEffect(() => {
        axios.get(signUpAPIConfig.countryList, {}, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                setCountryList(response.data.data);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    const checkSponserId = useCallback((sponserId) => {
        if (!sponserId) return;

        axios.get(signUpAPIConfig.checkSPONSERID, {
            params: {
                UserName: sponserId
            }
        }).then((response) => {
            if (response.data.name !== null) {
                setIsSponser(true);
            } else {
                setIsSponser(false);
                toast.error("Invalid Sponser!");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSponserIdChange = (e) => {
        formik.handleChange(e); // Call formik's handler for controlled input
        const { value } = e.target;

        if (debounceTimer) {
            clearTimeout(debounceTimer); // Clear the previous timer if user types again
        }

        // Set a new timeout to call the API after 3 seconds
        const newTimer = setTimeout(() => {
            checkSponserId(value);
        }, 3000);

        setDebounceTimer(newTimer);
    };

    const handleSubmit = (values) => {
        console.log(values);
        console.log(formik.isValid, isSponser)
        if (formik.isValid) {
            if (isSponser) {
                axios.post(signUpAPIConfig.signUp, {
                    sponsorID: values.sponserId,
                    name: values.name,
                    email: values.email,
                    country: values.country,
                    code: values.code,
                    mobile: values.mobile,
                    position: values.position,
                    password: values.password
                }, {
                    header: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        toast.success("Signup successful!");
                        setTimeout(() => {
                            navigate('/login')
                        }, 2000)
                    }
                }).catch((error) => {
                    toast.error("Error during signup!");
                    console.log(error);
                });
            } else {
                toast.error("Invalid Sponsor!");
            }
        } else {
            toast.error('Please fill all the fields');
        }
    };

    const formik = useFormik({
        initialValues: {
            sponserId: '',
            name: '',
            email: '',
            country: '',
            code: '',
            mobile: '',
            position: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });
    console.log(formik)
    return <div style={{ backgroundImage: "url(src/assets/images/bg1.png)", backgroundPosition: "center", backgroundSize: "cover", minHeight: '100vh' }}>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-6">
                    <div className="card mt-10" style={{ backgroundColor: "rgb(87 81 84 / 76%)" }}>
                        <div className="card-body ">
                            <div className="row m-0 justify-content-center">
                                <div className="col-xl-12 col-md-12 col-lg-12 flex items-center">
                                    <div className="sign-in-your w-full">
                                        <center><img src="src/assets/images/logo.png" style={{ height: "100px", width: "auto" }}></img></center>
                                        <h3 className="text-center">Sign in your account</h3>
                                        <div className="text-white text-center mb-8">Welcome back !!! To GMFX</div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Sponser ID</strong></label>
                                            <span className="text-danger">*</span>
                                            <input
                                                type="text"
                                                name="sponserId"
                                                className="form-control"
                                                value={formik.values.sponserId}
                                                onChange={handleSponserIdChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="off"
                                            />
                                            {formik.touched.sponserId && formik.errors.sponserId ? (
                                                <p className="text-danger">{formik.errors.sponserId}</p>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Name</strong></label>
                                            <span className="text-danger">*</span>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                autoComplete="off"
                                            />
                                            {formik.touched.name && formik.errors.name ? (
                                                <p className="text-danger">{formik.errors.name}</p>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Email</strong></label>
                                            <span className="text-danger">*</span>
                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <p className="text-danger">{formik.errors.email}</p>
                                            ) : null}
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Password</strong></label>
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
                                        <div className="mb-3">
                                            <label className="mb-1">
                                                <strong>Country</strong>
                                            </label>
                                            <span className="text-danger">*</span>
                                            <select
                                                name="country"
                                                className="form-control max-h-[400px]"
                                                value={formik.values.country}
                                                onChange={(e) => {
                                                    formik.setFieldValue('country', e.target.value)
                                                    formik.setFieldValue('code', countryList.find((country) => country.country === e.target.value).code)
                                                }}
                                                onBlur={formik.handleBlur}
                                            >
                                                <option style={{ backgroundColor: '#5e3ed0' }}>Select Country</option>
                                                {countryList && countryList.map((country) => <option style={{ backgroundColor: '#5e3ed0' }}>{country.country}</option>)}

                                            </select>
                                            {formik.touched.position && formik.errors.position ? (
                                                <p className="text-danger">{formik.errors.position}</p>
                                            ) : null}
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-[20%] mb-3">
                                                <label className="mb-1">
                                                    <strong>Code</strong>
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    name="code"
                                                    className="form-control"
                                                    value={countryList && formik.values.country && countryList.find((country) => country.country === formik.values.country).code}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    readOnly
                                                />
                                                {formik.touched.code && formik.errors.code ? (
                                                    <p className="text-danger">{formik.errors.code}</p>
                                                ) : null}
                                            </div>
                                            <div className="flex-[80%] mb-3">
                                                <label className="mb-1">
                                                    <strong>Mobile</strong>
                                                </label>
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    value={formik.values.mobile}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                                                />
                                                {formik.touched.mobile && formik.errors.mobile ? (
                                                    <p className="text-danger">{formik.errors.mobile}</p>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="mb-1">
                                                <strong>Position</strong>
                                            </label>
                                            <span className="text-danger">*</span>
                                            <select
                                                name="position"
                                                className="form-control"
                                                value={formik.values.position}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            >
                                                <option style={{ backgroundColor: '#5e3ed0' }} value="">Select Position</option>
                                                <option style={{ backgroundColor: '#5e3ed0' }} value="left">Left</option>
                                                <option style={{ backgroundColor: '#5e3ed0' }} value="right">Right</option>
                                            </select>
                                            {formik.touched.position && formik.errors.position ? (
                                                <p className="text-danger">{formik.errors.position}</p>
                                            ) : null}
                                        </div>

                                        <div className="text-center mt-4">
                                            <button className="btn btn-primary btn-block" onClick={formik.handleSubmit}>Sign me up</button>
                                        </div>
                                        <div className="new-account mt-3">
                                            <p className="text-white">Already have an account? <Link className="text-primary" to={'/login'}>Sign in</Link></p>
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
    </div>
}
export default Signup