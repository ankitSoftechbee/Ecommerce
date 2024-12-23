import { useState } from "react";
import Footer from "../../layout/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { profileAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../lib/Loader";

const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string()
        .required("New Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const ChangePassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values) => {
        setLoading(true)
        axios.post(`${profileAPIConfig.changePassword}?OldPassword=${values.oldPassword}&NewPassword=${values.newPassword}`, {}, {
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
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            toast.error('Something went wrong')
        })
    };

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: handleSubmit,
    });

    if (loading) {
        return <Loader />
    }

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
                                            Old Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group transparent-append">
                                            <input
                                                type={showOldPassword ? "text" : "password"}
                                                className="form-control"
                                                id="oldPassword"
                                                placeholder="Enter old password"
                                                name="oldPassword"
                                                value={formik.values.oldPassword}
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
                                        {formik.touched.oldPassword && formik.errors.oldPassword && (
                                            <div className="text-danger">{formik.errors.oldPassword}</div>
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
                                                id="newPassword"
                                                placeholder="Enter new password"
                                                name="newPassword"
                                                value={formik.values.newPassword}
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
                                        {formik.touched.newPassword && formik.errors.newPassword && (
                                            <div className="text-danger">{formik.errors.newPassword}</div>
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
                                                id="confirmPassword"
                                                placeholder="Confirm new password"
                                                name="confirmPassword"
                                                value={formik.values.confirmPassword}
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
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                            <div className="text-danger">{formik.errors.confirmPassword}</div>
                                        )}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success">
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

export default ChangePassword;
