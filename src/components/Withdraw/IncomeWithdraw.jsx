import Footer from "../../layout/Footer"

const IncomeWithdraw = () => {

    return <div className="content-body">

        <div className="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Transfer Income Withdraw</a></li>
                </ol>
            </div>
            <div class="card">
                <div class="card-header">
                    <div className="w-full">
                        <p className="text-center text-xl text-white">Available Balance : $ 0.0</p>
                    </div>
                </div>
                <div class="card-body">
                    <div class="basic-form">
                        <div class="mb-3">
                            <label class="mb-1"><strong>Wallet Amount</strong></label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value=''
                                autoComplete="off"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Withdrawal Fee 5%</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Withdrawal Payout</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                            <div class="mb-3">
                                <label class="mb-1"><strong>Payment Wallet</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                            <div class="mb-3">
                                <label class="mb-1"><strong>Final Paid Amount</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value=''
                                    autoComplete="off"
                                />
                            </div>
                        </div>

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

                        <button
                            type="button"
                            className="btn btn-info"

                        >
                            Send OTP
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
}

export default IncomeWithdraw