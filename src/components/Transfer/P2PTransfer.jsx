import { toast, ToastContainer } from "react-toastify"
import Footer from "../../layout/Footer"
import { useEffect, useState, useCallback } from "react"
import { packageAPIConfig, signUpAPIConfig, transferAPIConfig } from "../../api/apiConfig"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"

const P2PTransfer = () => {
    const [fundBalance, setFundBalance] = useState(0)
    const [isSponser, setIsSponser] = useState(false);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [sponsorName, setSponsorName] = useState('')
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
                    setFundBalance(response.data.fundBalance);
                }
            })
            .catch(() => {
                toast.error('Something went wrong');
            });
    }

    const hanldeSubmit = (values) => {
        if (isSponser) {
            axios.post(transferAPIConfig.p2pTransfer, {
                toUser: values.memberId || '',
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
                } else {
                    toast.error('Transfer Failed')
                }
            }).catch((error) => toast.error('Something went wrong'))
        } else {
            toast.error('Invalid Member')
        }

    }

    const validationSchema = Yup.object({
        amount: Yup.number()
            .typeError('Amount must be a valid number') // Ensures the input is a number
            .positive('Amount must be greater than zero') // Ensures it's a positive number
            .min(10, 'Minimum amount should be 10') // Minimum amount constraint
            .max(fundBalance, 'Amount exceeds available balance') // Maximum constraint based on fund balance
            .required('Amount is required'),
        memberId: Yup.string().required('Member Id is required'),
        adminCharge: Yup.string().required('Admin Charge fee is required'),
        finalPaidAmount: Yup.string().required('Final Paid Amount is required'),
        transPassword: Yup.string().required('Password is required'),
    })
    const formik = useFormik({
        initialValues: {
            memberId: "",
            amount: '',
            adminCharge: '',
            finalPaidAmount: '',
            transPassword: ""

        },
        validationSchema: validationSchema,
        onSubmit: hanldeSubmit
    })

    const checkSponserId = useCallback((sponserId) => {
        if (!sponserId) return;

        axios.get(signUpAPIConfig.checkSPONSERID, {
            params: {
                UserName: sponserId
            }
        }).then((response) => {
            if (response.data.name !== null) {
                setIsSponser(true);
                setSponsorName(response.data.name)
            } else {
                setIsSponser(false);
                toast.error("Invalid Member!");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const handleSponserIdChange = (e) => {
        formik.handleChange(e); // Call formik's handler for controlled input
        const { value } = e.target;

        if (debounceTimer) {
            clearTimeout(debounceTimer); // Clear the previous timer if user types again
        }

        // Set a new timeout to call the API after 3 seconds
        const newTimer = setTimeout(() => {
            checkSponserId(value);
        }, 3000);

        setDebounceTimer(newTimer);
    };

    return <div className="content-body">
        <div className="container-fluid">
            <div className="row page-titles">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0)">P2P Transfer</a>
                    </li>
                </ol>
            </div>
            <div class="card">
                <div class="card-header">
                    <div className="w-full">
                        <h1 className="text-white text-xl text-center m-2">Available Amount is : <span className="font-semibold" style={{ color: fundBalance < 10 ? 'red' : '#32de84' }}>$ {fundBalance}</span></h1>
                    </div>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div class="mb-3">
                            <label className="mb-1"><strong>Member ID &nbsp; &nbsp;   {sponsorName && <span className="text-red-300">({sponsorName})</span>}</strong></label>
                            <input
                                type="text"
                                name="memberId"
                                className="form-control"
                                value={formik.values.memberId}
                                autoComplete="off"
                                onChange={handleSponserIdChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.memberId && formik.errors.memberId && (
                                <div className="text-danger">{formik.errors.memberId}</div>
                            )}
                        </div>
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
                                    formik.setFieldValue('adminCharge', (value * 0.02).toString())
                                    formik.setFieldValue('finalPaidAmount', (value * 0.98).toString())
                                }}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.amount && formik.errors.amount && (
                                <div className="text-danger">{formik.errors.amount}</div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Admin Charges 2%</strong></label>
                                <input
                                    type="text"
                                    name="adminCharge"
                                    className="form-control"
                                    value={formik.values.adminCharge}
                                    autoComplete="off"
                                    readOnly
                                />
                                {formik.touched.adminCharge && formik.errors.adminCharge && (
                                    <div className="text-danger">{formik.errors.adminCharge}</div>
                                )}
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Final Paid Amount</strong></label>
                                <input
                                    type="text"
                                    name="finalPaidAmount"
                                    className="form-control"
                                    value={formik.values.finalPaidAmount}
                                    autoComplete="off"
                                    readOnly
                                />
                                {formik.touched.finalPaidAmount && formik.errors.finalPaidAmount && (
                                    <div className="text-danger">{formik.errors.finalPaidAmount}</div>
                                )}
                            </div>
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

export default P2PTransfer