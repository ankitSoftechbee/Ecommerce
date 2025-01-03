import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import axios from "axios";
import { packageAPIConfig } from "../../api/apiConfig";
import { toast } from "react-toastify";
import { TablePagination } from "@mui/material";

const PackageHistory = () => {
    const [data, setData] = useState('');
    const [limit, setLimit] = useState(10);
    const [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        axios
            .get(packageAPIConfig.investHistory, {
                params: {
                    PageNumber: pageNo + 1,
                    PageSize: limit,
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
    }, [pageNo, limit]);

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
                            <a href="javascript:void(0)">Subscription History</a>
                        </li>
                    </ol>
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
                                                <th><strong>Date</strong></th>
                                                <th><strong>Pack Type</strong></th>
                                                <th><strong>Amount</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.data.length > 0 ? (
                                                data.data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><strong>{index + 1 + pageNo * limit}</strong></td>
                                                        <td>{item?.dor.split('T')[0] || ''}</td>
                                                        <td>{item?.packType || ''}</td>
                                                        <td className="text-green-400">{item?.amount || "0"} USDT</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="text-center">No records found</td>
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

export default PackageHistory;
