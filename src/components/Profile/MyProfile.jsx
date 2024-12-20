import { useEffect, useState } from "react"
import Footer from "../../layout/Footer"
import axios from "axios"
import { profileAPIConfig } from "../../api/apiConfig"
import { toast, ToastContainer } from "react-toastify"

const MyProfile = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get(profileAPIConfig.myProfile, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
            }
        }).catch((error) => {
            toast.error('Something went wrong')
        })
    }, [])

    return <div className="content-body">
        <div class="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Profile</a></li>
                </ol>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Registration Detail</h4>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Sponser ID</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>

                            <div class="mb-3">
                                <label class="mb-1"><strong>Email</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Account Status</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Personal Detail</h4>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Full Name</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>

                            <div class="mb-3">
                                <label class="mb-1"><strong>Country</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Mobile</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Address</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
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
}

export default MyProfile