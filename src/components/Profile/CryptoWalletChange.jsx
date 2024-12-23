import { useEffect, useState } from "react";
import OTP from "./OTP";
import Footer from "../../layout/Footer";
import axios from "axios";
import { profileAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup"

const validationSchema = Yup.object({
    usdtWallet: Yup.string().required('USDT wallet is required'),
    transactionPassword: Yup.string().required('Transaction password is required'),
})
const CryptoWalletChange = () => {
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [check, setCheck] = useState(false) // check the usdwallet is update first time or not
    const [showPassword, setShowPassword] = useState(false)


    useEffect(() => {
        axios.get(profileAPIConfig.getWalletAddress, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                formik.setValues({
                    ...formik.values,
                    usdtWallet: response.data.usdtWallet
                })
                setCheck(true)
            } else {
                setCheck(false)
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    }, [])

    const handleSubmit = (values) => {
        axios.post(profileAPIConfig.updateWallet, {
            usdtWallet: values.usdtWallet,
            transPassword: values.transactionPassword
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                toast.success('Updated successfully')
            } else {
                toast.error('Invalid password')
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    }

    const formik = useFormik({
        initialValues: {
            usdtWallet: '',
            transactionPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    })

    const handleSendOtpClick = () => {
        setIsOtpModalOpen(true); // Open the OTP modal
    };

    const handleCloseOtpModal = () => {
        setIsOtpModalOpen(false); // Close the OTP modal
    };
    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Crypto Wallet</a>
                        </li>
                    </ol>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Update Crypto Wallet</h4>
                    </div>
                    <div className="card-body">
                        <div className="basic-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                                <div className="mb-3">
                                    <label className="mb-1">
                                        <strong>USDT (BEP20) Trust Wallet</strong>
                                    </label>
                                    <span className="text-danger">*</span>
                                    <input
                                        type="text"
                                        name="usdtWallet"
                                        className="form-control"
                                        value={formik.values.usdtWallet}
                                        autoComplete="off"
                                        // readOnly={check}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.usdtWallet && formik.errors.usdtWallet && (
                                        <div className="text-danger">{formik.errors.usdtWallet}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="mb-1">
                                        <strong>Transaction password</strong>
                                    </label>
                                    <span className="text-danger">*</span>
                                    <div className="input-group transparent-append">
                                        <input
                                            type={showPassword ? 'text':'password'}
                                            name="transactionPassword"
                                            className="form-control"
                                            value={formik.values.transactionPassword}
                                            autoComplete="off"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <span
                                            className="input-group-text show-pass"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <i className="fa fa-eye"></i>
                                            ) : (
                                                <i className="fa fa-eye-slash"></i>
                                            )}
                                        </span>
                                    </div>
                                    {formik.touched.transactionPassword && formik.errors.transactionPassword && (
                                        <div className="text-danger">{formik.errors.transactionPassword}</div>
                                    )}
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={formik.handleSubmit}

                            >
                                Submit
                            </button>
                            {/* <button
                                type="button"
                                className="btn btn-info"
                                onClick={handleSendOtpClick}

                            >
                                Sent OTP
                            </button> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {/* {isOtpModalOpen && <OTP onClose={handleCloseOtpModal} />} */}
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
    );
}

export default CryptoWalletChange