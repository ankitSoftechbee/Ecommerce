import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../../layout/Footer";
import { useFormik } from "formik";
import axios from "axios";
import { profileAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";

const validationSchema = Yup.object({
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

const Support = () => {

    const handleSubmit = (values) => {
        axios
            .post(
                profileAPIConfig.support,
                {
                    subject: values.subject,
                    message: values.message.replace(/<\/?[^>]+(>|$)/g, ""),
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("access_token"),
                    },
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Message sent successfully");
                } else {
                    toast.error("Unable to send message");
                }
            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    };

    const formik = useFormik({
        initialValues: {
            subject: "",
            message: "",
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });


    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Support</a>
                        </li>
                    </ol>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div className="basic-form">
                            {/* Subject */}
                            <div className="mb-3">
                                <label className="text-label form-label" htmlFor="subject">
                                    Subject <span className="text-danger">*</span>
                                </label>
                                <div className="input-group transparent-append">
                                    <input
                                        name="subject"
                                        type="text"
                                        className="form-control"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.subject && formik.errors.subject && (
                                    <div className="text-danger">{formik.errors.subject}</div>
                                )}
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label className="text-label form-label" htmlFor="message">
                                    Message <span className="text-danger">*</span>
                                </label>
                                <ReactQuill
                                    theme="snow"
                                    value={formik.values.message}
                                    onChange={(content) =>
                                        formik.setFieldValue("message", content)
                                    }
                                    onBlur={() => formik.setFieldTouched("message", true)}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <div className="text-danger">{formik.errors.message}</div>
                                )}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick={formik.handleSubmit}
                        >
                            Submit
                        </button>
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

export default Support;
