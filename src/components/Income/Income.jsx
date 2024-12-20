import { useLocation } from "react-router-dom";
import Footer from "../../layout/Footer";
import IncomeTable from "./IncomeTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { incomeAPIConfig } from "../../api/apiConfig";

const Income = () => {
    const location = useLocation();
    const [keyword, setKeyword] = useState('')
    const [pageNo, setPageNo] = useState(0)
    const [limit, setLimit] = useState(10)
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [data, setData] = useState('')
    const [heading, setHeading] = useState('')

    useEffect(() => {
        if (location) {
            // Perform actions based on the stored keyword
            switch (location.pathname) {
                case "/income/report/trading-profit":
                    setKeyword('ROI')
                    setHeading('Trading Profit')
                    break;
                case "/income/report/trading-profit-income":
                    setKeyword('ROILEVEL')
                    setHeading('Trading Profit Income')
                    break;
                case "/income/report/direct-income":
                    setKeyword('DIRECT')
                    setHeading('Direct Income')
                    break;
                case "/income/report/level-income":
                    setKeyword('LEVEL')
                    setHeading('Level Income')
                    break;
                case "/income/report/reward-income":
                    setKeyword('REWARD')
                    setHeading('Reward Income')
                    break;
                case "/income/report/royalty-income":
                    setKeyword('ROYALTY')
                    setHeading('Royalty Income')
                    break;
                case "/income/report/club-income":
                    setKeyword('CLUB')
                    setHeading('Club Income')
                    break;
                default:
                    break;
            }
        }
    }, [keyword]);


    useEffect(() => {
        if (keyword) {
            axios
                .get(incomeAPIConfig.incomeList, {
                    params: {
                        PageNumber: pageNo + 1,
                        PageSize: limit,
                        Keyword: keyword,
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
                        console.log("API Response:", response.data);
                        setData(response.data); // Update state with the response
                    }
                })
                .catch((error) => {
                    console.error("API Error:", error);
                });

        }
    }, [keyword, pageNo, limit, fromDate, toDate]);

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
                            <a href="javascript:void(0)">Report / {heading}</a>
                        </li>
                    </ol>
                </div>

                <IncomeTable pageNo={pageNo} setFromDate={setFromDate} limit={limit} fromDate={fromDate} toDate={toDate} setToDate={setToDate} data={data} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
                <Footer />
            </div>
        </div>
    );
};

export default Income;
