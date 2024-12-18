import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import { FaUpload } from "react-icons/fa"; // Importing upload icon from react-icons

const ChangeProfilePic = () => {
    const [image, setImage] = useState(null);

    // Handle file upload
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result); // Set the image preview
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
                                        <FontAwesomeIcon icon={faUpload} size="1x"/>
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

                                {image && (
                                    <div className="mt-4 mb-4">
                                        <h5>Preview:</h5>
                                        <img
                                            src={image}
                                            alt="Uploaded Preview"
                                            className="rounded border w-32 h-32 object-cover"
                                        />
                                    </div>
                                )}

                                <button type="button" className="btn btn-info">
                                    Submit
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeProfilePic;
