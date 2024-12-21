import { useFormik } from "formik";
import Footer from "../../layout/Footer";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { packageAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";

const StakingPackage = () => {
    const [fundBalance, setFundBalance] = useState(0);

    useEffect(() => {
        fetchBalance()
    }, []);

    const fetchBalance = () => {
        axios
            .get(packageAPIConfig.checkWalletBalance, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setFundBalance(response.data.fundBalance);
                }
            })
            .catch(() => {
                toast.error('Something went wrong');
            });
    }

    const validationSchema = Yup.object({
        amount: Yup.number()
            .min(100, 'Minimum amount is 100') // Ensure minimum amount is 100
            .required('Amount is required')
            .test(
                'not-exceed-fundBalance',
                `You don't have enough balance. Your balance is ${fundBalance}`,
                function (value) {
                    // Check if value exists and does not exceed fundBalance
                    return value === undefined || value <= fundBalance;
                }
            ),
    });

    const handleSubmit = (values) => {
        axios.post(packageAPIConfig.invest, {
            amount: values.amount
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                fetchBalance()
                toast.success('Investment successful');
            } else {
                toast.error('Something went wrong');
            }
        }).catch((error) => toast.error('Something went wrong'))
    };

    const formik = useFormik({
        initialValues: {
            amount: '',
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
                            <a href="javascript:void(0)">Package</a>
                        </li>
                    </ol>
                </div>
                <h1 className="text-white text-xl text-center m-2">Available Amount is : <span className="font-semibold" style={{ color: fundBalance < 100 ? 'red' : '#32de84' }}>$ {fundBalance}</span></h1>
                <div className="card">
                    <div className="card-body">
                        <div className="basic-form">
                            <div className="flex gap-4">
                                <form onSubmit={formik.handleSubmit} className="flex-[50%]">
                                    <div className="mb-3">
                                        <label className="mb-1">
                                            <strong>Amount</strong>
                                        </label>
                                        <span className="text-danger">*</span>
                                        <input
                                            type="number"
                                            name="amount"
                                            className="form-control"
                                            value={formik.values.amount}
                                            autoComplete="off"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.amount && formik.errors.amount && (
                                            <div className="text-danger">{formik.errors.amount}</div>
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-info"
                                        onClick={formik.handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </form>
                                <img
                                    src="src/assets/images/package.jpg"
                                    className="flex-[50%]"
                                    style={{ width: '100px', height: '200px' }}
                                />
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

export default StakingPackage;
