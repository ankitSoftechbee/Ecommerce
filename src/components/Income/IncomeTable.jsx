import { TablePagination } from "@mui/material"

const IncomeTable = (props) => {
    const { fromDate, setFromDate, toDate, setToDate, pageNo, limit, data, handleChangePage, handleChangeRowsPerPage } = props

    return <>
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="mb-3">
                <label class="mb-1"><strong>Start Date</strong></label>
                <input
                    type="date"
                    name="name"
                    className="form-control"
                    value={fromDate}
                    autoComplete="off"
                    onChange={(e) => setFromDate(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label class="mb-1"><strong>End Date</strong></label>
                <input
                    type="date"
                    name="name"
                    className="form-control"
                    value={toDate}
                    autoComplete="off"
                    onChange={(e) => setToDate(e.target.value)}
                />
            </div>
            {/* <button
                type="button"
                className="btn btn-info h-[35px] w-[80px]"

            >
                Apply
            </button> */}
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
                                        <th><strong>Credit</strong></th>
                                        <th><strong>Remark</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.data && data.data.length > 0 ? (
                                        data.data.map((item, index) => (
                                            <tr key={index}>
                                                <td><strong>{index + 1 + pageNo * limit}</strong></td>
                                                <td>{item.date ? item.date.split('T')[0] : ''}</td>
                                                <td>{item.credit || ''}</td>
                                                <td>{item.remark || ''}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">No records found</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                        {/* <!-- Pagination --> */}
                        <TablePagination
                            component="div"
                            count={data?.totalRecord || ''}
                            page={pageNo}
                            onPageChange={handleChangePage}
                            rowsPerPage={limit}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            sx={{
                                color: 'white', // Main text color
                                '& .MuiTablePagination-actions button': {
                                    color: 'white', // Arrow and buttons color
                                },
                                '& .MuiSelect-select': {
                                    color: 'white', // Dropdown text color
                                },
                                '& .MuiSvgIcon-root': {
                                    color: 'white', // Arrow dropdown icon color
                                },
                                '& .MuiTablePagination-caption': {
                                    color: 'white', // Caption color
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default IncomeTable