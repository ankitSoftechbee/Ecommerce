import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDollarSign, faFileAlt, faPeopleGroup, faSuitcase } from "@fortawesome/free-solid-svg-icons"
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign"


const Sidebar = () => {

    return <>
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li><a className="" href="/" aria-expanded="false">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="IconlyHome"><g id="Home">
                                    <path id="Home_2" d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#130F26" />
                                </g></g>
                            </svg>
                        </div>
                        <span className="nav-text">Dashboard</span>
                    </a>
                    </li>

                    {/* MY profile */}
                    <li><a className="has-arrow " href="javascript:void()" aria-expanded="false">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.34933 14.8577C5.38553 14.8577 2 15.47 2 17.9174C2 20.3666 5.364 21 9.34933 21C13.3131 21 16.6987 20.3877 16.6987 17.9404C16.6987 15.4911 13.3347 14.8577 9.34933 14.8577Z" fill="#B9A8FF" />
                                <path opacity="0.4" d="M9.34935 12.5248C12.049 12.5248 14.2124 10.4062 14.2124 7.76241C14.2124 5.11865 12.049 3 9.34935 3C6.65072 3 4.48633 5.11865 4.48633 7.76241C4.48633 10.4062 6.65072 12.5248 9.34935 12.5248Z" fill="#763ed0" />
                                <path opacity="0.4" d="M16.1734 7.84875C16.1734 9.19507 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9395 4.05607C15.7233 5.13216 16.1734 6.44207 16.1734 7.84875Z" fill="#763ed0" />
                                <path d="M21.7791 15.1693C21.4317 14.444 20.5932 13.9466 19.3172 13.7023C18.7155 13.5586 17.0853 13.3545 15.5697 13.3832C15.5472 13.3861 15.5344 13.4014 15.5325 13.411C15.5295 13.4263 15.5364 13.4493 15.5658 13.4656C16.2663 13.8048 18.9738 15.2805 18.6333 18.3928C18.6186 18.5289 18.7292 18.6439 18.8671 18.6247C19.5335 18.5318 21.2478 18.1705 21.7791 17.0475C22.0736 16.4534 22.0736 15.7635 21.7791 15.1693Z" fill="#B9A8FF" />
                            </svg>
                        </div>

                        <span className="nav-text">Profile</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><a href="/myprofile">My Profile</a></li>
                            <li><a href="/change-password">Change Password</a></li>
                            <li><a href="/change-profile-pic">Change Profile Pic</a></li>
                            <li><a href="/crypto-wallet-change">Crypto Wallet Change</a></li>
                            <li><a href="/change-email">Change Email</a></li>
                            <li><a href="/support">Support</a></li>
                            <li><a href="/support-response">Support Response</a></li>
                        </ul>
                    </li>

                    {/* Wallet */}
                    <li><a className="has-arrow " href="javascript:void()" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faBitcoinSign} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Wallet TopUp</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><a href="/top-up-auto">Top Up(Auto)</a></li>
                            <li><a href="/top-up-auto-history">Top Up(Auto) History</a></li>
                        </ul>
                    </li>

                    {/* Income Reports */}
                    <li><a className="has-arrow " href="javascript:void()" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faFileAlt} size="4x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Income Reports</span>
                    </a>
                        <ul aria-expanded="false">
                            {/* <li><a href="ui-accordion.html">Accordion</a></li> */}

                        </ul>
                    </li>

                    {/* Package */}
                    <li><a href="widget-basic.html" className="" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faSuitcase} size="3x" style={{ width: '2rem' }} color="#F7931A" />
                        </div>
                        <span className="nav-text">Package</span>
                    </a>
                    </li>

                    {/* Withdraw */}
                    <li><a className="has-arrow " href="javascript:void()" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faDollarSign} size="3x" style={{ width: '2rem' }} color="#F7931A" />

                        </div>
                        <span className="nav-text">Withdraw</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><a href="/income-withdraw">Income Withdraw</a></li>
                            <li><a href="withdraw-history">Withdraw History</a></li>
                        </ul>
                    </li>

                    {/* Community */}
                    <li><a className="has-arrow " href="javascript:void()" aria-expanded="false">
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faPeopleGroup} size="3x" style={{ width: '2rem' }} color="#F7931A" />

                        </div>
                        <span className="nav-text">Community</span>
                    </a>
                        <ul aria-expanded="false">
                            <li><a href="table-bootstrap-basic.html">Direct Referral</a></li>
                            <li><a href="table-datatable-basic.html">Level Team</a></li>
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