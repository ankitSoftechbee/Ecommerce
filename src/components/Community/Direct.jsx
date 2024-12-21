import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import axios from "axios";
import { communityAPIConfig, packageAPIConfig } from "../../api/apiConfig";
import { toast } from "react-toastify";
import { TablePagination } from "@mui/material";

const Direct = () => {
    const [data, setData] = useState('');
    const [limit, setLimit] = useState(10);
    const [pageNo, setPageNo] = useState(0);
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')

    useEffect(() => {
        axios
            .get(communityAPIConfig.directList, {
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
                            <a href="javascript:void(0)">Community / Direct</a>
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
                                                <th><strong>Username</strong></th>
                                                <th><strong>Name</strong></th>
                                                <th><strong>Mobile</strong></th>
                                                <th><strong>Date of Joining</strong></th>
                                                <th><strong>Ref ID</strong></th>
                                                <th><strong>Ref Name</strong></th>
                                                <th><strong>Side</strong></th>
                                                <th><strong>Status</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.data.length > 0 ? (
                                                data.data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><strong>{index + 1 + pageNo * limit}</strong></td>
                                                        <td>{item?.username || ''}</td>
                                                        <td>{item?.name || ''}</td>
                                                        <td>{item?.mobile || ''}</td>
                                                        <td>{item?.dateofjoin.split('T')[0] || ''}</td>
                                                        <td>{item?.reffid || ''}</td>
                                                        <td>{item?.reffname || ''}</td>
                                                        <td>{item?.onside || ''}</td>
                                                        <td className="text-green-400">{item?.status || ""}</td>
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

export default Direct;
