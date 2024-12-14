import { useState } from "react"

const ChangePassword = () => {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return <div className="content-body">
        <div class="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Change Password</a></li>
                </ol>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="basic-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="text-label form-label" for="dz-password">Old Password</label>
                                <span class="text-danger">*</span>
                                <div class="input-group transparent-append">
                                    <input type={showOldPassword ? "text" : "password"} class="form-control" id="dz-password" placeholder="Choose a safe one.." required />
                                    <span class="input-group-text show-pass" onClick={() => setShowOldPassword(!showOldPassword)}>
                                        <i class="fa fa-eye-slash"></i>
                                        <i class="fa fa-eye"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="text-label form-label" for="dz-password">New Password</label>
                                <span class="text-danger">*</span>
                                <div class="input-group transparent-append">
                                    <input type={showNewPassword ? "text" : "password"} class="form-control" id="dz-password" placeholder="Choose a safe one.." required />
                                    <span class="input-group-text show-pass" onClick={() => setShowNewPassword(!showNewPassword)}>
                                        <i class="fa fa-eye-slash"></i>
                                        <i class="fa fa-eye"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="text-label form-label" for="dz-password">Confirm Password</label>
                                <span class="text-danger">*</span>
                                <div class="input-group transparent-append">
                                    <input type={showConfirmPassword ? "text" : "password"} class="form-control" id="dz-password" placeholder="Choose a safe one.." required />
                                    <span class="input-group-text show-pass" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        <i class="fa fa-eye-slash"></i>
                                        <i class="fa fa-eye"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-info">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ChangePassword