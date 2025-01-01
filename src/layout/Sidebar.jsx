import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faDollarSign, faFileAlt, faMoneyBillTransfer, faPeopleGroup, faShare, faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign"
import { faRavelry } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"


const Sidebar = () => {

    return <>
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li><Link className="" to="/user" aria-expanded="false">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="IconlyHome"><g id="Home">
                                    <path id="Home_2" d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#130F26" />
                                </g></g>
                            </svg>
                        </div>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                    </li>

                    {/* MY profile */}
                    <li><a className="has-arrow" aria-expanded="false">
                    <div className="menu-icon">
                            <FontAwesomeIcon icon={faCog} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>

                        <span className="nav-text">Setting</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link reloadDocument to="/user/myprofile">My Profile</Link></li>
                            <li><Link to="/user/change-password">Change Password</Link></li>
                            <li><Link to="/user/change-profile-pic">Change Profile Pic</Link></li>
                            <li><Link to="/user/crypto-wallet-change">Crypto Wallet Change</Link></li>
                            <li><Link to="/user/change-transaction-password">Change Transaction Password</Link></li>
                            <li><Link to="/user/support">Support</Link></li>
                            <li><Link to="/user/support-response">Support Response</Link></li>
                        </ul>
                    </li>

                    {/* Wallet */}
                    <li><a className="has-arrow " href="#" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faBitcoinSign} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Wallet TopUp</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/top-up-auto">Top Up(Auto)</Link></li>
                            <li><Link to="/user/top-up-auto-history">Top Up(Auto) History</Link></li>
                            <li><Link to="/user/top-up-manual">Top Up(Manual)</Link></li>
                            <li><Link to="/user/top-up-manual-history">Top Up(Manual) History</Link></li>
                            <li><Link to="/user/fund-summary">Fund Summary</Link></li>

                        </ul>
                    </li>

                    {/* Package */}
                    <li><a href="#" className="has-arrow" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faSuitcase} size="3x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Bot</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/staking-package">Bot Subscription</Link></li>
                            <li><Link to="/user/package-history">Subscription Details</Link></li>
                        </ul>
                    </li>

                    {/* Transfer */}

                    {/* <li><a className="has-arrow " href="#" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faShare} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Transfer</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/p2p-transfer">P2P Transfer</Link></li>
                            <li><Link to="/user/p2p-transfer-history">P2P Transfer History</Link></li>
                            <li><Link to="/user/income-to-fund-transfer">Income to Fund</Link></li>
                            <li><Link to="/user/income-to-fund-transfer-history">Income to Fund History</Link></li>

                        </ul>
                    </li> */}

                    {/* Income Reports */}
                    <li><a className="has-arrow " href="#" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faFileAlt} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Income Reports</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/income/report/trading-profit">Trading Profit</Link></li>
                            <li><Link to="/user/income/report/trading-profit-income">Trading Profit Income</Link></li>
                            <li><Link to="/user/income/report/direct-income">Direct Income</Link></li>
                            <li><Link to="/user/income/report/level-income">Level Income</Link></li>
                            <li><Link to="/user/income/report/reward-income">Reward Income</Link></li>
                            <li><Link to="/user/income/report/royalty-income">Royalty Income</Link></li>
                            <li><Link to="/user/income/report/club-income">Club Income</Link></li>

                        </ul>
                    </li>

                    {/* Club and rewards */}
                    <li><a className="has-arrow " href="#" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faRavelry} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Club And Rewards</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/reward-report">Reward Report</Link></li>
                            <li><Link to="/user/club-report">Club Report</Link></li>
                        </ul>
                    </li>


                    {/* Withdraw */}
                    <li><a className="has-arrow " href="#" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faBitcoinSign} size="3x" style={{ width: '2rem' }} color="#F7931A" />

                        </div>
                        <span className="nav-text">Financial</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/income-withdraw">Income Financial</Link></li>
                            <li><Link to="/user/withdraw-history">Financial History</Link></li>
                            <li><Link to="/user/account-summary">Account Summary</Link></li>
                        </ul>
                    </li>

                    {/* Community */}
                    <li><a className="has-arrow " href="#" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faPeopleGroup} size="3x" style={{ width: '2rem' }} color="#F7931A" />

                        </div>
                        <span className="nav-text">Community</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><Link to="/user/community/direct-referral">Direct Referral</Link></li>
                            <li><Link to="/user/community/level-team">Level Team</Link></li>
                        </ul>
                    </li>
                </ul>

                <div className="copyright">
                    <p className="fs-14"><strong>GMFX</strong> © 2022 All Rights Reserved</p>
                    <p className="fs-14">Made with <span className="heart"></span></p>
                </div>
            </div>
        </div>
    </>
}

export default Sidebar