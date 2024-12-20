import { useState } from "react";
import OTP from "./OTP";
import Footer from "../../layout/Footer";

const CryptoWalletChange = () => {
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
                                        name="oldEmail"
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
                                Sent OTP
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {isOtpModalOpen && <OTP onClose={handleCloseOtpModal} />}

        </div>
    );
}

export default CryptoWalletChange