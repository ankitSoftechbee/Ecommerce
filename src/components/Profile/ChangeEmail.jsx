// ChangeEmail.js
import { useState } from "react";
import OTP from "./OTP";
import Footer from "../../layout/Footer";

const ChangeEmail = () => {
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

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
              <a href="javascript:void(0)">Change Email</a>
            </li>
          </ol>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="basic-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label className="mb-1">
                    <strong>Old Email</strong>
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="oldEmail"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-1">
                    <strong>New Email</strong>
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="newEmail"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-1">
                    <strong>Confirm Email</strong>
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    type="text"
                    name="confirmEmail"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-info"
                onClick={handleSendOtpClick}
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

      {/* Render OTP Modal */}
      {isOtpModalOpen && <OTP onClose={handleCloseOtpModal} />}
    </div>
  );
};

export default ChangeEmail;
