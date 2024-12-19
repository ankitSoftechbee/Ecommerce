import Footer from "../../layout/Footer"

const MyProfile = () => {

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
    </div>
}

export default MyProfile