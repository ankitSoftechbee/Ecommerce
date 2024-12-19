import Footer from "../../layout/Footer"

const TopUpAutoHistory = () => {

    return <div className="content-body">

        <div className="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Wallet Deposit History</a></li>
                </ol>
            </div>
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div class="mb-3">
                    <label class="mb-1"><strong>Start Date</strong></label>
                    <input
                        type="date"
                        name="name"
                        className="form-control"
                        value=''
                        autoComplete="off"
                    />
                </div>
                <div class="mb-3">
                    <label class="mb-1"><strong>End Date</strong></label>
                    <input
                        type="date"
                        name="name"
                        className="form-control"
                        value=''
                        autoComplete="off"
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-info h-[35px] w-[80px]"

                >
                    Apply
                </button>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th><strong>Sno</strong></th>
                                            <th><strong>Amount</strong></th>
                                            <th><strong>Hash Code</strong></th>
                                            <th><strong>Date</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>01</strong></td>
                                            <td>$0.0</td>
                                            <td>ejdbjjejbdbejdbjhedbjwbxjwqfywewegcy</td>
                                            <td>01 August 2020</td>
                                        </tr>
                                        <tr>
                                            <td><strong>01</strong></td>
                                            <td>$0.0</td>
                                            <td>ejdbjjejbdbejdbjhedbjwbxjwqfywewegcy</td>
                                            <td>01 August 2020</td>
                                        </tr>
                                        <tr>
                                            <td><strong>01</strong></td>
                                            <td>$0.0</td>
                                            <td>ejdbjjejbdbejdbjhedbjwbxjwqfywewegcy</td>
                                            <td>01 August 2020</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- Pagination --> */}
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    </div>
}

export default TopUpAutoHistory