const Header = () => {

    return <>
        <div class="nav-header">
            <a href="index.html" class="brand-logo">
                <div class="logo">
                    <svg class="logo-abbr" width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="22.6154" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="22.6154" y="9.15387" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="22.6154" y="18.3077" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="0.384583" y="18.3077" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="22.6154" y="27.4615" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="0.384583" y="27.4615" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                    </svg>
                    <svg class="brand-title" width="124" height="33" viewBox="0 0 132 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.65 2.516C14.758 2.516 17.474 3.132 19.798 4.364C22.122 5.596 23.914 7.332 25.174 9.572C26.462 11.784 27.106 14.346 27.106 17.258C27.106 20.142 26.462 22.704 25.174 24.944C23.914 27.184 22.108 28.92 19.756 30.152C17.432 31.384 14.73 32 11.65 32H0.604V2.516H11.65ZM11.188 25.784C13.904 25.784 16.018 25.042 17.53 23.558C19.042 22.074 19.798 19.974 19.798 17.258C19.798 14.542 19.042 12.428 17.53 10.916C16.018 9.404 13.904 8.648 11.188 8.648H7.786V25.784H11.188ZM41.7876 32.336C39.4916 32.336 37.4196 31.846 35.5716 30.866C33.7516 29.886 32.3096 28.486 31.2456 26.666C30.2096 24.846 29.6916 22.718 29.6916 20.282C29.6916 17.874 30.2236 15.76 31.2876 13.94C32.3516 12.092 33.8076 10.678 35.6556 9.698C37.5036 8.718 39.5756 8.228 41.8716 8.228C44.1676 8.228 46.2396 8.718 48.0876 9.698C49.9356 10.678 51.3916 12.092 52.4556 13.94C53.5196 15.76 54.0516 17.874 54.0516 20.282C54.0516 22.69 53.5056 24.818 52.4136 26.666C51.3496 28.486 49.8796 29.886 48.0036 30.866C46.1556 31.846 44.0836 32.336 41.7876 32.336ZM41.7876 26.12C43.1596 26.12 44.3216 25.616 45.2736 24.608C46.2536 23.6 46.7436 22.158 46.7436 20.282C46.7436 18.406 46.2676 16.964 45.3156 15.956C44.3916 14.948 43.2436 14.444 41.8716 14.444C40.4716 14.444 39.3096 14.948 38.3856 15.956C37.4616 16.936 36.9996 18.378 36.9996 20.282C36.9996 22.158 37.4476 23.6 38.3436 24.608C39.2676 25.616 40.4156 26.12 41.7876 26.12ZM65.0438 26.456H74.4518V32H57.8618V2.516H65.0438V26.456ZM76.4494 20.24C76.4494 17.832 76.8974 15.718 77.7934 13.898C78.7174 12.078 79.9634 10.678 81.5314 9.698C83.0994 8.718 84.8494 8.228 86.7814 8.228C88.4334 8.228 89.8754 8.564 91.1074 9.236C92.3674 9.908 93.3334 10.79 94.0054 11.882V8.564H101.187V32H94.0054V28.682C93.3054 29.774 92.3254 30.656 91.0654 31.328C89.8334 32 88.3914 32.336 86.7394 32.336C84.8354 32.336 83.0994 31.846 81.5314 30.866C79.9634 29.858 78.7174 28.444 77.7934 26.624C76.8974 24.776 76.4494 22.648 76.4494 20.24ZM94.0054 20.282C94.0054 18.49 93.5014 17.076 92.4934 16.04C91.5134 15.004 90.3094 14.486 88.8814 14.486C87.4534 14.486 86.2354 15.004 85.2274 16.04C84.2474 17.048 83.7574 18.448 83.7574 20.24C83.7574 22.032 84.2474 23.46 85.2274 24.524C86.2354 25.56 87.4534 26.078 88.8814 26.078C90.3094 26.078 91.5134 25.56 92.4934 24.524C93.5014 23.488 94.0054 22.074 94.0054 20.282ZM113.565 11.882C114.237 10.79 115.203 9.908 116.463 9.236C117.723 8.564 119.165 8.228 120.789 8.228C122.721 8.228 124.471 8.718 126.039 9.698C127.607 10.678 128.839 12.078 129.735 13.898C130.659 15.718 131.121 17.832 131.121 20.24C131.121 22.648 130.659 24.776 129.735 26.624C128.839 28.444 127.607 29.858 126.039 30.866C124.471 31.846 122.721 32.336 120.789 32.336C119.137 32.336 117.695 32.014 116.463 31.37C115.231 30.698 114.265 29.816 113.565 28.724V32H106.383V0.92H113.565V11.882ZM123.813 20.24C123.813 18.448 123.309 17.048 122.301 16.04C121.321 15.004 120.103 14.486 118.647 14.486C117.219 14.486 116.001 15.004 114.993 16.04C114.013 17.076 113.523 18.49 113.523 20.282C113.523 22.074 114.013 23.488 114.993 24.524C116.001 25.56 117.219 26.078 118.647 26.078C120.075 26.078 121.293 25.56 122.301 24.524C123.309 23.46 123.813 22.032 123.813 20.24Z" fill="white" />
                    </svg>

                </div>

            </a>
            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.7548 0.333313H20.7051C22.341 0.333313 23.6667 1.67014 23.6667 3.31994V7.30359C23.6667 8.95339 22.341 10.2902 20.7051 10.2902H16.7548C15.1188 10.2902 13.7932 8.95339 13.7932 7.30359V3.31994C13.7932 1.67014 15.1188 0.333313 16.7548 0.333313Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29492 0.333313H7.24522C8.8812 0.333313 10.2068 1.67014 10.2068 3.31994V7.30359C10.2068 8.95339 8.8812 10.2902 7.24522 10.2902H3.29492C1.65894 10.2902 0.333313 8.95339 0.333313 7.30359V3.31994C0.333313 1.67014 1.65894 0.333313 3.29492 0.333313ZM3.29492 13.7097H7.24522C8.8812 13.7097 10.2068 15.0466 10.2068 16.6964V20.68C10.2068 22.3287 8.8812 23.6666 7.24522 23.6666H3.29492C1.65894 23.6666 0.333313 22.3287 0.333313 20.68V16.6964C0.333313 15.0466 1.65894 13.7097 3.29492 13.7097ZM20.705 13.7097H16.7547C15.1188 13.7097 13.7931 15.0466 13.7931 16.6964V20.68C13.7931 22.3287 15.1188 23.6666 16.7547 23.6666H20.705C22.341 23.6666 23.6666 22.3287 23.6666 20.68V16.6964C23.6666 15.0466 22.341 13.7097 20.705 13.7097Z" fill="white" />
                    </svg>

                </div>
            </div>

        </div>

        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="dashboard_bar">
                                Dashboard
                            </div>
                        </div>
                        <ul class="navbar-nav header-right">
                            <li class="nav-item d-flex align-items-start">
                                <div class="input-group search-area">
                                    <input type="text" class="form-control" id="search" placeholder="Search here..." />
                                    <span class="input-group-text"><a href="javascript:void(0)"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="1" d="M16.6751 19.4916C16.2194 19.036 16.2194 18.2973 16.6751 17.8417C17.1307 17.3861 17.8694 17.3861 18.325 17.8417L22.9916 22.5084C23.4473 22.964 23.4473 23.7027 22.9916 24.1583C22.536 24.6139 21.7973 24.6139 21.3417 24.1583L16.6751 19.4916Z" fill="white" />
                                        <path d="M12.8333 18.6667C16.055 18.6667 18.6667 16.055 18.6667 12.8334C18.6667 9.61169 16.055 7.00002 12.8333 7.00002C9.61166 7.00002 6.99999 9.61169 6.99999 12.8334C6.99999 16.055 9.61166 18.6667 12.8333 18.6667ZM12.8333 21C8.323 21 4.66666 17.3437 4.66666 12.8334C4.66666 8.32303 8.323 4.66669 12.8333 4.66669C17.3436 4.66669 21 8.32303 21 12.8334C21 17.3437 17.3436 21 12.8333 21Z" fill="white" />
                                    </svg>
                                    </a></span>
                                </div>
                            </li>
                        </ul>
                        <div class="dropdown header-profile2 ">
                            <ul class="navbar-nav header-right me-sm-4">
                                <li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8333 11H17.5833C18.5498 11 19.3333 11.7835 19.3333 12.75C19.3333 13.7165 18.5498 14.5 17.5833 14.5H2.41666C1.45016 14.5 0.666656 13.7165 0.666656 12.75C0.666656 11.7835 1.45016 11 2.41666 11H4.16666L4.81798 5.13812C5.11136 2.49763 7.34325 0.5 9.99999 0.5C12.6567 0.5 14.8886 2.49763 15.182 5.13812L15.8333 11Z" fill="#B9A8FF" />
                                            <path opacity="0.3" d="M12.3333 18C12.3333 16.7114 11.2887 15.6667 9.99999 15.6667C8.71133 15.6667 7.66666 16.7114 7.66666 18C7.66666 19.2887 8.71133 20.3334 9.99999 20.3334C11.2887 20.3334 12.3333 19.2887 12.3333 18Z" fill="#B9A8FF" />
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div id="DZ_W_Notification1" class="widget-media dz-scroll p-3" style={{ height: "380px" }}>
                                            <ul class="timeline">
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2">
                                                            <img alt="image" width="50" src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1"><a href="javascript:voiud(0)"> Dr sultads Send you Photo</a></h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-info">
                                                            KG
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1"><a href="javascript:voiud(0)">Resport created successfully</a></h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-success">
                                                            <i class="fa fa-home"></i>
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1"><a href="javascript:voiud(0)">Reminder : Treatment Time!</a></h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2">
                                                            <img alt="image" width="50" src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1"><a href="javascript:voiud(0)">Dr sultads Send you Photo</a></h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-danger">
                                                            KG
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1"><a href="javascript:voiud(0)"> Resport created successfully </a></h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-primary">
                                                            <i class="fa fa-home"></i>
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1"><a href="javascript:voiud(0)"> Reminder : Treatment Time! </a></h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a class="all-notification" href="javascript:void(0);">See all notifications <i class="ti-arrow-end"></i></a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link bell-link " href="javascript:void(0);">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.00001 2.33331H21C21.6443 2.33331 22.1667 2.85565 22.1667 3.49998V15.1666C22.1667 15.811 21.6443 16.3333 21 16.3333H7.00001C6.35568 16.3333 5.83334 15.811 5.83334 15.1666V3.49998C5.83334 2.85565 6.35568 2.33331 7.00001 2.33331ZM16.1 4.66665C15.3489 4.66665 14.4705 5.51814 14 6.06665C13.5295 5.51814 12.6511 4.66665 11.9 4.66665C10.5705 4.66665 9.80001 5.70366 9.80001 7.0235C9.80001 8.4856 11.2 10.0333 14 11.6666C16.8 10.0333 18.2 8.51665 18.2 7.11665C18.2 5.79681 17.4295 4.66665 16.1 4.66665Z" fill="#B9A8FF" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.42487 7.66798L14 14.5833L23.5751 7.66798C23.8363 7.47935 24.2009 7.53816 24.3896 7.79933C24.4614 7.89874 24.5 8.01825 24.5 8.14087V19.8333C24.5 21.122 23.4553 22.1667 22.1667 22.1667H5.83333C4.54467 22.1667 3.5 21.122 3.5 19.8333V8.14087C3.5 7.81871 3.76117 7.55754 4.08333 7.55754C4.20596 7.55754 4.32546 7.59618 4.42487 7.66798Z" fill="#B9A8FF" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link " href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 19.7699V10.8881H24.5V19.8411C24.5 23.5032 22.1948 25.7549 18.5066 25.7549H9.48189C5.82821 25.7549 3.5 23.4566 3.5 19.7699ZM9.28595 16.8999C8.75576 16.9244 8.31778 16.5032 8.29473 15.9677C8.29473 15.4311 8.70966 14.9877 9.23985 14.9632C9.75851 14.9632 10.185 15.3727 10.1965 15.8966C10.2195 16.4344 9.80461 16.8777 9.28595 16.8999ZM14.0231 16.8999C13.4929 16.9244 13.0549 16.5032 13.0318 15.9677C13.0318 15.4311 13.4468 14.9877 13.9769 14.9632C14.4956 14.9632 14.9221 15.3727 14.9336 15.8966C14.9566 16.4344 14.5417 16.8777 14.0231 16.8999ZM18.7256 21.1932C18.1954 21.1816 17.7689 20.7382 17.7689 20.2016C17.7574 19.6649 18.1839 19.2227 18.714 19.2111H18.7256C19.2673 19.2111 19.7053 19.6544 19.7053 20.2016C19.7053 20.7499 19.2673 21.1932 18.7256 21.1932ZM13.0318 20.2016C13.0549 20.7382 13.4929 21.1594 14.0231 21.1349C14.5417 21.1127 14.9566 20.6694 14.9336 20.1327C14.9221 19.6077 14.4956 19.1982 13.9769 19.1982C13.4468 19.2227 13.0318 19.6649 13.0318 20.2016ZM8.28321 20.2016C8.30626 20.7382 8.74424 21.1594 9.27442 21.1349C9.79308 21.1127 10.208 20.6694 10.185 20.1327C10.1734 19.6077 9.74698 19.1982 9.22832 19.1982C8.69813 19.2227 8.28321 19.6649 8.28321 20.2016ZM17.7805 15.9561C17.7805 15.4194 18.1954 14.9877 18.7256 14.9761C19.2442 14.9761 19.6592 15.3949 19.6822 15.9094C19.6937 16.4461 19.2788 16.8894 18.7602 16.8999C18.23 16.9116 17.792 16.5032 17.7805 15.9677V15.9561Z" fill="#B9A8FF" />
                                            <path opacity="0.4" d="M3.50391 10.888C3.51889 10.2031 3.57652 8.84396 3.68486 8.40646C4.2381 5.94596 6.1168 4.38262 8.80232 4.15979H19.1986C21.861 4.39429 23.7628 5.96812 24.316 8.40646C24.4232 8.83229 24.4809 10.202 24.4958 10.888H3.50391Z" fill="#B9A8FF" />
                                            <path d="M9.689 7.77657C10.1961 7.77657 10.5765 7.39274 10.5765 6.87824V3.32107C10.5765 2.80657 10.1961 2.42157 9.689 2.42157C9.18187 2.42157 8.80151 2.80657 8.80151 3.32107V6.87824C8.80151 7.39274 9.18187 7.77657 9.689 7.77657Z" fill="#B9A8FF" />
                                            <path d="M18.3108 7.77657C18.8064 7.77657 19.1983 7.39274 19.1983 6.87824V3.32107C19.1983 2.80657 18.8064 2.42157 18.3108 2.42157C17.8036 2.42157 17.4233 2.80657 17.4233 3.32107V6.87824C17.4233 7.39274 17.8036 7.77657 18.3108 7.77657Z" fill="#B9A8FF" />
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div id="DZ_W_TimeLine02" class="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370">
                                            <ul class="timeline">
                                                <li>
                                                    <div class="timeline-badge primary"></div>
                                                    <a class="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>10 minutes ago</span>
                                                        <h6 class="mb-0">Youtube, a video-sharing website, goes live <strong class="text-primary">$500</strong>.</h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="timeline-badge info">
                                                    </div>
                                                    <a class="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>20 minutes ago</span>
                                                        <h6 class="mb-0">New order placed <strong class="text-info">#XF-2356.</strong></h6>
                                                        <p class="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="timeline-badge danger">
                                                    </div>
                                                    <a class="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>30 minutes ago</span>
                                                        <h6 class="mb-0">john just buy your product <strong class="text-warning">Sell $250</strong></h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="timeline-badge success">
                                                    </div>
                                                    <a class="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>15 minutes ago</span>
                                                        <h6 class="mb-0">StumbleUpon is acquired by eBay. </h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="timeline-badge warning">
                                                    </div>
                                                    <a class="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>20 minutes ago</span>
                                                        <h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div class="timeline-badge dark">
                                                    </div>
                                                    <a class="timeline-panel text-muted" href="javascript:void(0);">
                                                        <span>20 minutes ago</span>
                                                        <h6 class="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a class="nav-link user-profile" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                                <div class="header-info2 d-flex align-items-center">
                                    <img src="images/placeholder.jpg" alt="" />
                                    <div class="d-flex align-items-center sidebar-info">
                                        <div class="user-info">
                                            <span class="font-w500 d-block  fs-5 text-white">Adam Joe</span>
                                            <small class="text-end font-w400">Admin</small>
                                        </div>
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8334 1.08331L7.00002 6.91665L1.16669 1.08331" stroke="#FFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>

                                </div>
                            </a>
                            <div class="dropdown-menu profile dropdown-menu-end">
                                <a href="app-profile.html" class="dropdown-item ai-icon ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <span class="ms-2">Profile </span>
                                </a>
                                <a href="email-inbox.html" class="dropdown-item ai-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    <span class="ms-2">Inbox </span>
                                </a>
                                <a href="page-login.html" class="dropdown-item ai-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                    <span class="ms-2">Logout </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </>
}

export default Header
