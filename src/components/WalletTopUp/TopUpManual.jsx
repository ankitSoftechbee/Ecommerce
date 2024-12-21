import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faQrcode, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { packageAPIConfig, walletAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../../layout/Footer";
import { useFormik } from "formik";

const TopUpManual = () => {
    const [fundBalance, setFundBalance] = useState(0);
    const [address, setAddress] = useState("");
    const [qrImage, setQrImage] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchBalance();
        fetchPaymentInfo();
    }, []);

    const fetchBalance = () => {
        axios
            .get(packageAPIConfig.checkWalletBalance, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setFundBalance(response.data.fundBalance);
                }
            })
            .catch(() => {
                toast.error("Something went wrong");
            });
    };

    const fetchPaymentInfo = () => {
        axios
            .get(`${walletAPIConfig.paymentMode}?Mode=USDT`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setAddress(response.data.address);
                    setQrImage(response.data.qrCode);
                }
            })
            .catch(() => toast.error("Something went wrong"));
    };

    const handleSubmit = (values) => {
        axios.post(`${walletAPIConfig.topUpManual}?Amount=${values.amount}&PaymentMode=${values.paymentMode}&Hashcode=${values.hashCode}&Receipt=${values.receipt}`, {}, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                toast.success("Top up successful");
            } else {
                toast.error("Something went wrong");
            }
        }).catch((error) => toast.error("Something went wrong"))
    }

    const formik = useFormik({
        initialValues: {
            amount: "",
            paymentMode: '',
            hashCode: '',
            receipt: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    })

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
        toast.success("Address copied to clipboard!");
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Wallet / Top Up Manual</a>
                        </li>
                    </ol>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-white text-xl text-center m-2">
                        Available Amount is:{" "}
                        <span
                            className="font-semibold"
                            style={{ color: fundBalance < 100 ? "red" : "#32de84" }}
                        >
                            $ {fundBalance}
                        </span>
                    </h1>
                    {address && qrImage && <div>
                        <button
                            type="button"
                            className="btn btn-info mr-4"
                            onClick={copyToClipboard}
                        >
                            <FontAwesomeIcon icon={faCopy} style={{ marginRight: "3px" }} />
                            Copy Address
                        </button>
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => setShowModal(true)}
                        >
                            <FontAwesomeIcon icon={faQrcode} style={{ marginRight: "3px" }} />
                            Show QR Code
                        </button>
                    </div>}
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="basic-form">
                            {/* Input fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                                <div className="mb-3">
                                    <label className="mb-1">
                                        <strong>Amount</strong>
                                    </label>
                                    <input
                                        type="text"
                                        name="amount"
                                        className="form-control"
                                        value=""
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="mb-1">
                                        <strong>Payment Method</strong>
                                    </label>
                                    <input
                                        type="text"
                                        name="paymentMethod"
                                        className="form-control"
                                        value=""
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="mb-1">
                                        <strong>HashCode</strong>
                                    </label>
                                    <input
                                        type="text"
                                        name="hashCode"
                                        className="form-control"
                                        value=""
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 max-w-[250px]">
                                <label
                                    htmlFor="file-upload"
                                    className="btn btn-info flex items-center space-x-2"
                                >
                                    <FontAwesomeIcon icon={faUpload} size="1x" />
                                    <span>Upload Receipt</span>
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                />
                            </div>
                            <button type="button" className="btn btn-info">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
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

            {/* QR Code Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 text-white rounded-lg shadow-lg w-96 p-6 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        >
                            &times;
                        </button>
                        <h2 className="text-center text-lg font-bold mb-4">QR Code</h2>
                        <img
                            src={qrImage}
                            alt="QR Code"
                            className="mx-auto mb-4"
                            style={{ width: "150px", height: "150px" }}
                        />
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-purple-500 w-full py-2 rounded text-white font-bold hover:bg-purple-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopUpManual;
