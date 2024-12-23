import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../layout/Footer";
import axios from "axios";
import { profileAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../lib/Loader";
// import { FaUpload } from "react-icons/fa"; // Importing upload icon from react-icons

const ChangeProfilePic = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState('')

    const hanldeSubmit = () => {
        const formData = new FormData()
        formData.append('file', image)
        axios.post(profileAPIConfig.updateProfilePic, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                toast.success('Profile picture updated successfully')
            } else {
                toast.error('Unable to update profile picture')
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    }

    // Handle file upload
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file)
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result); // Set the image preview
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Change Profile Pic</a>
                        </li>
                    </ol>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-4 max-w-[250px]">
                                    <label htmlFor="file-upload" className="btn btn-info flex items-center space-x-2">
                                        <FontAwesomeIcon icon={faUpload} size="1x" />
                                        <span>Change Profile Picture</span>
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden" // Hide the file input
                                        accept="image/*"
                                        onChange={handleFileChange} // Trigger file upload
                                    />
                                </div>

                                {imagePreview && (
                                    <div className="mt-4 mb-4">
                                        <h5>Preview:</h5>
                                        <img
                                            src={imagePreview}
                                            alt="Uploaded Preview"
                                            className="rounded border w-32 h-32 object-cover"
                                        />
                                    </div>
                                )}

                                <button type="button" className="btn btn-success" onClick={hanldeSubmit}>
                                    Submit
                                </button>

                            </div>
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

export default ChangeProfilePic;
