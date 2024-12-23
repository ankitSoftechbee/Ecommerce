import { toast, ToastContainer } from "react-toastify"
import Footer from "../../layout/Footer"
import { useEffect, useState } from "react"
import { packageAPIConfig, transferAPIConfig } from "../../api/apiConfig"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"

const IncomeToFund = () => {
    const [withdrawBalance, setWithdrawBalance] = useState(0)
    const [showPassword, setShowPassword] = useState(false)


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
            axios.post(transferAPIConfig.incomeToFundTransfer, {
                amount: values.amount || '',
                transPassword: values.transPassword || ''
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem("access_token"),
                }
            }).then((response) => {
                if (response.status === 200) {
                    fetchBalance()
                    toast.success('Transfer successful')
                    formik.resetForm()
                } else {
                    toast.error('Transfer Failed')
                }
            }).catch((error) => toast.error('Something went wrong'))

    }

    const validationSchema = Yup.object({
        amount: Yup.number()
            .typeError('Amount must be a valid number') // Ensures the input is a number
            .positive('Amount must be greater than zero') // Ensures it's a positive number
            .min(10, 'Minimum amount should be 10') // Minimum amount constraint
            .max(withdrawBalance, 'Amount exceeds available balance') // Maximum constraint based on fund balance
            .required('Amount is required'),
        transPassword: Yup.string().required('Password is required'),
    })

    const formik = useFormik({
        initialValues: {
            amount: '',
            transPassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: hanldeSubmit
    })

    return <div className="content-body">
        <div className="container-fluid">
            <div className="row page-titles">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Transfer To Fund</a>
                    </li>
                </ol>
            </div>
            <div class="card">
                <div class="card-header">
                    <div className="w-full">
                        <h1 className="text-white text-xl text-center m-2">Available Amount is : <span className="font-semibold" style={{ color: withdrawBalance < 10 ? 'red' : '#32de84' }}>$ {withdrawBalance}</span></h1>
                    </div>
                </div>
                <div class="card-body">
                    <div class="basic-form">

                        <div class="mb-3">
                            <label class="mb-1"><strong>Amount</strong></label>
                            <input
                                type="text"
                                name="amount"
                                className="form-control"
                                value={formik.values.amount}
                                autoComplete="off"
                                onChange={(e) => {
                                    const value = e.target.value
                                    formik.setFieldValue('amount', value)
                                }}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.amount && formik.errors.amount && (
                                <div className="text-danger">{formik.errors.amount}</div>
                            )}
                        </div>

                        <div class="mb-3">
                            <label class="mb-1"><strong>Transaction Password</strong></label>
                            <div className="input-group transparent-append">
                                <input
                                    type={showPassword ? 'text' : 'password'}
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

export default IncomeToFund