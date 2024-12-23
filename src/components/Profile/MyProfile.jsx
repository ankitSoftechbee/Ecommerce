import { useEffect, useState } from "react"
import Footer from "../../layout/Footer"
import axios from "axios"
import { profileAPIConfig, signUpAPIConfig } from "../../api/apiConfig"
import { toast, ToastContainer } from "react-toastify"
import { useFormik } from "formik"
import * as Yup from "yup"
import Loader from "../../lib/Loader"

const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
})
const MyProfile = () => {
    const [countryList, setCountryList] = useState('')

    useEffect(() => {
        axios.get(signUpAPIConfig.countryList, {}, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((response) => {
            if (response.status === 200) {
                setCountryList(response.data.data);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get(profileAPIConfig.myProfile, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then((response) => {
            if (response.status === 200) {
                formik.setValues({
                    refId: response.data.reffid || '',
                    refName: response.data.reffname || '',
                    sponsorId: response.data.username || '',
                    name: response.data.name || '',
                    email: response.data.email || '',
                    mobile: response.data.mobile || '',
                    address: response.data.address || '',
                    dateofjoin: response.data.dateofjoin ? response.data.dateofjoin.split('T')[0] : '',
                    country: response.data.country || '',
                    code: response.data.code || '',
                    status: response.data.status || ''
                })
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    }

    const hanldeSubmit = (values) => {
        axios
            .post(profileAPIConfig.updateProfile, {
                // sponsorId: values.sponsorId,
                Name: values.name,
                Email: values.email,
                Mobile: values.mobile,
                address: values.address,
                // dateofjoin: values.dateofjoin,
                // country: values.country,
                // code: values.code,
                // status: values.status

            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Profile updated successfully");
                    fetchData
                } else {
                    toast.error("Failed to update profile");
                }
            })
            .catch(() => {
                toast.error("Something went wrong");
            });
    }

    const formik = useFormik({
        initialValues: {
            refId: '',
            refName: '',
            sponsorId: '',
            name: '',
            email: '',
            mobile: '',
            address: '',
            dateofjoin: '',
            country: '',
            code: '',
            status: ''
        },
        validationSchema: validationSchema,
        onSubmit: hanldeSubmit
    })


    return <div className="content-body">
        <div class="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
                </ol>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Registration Detail</h4>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Referral ID</strong></label>
                                <input
                                    type="text"
                                    name="refId"
                                    className="form-control"
                                    value={formik.values.refId}
                                    autoComplete="off"
                                    readOnly
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Referral Name</strong></label>
                                <input
                                    type="text"
                                    name="refName"
                                    className="form-control"
                                    value={formik.values.refName}
                                    autoComplete="off"
                                    readOnly
                                />
                            </div>
                            {/* / */}
                            <div class="mb-3">
                                <label class="mb-1"><strong>Username</strong></label>
                                <input
                                    type="text"
                                    name="sponsorId"
                                    className="form-control"
                                    value={formik.values.sponsorId}
                                    autoComplete="off"
                                    readOnly
                                />
                            </div>


                            <div class="mb-3">
                                <label class="mb-1"><strong>Account Status</strong></label>
                                <input
                                    type="text"
                                    name="status"
                                    className="form-control"
                                    value={formik.values.status}
                                    autoComplete="off"
                                    readOnly
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Date Joining</strong></label>
                                <input
                                    type="date"
                                    name="dateofjoin"
                                    className="form-control"
                                    value={formik.values.dateofjoin}
                                    autoComplete="off"
                                    readOnly
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Personal Detail</h4>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Full Name</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formik.values.name}
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="text-danger">{formik.errors.name}</div>
                                )}

                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Email</strong></label>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    autoComplete="off"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-danger">{formik.errors.email}</div>
                                )}

                            </div>

                            <div className="mb-3">
                                <label className="mb-1">
                                    <strong>Country</strong>
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    value={formik.values.country}
                                    readOnly
                                    autoComplete="off"
                                />
                                {/* <select
                                    name="country"
                                    className="form-control max-h-[400px]"
                                    value={formik.values.country}
                                    onChange={(e) => {
                                        formik.setFieldValue('country', e.target.value)
                                        formik.setFieldValue('code', countryList.find((country) => country.country === e.target.value).code)
                                    }}
                                    onBlur={formik.handleBlur}
                                    readOnly
                                >
                                    <option style={{ backgroundColor: '#5e3ed0' }}>Select Country</option>
                                    {countryList && countryList.map((country) => <option style={{ backgroundColor: '#5e3ed0' }}>{country.country}</option>)}

                                </select>
                                {formik.touched.country && formik.errors.country ? (
                                    <p className="text-danger">{formik.errors.country}</p>
                                ) : null} */}
                            </div>



                            <div className="flex gap-4">
                                {/* <div class="mb-3 flex-[20%]">
                                    <label class="mb-1"><strong>Code</strong></label>
                                    <input
                                        type="text"
                                        name="code"
                                        className="form-control"
                                        value={formik.values.code}
                                        autoComplete="off"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        readOnly
                                    />
                                    {formik.touched.code && formik.errors.code && (
                                        <div className="text-danger">{formik.errors.code}</div>
                                    )}
                                </div> */}
                                <div class="mb-3 flex-[100%]">
                                    <label class="mb-1"><strong>Mobile</strong></label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="form-control"
                                        value={formik.values.mobile}
                                        autoComplete="off"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.mobile && formik.errors.mobile && (
                                        <div className="text-danger">{formik.errors.mobile}</div>
                                    )}
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="mb-1"><strong>Address</strong></label>
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    value={formik.values.address}
                                    autoComplete="off"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.address && formik.errors.address && (
                                    <div className="text-danger">{formik.errors.address}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <button className="btn btn-success" onClick={formik.handleSubmit}>Save Changes</button>
            <Footer />
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

export default MyProfile