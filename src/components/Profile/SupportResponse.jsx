const SupportResponse = () => {

    return <div className="content-body">
        <div class="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Support Response</a></li>
                </ol>
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
                                            <th><strong>Date</strong></th>
                                            <th><strong>Subject</strong></th>
                                            <th><strong>Message</strong></th>
                                            <th><strong>Response</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>01</strong></td>
                                            <td>Mr. Bobby</td>
                                            <td>Dr. Jackson</td>
                                            <td>01 August 2020</td>
                                            <td><span class="badge light badge-success">Successful</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>02</strong></td>
                                            <td>Mr. Bobby</td>
                                            <td>Dr. Jackson</td>
                                            <td>01 August 2020</td>
                                            <td><span class="badge light badge-danger">Canceled</span></td>
                                        </tr>
                                        <tr>
                                            <td><strong>03</strong></td>
                                            <td>Mr. Bobby</td>
                                            <td>Dr. Jackson</td>
                                            <td>01 August 2020</td>
                                            <td><span class="badge light badge-warning">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SupportResponse