import { faTeamspeak } from "@fortawesome/free-brands-svg-icons"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const CoinPrice = () => {

    return <div className="card Invoices mb-5 mt-8">
        <div className="card-body loadmore-content recent-activity-wrapper-invoice dz-scroll px-3  py-2" id="RecentActivityContent">
            <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                <span className=" me-3">
                    {/* <img src="https://png.pngtree.com/png-vector/20200902/ourmid/pngtree-golden-dollar-coin-money-png-image_2337468.jpg" alt="" width="50" /> */}
                    <CurrencyExchangeIcon sx={{ color: 'yellow', height: '40px', width: '40px' }} />
                </span>
                <div>
                    <h6 className="font-w500 fs-16 mb-0"><a href="app-profile.html">Coin Price</a></h6>
                </div>
                <div className="price ms-auto">
                    <a href="#">
                        $776
                    </a>
                </div>
            </div>
            <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                <span className=" me-3">
                    {/* <img src="https://png.pngtree.com/png-vector/20200902/ourmid/pngtree-golden-dollar-coin-money-png-image_2337468.jpg" alt="" width="50" /> */}
                    <CurrencyExchangeIcon sx={{ color: 'yellow', height: '40px', width: '40px' }} />
                </span>
                <div>
                    <h6 className="font-w500 fs-16 mb-0"><a href="app-profile.html">Active Direct</a></h6>
                </div>
                <div className="price ms-auto">
                    <a href="#">
                        $776
                    </a>
                </div>
            </div>
            <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                <span className=" me-3">
                    {/* <img src="https://png.pngtree.com/png-vector/20200902/ourmid/pngtree-golden-dollar-coin-money-png-image_2337468.jpg" alt="" width="50" style={{background:'none'}} /> */}
                    <CurrencyExchangeIcon sx={{ color: 'yellow', height: '40px', width: '40px' }} />
                </span>
                <div>
                    <h6 className="font-w500 fs-16 mb-0"><a href="app-profile.html">InActive Direct</a></h6>
                </div>
                <div className="price ms-auto">
                    <a href="#">
                        $776
                    </a>
                </div>
            </div>
            <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                <span className=" me-3">
                    {/* <img src="https://png.pngtree.com/png-vector/20200902/ourmid/pngtree-golden-dollar-coin-money-png-image_2337468.jpg" alt="" width="50" /> */}
                    <CurrencyExchangeIcon sx={{ color: 'yellow', height: '40px', width: '40px' }} />
                </span>
                <div>
                    <h6 className="font-w500 fs-16 mb-0"><a href="app-profile.html">Total Right Business</a></h6>
                </div>
                <div className="price ms-auto">
                    <a href="#">
                        $776
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default CoinPrice