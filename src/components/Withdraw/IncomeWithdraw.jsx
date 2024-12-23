import axios from "axios";
import Footer from "../../layout/Footer"
import { packageAPIConfig, profileAPIConfig, withdrawAPIConfig } from "../../api/apiConfig";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const IncomeWithdraw = () => {
    const [withdrawBalance, setWithdrawBalance] = useState(0)
    const [paymentModeList, setPaymentModeList] = useState('')
    const [showPassword,setShowPassword]=useState(false)


    useEffect(() => {
        axios
            .get(withdrawAPIConfig.getPaymentMode, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    // setPaymentModeList(response.data.data)
                    formik.setFieldValue('paymentMode', response.data.data[0].paymentMode);
                }
            })
            .catch(() => {
                toast.error('Something went wrong');
            });
    }, []);

    useEffect(() => {
        axios.get(profileAPIConfig.getWalletAddress, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                formik.setFieldValue('wallet', response.data.usdtWallet);
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    }, [])

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
                    setWithdrawBalance(response.data.withdrawBalance);
                }
            })
            .catch(() => {
                toast.error('Something went wrong');
            });
    }

    const hanldeSubmit = (values) => {
        axios.post(withdrawAPIConfig.incomeWithdraw, {
            amount: values.amount || '',
            wallet: values.wallet || '',
            paidAmount: values.paidAmount || '',
            paymentMode: values.paymentMode || '',
            transPassword: values.transPassword || ''
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("access_token"),
            }
        }).then((response) => {
            if (response.status === 200) {
                fetchBalance()
                toast.success('Withdrawal successful')
            } else {
                toast.error('Withdrawl Failed')
            }
        }).catch((error) => toast.error('Something went wrong'))
    }

    const validationSchema = Yup.object({
        amount: Yup.number().min(10, 'Minimum amount should be 10').required('Amount is required'),
        wallet: Yup.string().required('Wallet is required'),
        withdrawFee: Yup.string().required('Withdraw fee is required'),
        paymentMode: Yup.string().required('Payment mode is required'),
        paidAmount: Yup.string().required('Paid amount is required'),
        transPassword: Yup.string().required('Password is required'),
    })
    const formik = useFormik({
        initialValues: {
            amount: '',
            withdrawFee: '',
            wallet: '',
            paidAmount: '',
            paymentMode: '',
            transPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: hanldeSubmit
    })


    return <div className="content-body">amount

        <div className="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Transfer Income Withdraw</a></li>
                </ol>
            </div>
            <div class="card">
                <div class="card-header">
                    <div className="w-full">
                        <h1 className="text-white text-xl text-center m-2">Available Amount is : <span className="font-semibold" style={{ color: withdrawBalance < 100 ? 'red' : '#32de84' }}>$ {withdrawBalance}</span></h1>
                    </div>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div class="mb-3">
                            <label class="mb-1"><strong>Withdrawal Amount</strong></label>
                            <input
                                type="text"
                                name="amount"
                                className="form-control"
                                value={formik.values.amount}
                                autoComplete="off"
                                onChange={(e) => {
                                    const value = e.target.value
                                    formik.setFieldValue('amount', value)
                                    formik.setFieldValue('withdrawFee', (value * 0.05).toString())
                                    formik.setFieldValue('paidAmount', (value * 0.95).toString())
                                }}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.amount && formik.errors.amount && (
                                <div className="text-danger">{formik.errors.amount}</div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Withdrawal Fee 5%</strong></label>
                                <input
                                    type="text"
                                    name="withdrawFee"
                                    className="form-control"
                                    value={formik.values.withdrawFee}
                                    autoComplete="off"
                                    readOnly
                                />
                                {formik.touched.withdrawFee && formik.errors.withdrawFee && (
                                    <div className="text-danger">{formik.errors.withdrawFee}</div>
                                )}
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Withdrawal Payout</strong></label>
                                <input
                                    type="text"
                                    name="paidAmount"
                                    className="form-control"
                                    value={formik.values.paidAmount}
                                    autoComplete="off"
                                    readOnly
                                />
                                {formik.touched.paidAmount && formik.errors.paidAmount && (
                                    <div className="text-danger">{formik.errors.paidAmount}</div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div className="mb-3">
                                <label className="mb-1">
                                    <strong>Payment Mode</strong>
                                </label>
                                <input
                                    type="text"
                                    name="paymentMode"
                                    className="form-control"
                                    value={formik.values.paymentMode}
                                    autoComplete="off"
                                    readOnly
                                />

                                {formik.touched.paymentMode && formik.errors.paymentMode ? (
                                    <p className="text-danger">{formik.errors.paymentMode}</p>
                                ) : null}
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Wallet Address</strong></label>
                                <input
                                    type="text"
                                    name="wallet"
                                    className="form-control"
                                    value={formik.values.wallet}
                                    autoComplete="off"
                                    readOnly
                                />
                                {formik.touched.wallet && formik.errors.wallet && (
                                    <div className="text-danger">{formik.errors.wallet}</div>
                                )}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="mb-1"><strong>Transaction Password</strong></label>
                            <div className="input-group transparent-append">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="transPassword"
                                    className="form-control"
                                    value={formik.values.transPassword}
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
                            {formik.touched.transPassword && formik.errors.transPassword && (
                                <div className="text-danger">{formik.errors.transPassword}</div>
                            )}
                        </div>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={formik.handleSubmit}
                        >
                            Submit
                        </button>
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
}

export default IncomeWithdraw