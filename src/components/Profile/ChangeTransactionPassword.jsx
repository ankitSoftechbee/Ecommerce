import { useState } from "react";
import Footer from "../../layout/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { profileAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../lib/Loader";

const validationSchema = Yup.object({
    oldTransactionPassword: Yup.string().required("Old Transaction Password is required"),
    newTransactionPassword: Yup.string()
        .required("New Transaction Password is required"),
    confirmTransactionPassword: Yup.string()
        .oneOf([Yup.ref("newTransactionPassword"), null], "Passwords must match")
        .required("Confirm Transaction Password is required"),
});

const ChangeTransactionPassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (values) => {
        axios.post(`${profileAPIConfig.updateTransactionPassword}?OldPassword=${values.oldTransactionPassword}&NewPassword=${values.newTransactionPassword}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                toast.success('Password Change Successfully')
                formik.resetForm()
            } else {
                toast.error('Password Change Failed')
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    };

    const formik = useFormik({
        initialValues: {
            oldTransactionPassword: "",
            newTransactionPassword: "",
            confirmTransactionPassword: "",
        },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Change Password</a>
                        </li>
                    </ol>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="basic-form">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                                    {/* Old Password */}
                                    <div className="mb-3">
                                        <label className="text-label form-label" htmlFor="oldPassword">
                                            Old Transaction Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group transparent-append">
                                            <input
                                                type={showOldPassword ? "text" : "password"}
                                                className="form-control"
                                                id="oldTransactionPassword"
                                                placeholder="Enter old password"
                                                name="oldTransactionPassword"
                                                value={formik.values.oldTransactionPassword}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <span
                                                className="input-group-text show-pass"
                                                onClick={() => setShowOldPassword(!showOldPassword)}
                                            >
                                                {showOldPassword ? (
                                                    <i className="fa fa-eye"></i>
                                                ) : (
                                                    <i className="fa fa-eye-slash"></i>
                                                )}
                                            </span>
                                        </div>
                                        {formik.touched.oldTransactionPassword && formik.errors.oldTransactionPassword && (
                                            <div className="text-danger">{formik.errors.oldTransactionPassword}</div>
                                        )}
                                    </div>

                                    {/* New Password */}
                                    <div className="mb-3">
                                        <label className="text-label form-label" htmlFor="newPassword">
                                            New Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group transparent-append">
                                            <input
                                                type={showNewPassword ? "text" : "password"}
                                                className="form-control"
                                                id="newTransactionPassword"
                                                placeholder="Enter new password"
                                                name="newTransactionPassword"
                                                value={formik.values.newTransactionPassword}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <span
                                                className="input-group-text show-pass"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                            >
                                                {showNewPassword ? (
                                                    <i className="fa fa-eye"></i>
                                                ) : (
                                                    <i className="fa fa-eye-slash"></i>
                                                )}
                                            </span>
                                        </div>
                                        {formik.touched.newTransactionPassword && formik.errors.newTransactionPassword && (
                                            <div className="text-danger">{formik.errors.newTransactionPassword}</div>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="mb-3">
                                        <label className="text-label form-label" htmlFor="confirmPassword">
                                            Confirm Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group transparent-append">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="form-control"
                                                id="confirmTransactionPassword"
                                                placeholder="Confirm new password"
                                                name="confirmTransactionPassword"
                                                value={formik.values.confirmTransactionPassword}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            <span
                                                className="input-group-text show-pass"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? (
                                                    <i className="fa fa-eye"></i>
                                                ) : (
                                                    <i className="fa fa-eye-slash"></i>
                                                )}
                                            </span>
                                        </div>
                                        {formik.touched.confirmTransactionPassword && formik.errors.confirmTransactionPassword && (
                                            <div className="text-danger">{formik.errors.confirmTransactionPassword}</div>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-info">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
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
    );
};

export default ChangeTransactionPassword;
