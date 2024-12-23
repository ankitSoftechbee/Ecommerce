import Footer from "../../layout/Footer"
import { USDTContract } from "../../lib/constant";
import Web3 from "web3";
import axios from "axios";
import { packageAPIConfig, walletAPIConfig } from "../../api/apiConfig";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { isNonNegativeNumber } from "../../lib/common";

const TopUpAuto = () => {
    const [fileImg, setFileImg] = useState(null);
    const [loader, setLoader] = useState(false);
    const [depositData, setDepositData] = useState({
        hashCode: "",
        walletAddress: "122ddwf5456rgfg1212",
    });
    const [totalAmt, setTotalamt] = useState({});

    useEffect(() => {
        getAmount();
        getMetaMaskWallet();
    }, []);

    const getAmount = async () => {
        // const _res = await services.requestApi.getAmount();
        // if ("fundBalance" in _res) {
        //     setTotalamt(_res);
        // } else {
        //     setTotalamt({});
        //     toastr.error("Something went wrong, try again", "Error", toastrOption);
        // }
        axios
            .get(packageAPIConfig.checkWalletBalance, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem("access_token"),
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    // setFundBalance(response.data.fundBalance);
                    setTotalamt(response.data)
                }
            })
            .catch(() => {
                toast.error('Something went wrong');
            });
    };
    //for usdt
    const getMetaMaskWallet = async () => {
        try {
            if (!window.ethereum) {
                console.log("Use Metamask!");
                toast.error("Metamask not installed");
                return;
            }

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            if (accounts !== 0) {
                const web3 = new Web3(window.ethereum);
                const usdtContract = new web3.eth.Contract(
                    USDTContract.USDT_ABI_TOKEN_BUSD,
                    USDTContract.USDT_WALLET_ADDRESS
                );

                const usdtBalance = await usdtContract.methods
                    ?.balanceOf(accounts[0])
                    ?.call();
                const cloneData = {
                    ...depositData,
                    walletAddress: accounts[0],
                    balance: usdtBalance.toString() / 1e18,
                };
                setDepositData(cloneData);
                toast.success("Metamask connected");
            } else {
                toast.error(
                    "Could not find an authorized account");
            }
        } catch (error) {
            console.log("User denied account access or other error:", error);
            toast.error(
                "User denied account access or other error");
        }
    };

    const onHandleChange = (e) => {
        const name = e?.target?.name ?? "";
        const value = isNonNegativeNumber(+e?.target?.value)
            ? e?.target?.value
            : "";
        if (+value <= +depositData?.balance) {
            const cloneData = { ...depositData, [name]: value, coinAmount: value };
            setDepositData(cloneData);
        } else {
            toast.error(
                "Amount must be less than or equal to your balance"
            );
        }
    };

    const onSubmit = async () => {
        if (
            depositData?.amount
            //   depositData?.walletAddress &&
            //   depositData?.code
        ) {
            setLoader(true);
            if (!window.ethereum) {
                console.log("Use Metamask!");
                toast.error("Metamask not installed");
                return;
            }
            let contract;
            let tokenAddress;
            const recipientAddress = "0x6632D310c45B1F7fB87984Ea2196C362f7783A51";
            const ownerAddress = depositData?.walletAddress ?? "";
            const web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(
                USDTContract.USDT_ABI_TOKEN_BUSD,
                USDTContract.USDT_WALLET_ADDRESS
            );
            tokenAddress = USDTContract.USDT_WALLET_ADDRESS;
            const amount = depositData?.amount * 1e18;
            const gasPrice = await web3.eth.getGasPrice();
            const gas = await contract.methods
                .transfer(recipientAddress, amount)
                .estimateGas({ from: ownerAddress, value: 0, gasPrice });
            const txReceipt = await contract.methods
                .transfer(recipientAddress, amount)
                .send({ from: ownerAddress, value: 0, gasPrice, gas });
            if (txReceipt?.transactionHash) {
                const body = {
                    walletAddress: depositData?.walletAddress,
                    hashCode: txReceipt?.transactionHash,
                    amount: depositData?.amount,
                    coinAmount: depositData?.coinAmount,
                };
                // const _res = await services.requestApi.saveDespositUSDT(body);
                // if (_res > 0) {
                //   toastr.success("Amount added Successfully", "Success", toastrOption);
                //   setLoader(false);
                //   setDepositData((prev) => ({ ...prev, amount: "" }));
                // } else {
                //   toastr.error(
                //     "Something Went Wrong, Try Again",
                //     "Error",
                //     toastrOption
                //   );
                // //   setLoader(false);
                // }.
                axios.post(walletAPIConfig.topUpAuto, body, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + localStorage.getItem("access_token"),
                    }
                }).then((response) => {
                    if (response.status === 200) {
                        toast.success("Amount added Successfully");
                        //   setLoader(false);
                        setDepositData((prev) => ({ ...prev, amount: "" }));
                    } else {
                        toast.error("Something Went Wrong, Try Again");
                    }
                }).catch((error) => {
                    console.log(error)
                    toast.error("Something Went Wrong, Try Again");
                })
            } else {
                toast.error("Transaction failed");
            }
        } else {
            toast.error("Amount must be less than or euqal to zero", "Error");
        }
    };

    return <div className="content-body">

        <div className="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Wallet / Top Up</a></li>
                </ol>
            </div>
            <h1 className="text-center text-xl m-2">Available Amount : ${totalAmt?.fundBalance ?? "0"}</h1>
            <div class="card">
                <div class="card-body">
                    <div class="basic-form">
                        <div class="mb-3">
                            <label class="mb-1"><strong>Wallet Address</strong></label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={depositData?.walletAddress ?? ""}
                                onChange={onHandleChange}
                                autoComplete="off"
                                readOnly
                            />
                        </div>

                        <div class="mb-3">
                            <label class="mb-1"><strong>Your Balance</strong></label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={depositData?.balance ?? ""}
                                onChange={onHandleChange}
                                autoComplete="off"
                                readOnly
                            />
                        </div>
                        <div class="mb-3">
                            <label class="mb-1"><strong>Amount</strong></label>
                            <input
                                type="text"
                                name="amount"
                                className="form-control"
                                value={depositData?.amount ?? ""}
                                onChange={onHandleChange}
                                autoComplete="off"
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => onSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

    </div>
}

export default TopUpAuto