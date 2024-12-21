import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import axios from "axios";
import { communityAPIConfig, packageAPIConfig, walletAPIConfig, withdrawAPIConfig } from "../../api/apiConfig";
import { toast } from "react-toastify";
import { TablePagination } from "@mui/material";

const TopUpManualHistory = () => {
    const [data, setData] = useState('');
    const [limit, setLimit] = useState(10);
    const [pageNo, setPageNo] = useState(0);
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')

    useEffect(() => {
        axios
            .get(walletAPIConfig.topUpManualHistory, {
                params: {
                    PageNumber: pageNo + 1,
                    PageSize: limit,
                    FromDate: fromDate || 'NULL',
                    Todate: toDate || 'NULL',
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                }
            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    }, [pageNo, limit, fromDate, toDate]);

    const handleChangePage = (event, newPage) => {
        setPageNo(newPage); // Update page number
    };

    const handleChangeRowsPerPage = (event) => {
        setLimit(parseInt(event.target.value, 10)); // Update rows per page
        setPageNo(0); // Reset to first page
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="javascript:void(0)">Top Up Manual History</a>
                        </li>
                    </ol>
                </div>
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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-responsive-md">
                                        <thead>
                                            <tr>
                                                <th><strong>Sno</strong></th>
                                                <th><strong>Date Of Request</strong></th>
                                                <th><strong>Date Of Action</strong></th>
                                                <th><strong>Transaction No</strong></th>
                                                <th><strong>Payment Mode</strong></th>
                                                <th><strong>Amount</strong></th>
                                                <th><strong>Admin Remark</strong></th>
                                                <th><strong>Receipt</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.data.length > 0 ? (
                                                data.data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><strong>{index + 1 + pageNo * limit}</strong></td>
                                                        <td>{item.dateOfRequest ? item.dateOfRequest.split('T')[0] : ''}</td>
                                                        <td>{item.dateofAction ? item.dateofAction.split('T')[0] : ''}</td>
                                                        <td>{item.hashCode ?? ''}</td>
                                                        <td>{item.paymentMode ?? ''}</td>
                                                        <td>{item.amount || ''}</td>
                                                        <td>{item.adminRemark || ''}</td>
                                                        <td>{item.receipt || ''}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="9" className="text-center">No records found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
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
                <Footer />
            </div>
        </div>
    );
};

export default TopUpManualHistory;
