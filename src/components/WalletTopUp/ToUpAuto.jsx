import Footer from "../../layout/Footer"

const TopUpAuto = () => {

    return <div className="content-body">

        <div className="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Wallet / Top Up</a></li>
                </ol>
            </div>
            <h1 className="text-center text-xl m-2">Available Amount : $ 0.0</h1>
            <div class="card">
                <div class="card-body">
                    <div class="basic-form">
                        <div class="mb-3">
                            <label class="mb-1"><strong>Wallet Address</strong></label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value=''
                                autoComplete="off"
                            />
                        </div>

                        <div class="mb-3">
                            <label class="mb-1"><strong>Your Balance</strong></label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value=''
                                autoComplete="off"
                            />
                        </div>
                        <div class="mb-3">
                            <label class="mb-1"><strong>Amount</strong></label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value=''
                                autoComplete="off"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-info"

                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    </div>
}

export default TopUpAuto