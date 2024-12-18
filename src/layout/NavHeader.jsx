const NavHeader = () => {

    return <>
        <div className="nav-header">
            <a href="index.html" className="brand-logo">
                <div className="logo">
                    {/* <svg className="logo-abbr" width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="22.6154" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="22.6154" y="9.15387" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="22.6154" y="18.3077" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="0.384583" y="18.3077" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="22.6154" y="27.4615" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                        <rect x="0.384583" y="27.4615" width="19.6154" height="6.53846" rx="3.26923" fill="white" />
                    </svg>
                    <svg className="brand-title" width="124" height="33" viewBox="0 0 132 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.65 2.516C14.758 2.516 17.474 3.132 19.798 4.364C22.122 5.596 23.914 7.332 25.174 9.572C26.462 11.784 27.106 14.346 27.106 17.258C27.106 20.142 26.462 22.704 25.174 24.944C23.914 27.184 22.108 28.92 19.756 30.152C17.432 31.384 14.73 32 11.65 32H0.604V2.516H11.65ZM11.188 25.784C13.904 25.784 16.018 25.042 17.53 23.558C19.042 22.074 19.798 19.974 19.798 17.258C19.798 14.542 19.042 12.428 17.53 10.916C16.018 9.404 13.904 8.648 11.188 8.648H7.786V25.784H11.188ZM41.7876 32.336C39.4916 32.336 37.4196 31.846 35.5716 30.866C33.7516 29.886 32.3096 28.486 31.2456 26.666C30.2096 24.846 29.6916 22.718 29.6916 20.282C29.6916 17.874 30.2236 15.76 31.2876 13.94C32.3516 12.092 33.8076 10.678 35.6556 9.698C37.5036 8.718 39.5756 8.228 41.8716 8.228C44.1676 8.228 46.2396 8.718 48.0876 9.698C49.9356 10.678 51.3916 12.092 52.4556 13.94C53.5196 15.76 54.0516 17.874 54.0516 20.282C54.0516 22.69 53.5056 24.818 52.4136 26.666C51.3496 28.486 49.8796 29.886 48.0036 30.866C46.1556 31.846 44.0836 32.336 41.7876 32.336ZM41.7876 26.12C43.1596 26.12 44.3216 25.616 45.2736 24.608C46.2536 23.6 46.7436 22.158 46.7436 20.282C46.7436 18.406 46.2676 16.964 45.3156 15.956C44.3916 14.948 43.2436 14.444 41.8716 14.444C40.4716 14.444 39.3096 14.948 38.3856 15.956C37.4616 16.936 36.9996 18.378 36.9996 20.282C36.9996 22.158 37.4476 23.6 38.3436 24.608C39.2676 25.616 40.4156 26.12 41.7876 26.12ZM65.0438 26.456H74.4518V32H57.8618V2.516H65.0438V26.456ZM76.4494 20.24C76.4494 17.832 76.8974 15.718 77.7934 13.898C78.7174 12.078 79.9634 10.678 81.5314 9.698C83.0994 8.718 84.8494 8.228 86.7814 8.228C88.4334 8.228 89.8754 8.564 91.1074 9.236C92.3674 9.908 93.3334 10.79 94.0054 11.882V8.564H101.187V32H94.0054V28.682C93.3054 29.774 92.3254 30.656 91.0654 31.328C89.8334 32 88.3914 32.336 86.7394 32.336C84.8354 32.336 83.0994 31.846 81.5314 30.866C79.9634 29.858 78.7174 28.444 77.7934 26.624C76.8974 24.776 76.4494 22.648 76.4494 20.24ZM94.0054 20.282C94.0054 18.49 93.5014 17.076 92.4934 16.04C91.5134 15.004 90.3094 14.486 88.8814 14.486C87.4534 14.486 86.2354 15.004 85.2274 16.04C84.2474 17.048 83.7574 18.448 83.7574 20.24C83.7574 22.032 84.2474 23.46 85.2274 24.524C86.2354 25.56 87.4534 26.078 88.8814 26.078C90.3094 26.078 91.5134 25.56 92.4934 24.524C93.5014 23.488 94.0054 22.074 94.0054 20.282ZM113.565 11.882C114.237 10.79 115.203 9.908 116.463 9.236C117.723 8.564 119.165 8.228 120.789 8.228C122.721 8.228 124.471 8.718 126.039 9.698C127.607 10.678 128.839 12.078 129.735 13.898C130.659 15.718 131.121 17.832 131.121 20.24C131.121 22.648 130.659 24.776 129.735 26.624C128.839 28.444 127.607 29.858 126.039 30.866C124.471 31.846 122.721 32.336 120.789 32.336C119.137 32.336 117.695 32.014 116.463 31.37C115.231 30.698 114.265 29.816 113.565 28.724V32H106.383V0.92H113.565V11.882ZM123.813 20.24C123.813 18.448 123.309 17.048 122.301 16.04C121.321 15.004 120.103 14.486 118.647 14.486C117.219 14.486 116.001 15.004 114.993 16.04C114.013 17.076 113.523 18.49 113.523 20.282C113.523 22.074 114.013 23.488 114.993 24.524C116.001 25.56 117.219 26.078 118.647 26.078C120.075 26.078 121.293 25.56 122.301 24.524C123.309 23.46 123.813 22.032 123.813 20.24Z" fill="white" />
                    </svg> */}
                    <img src="src/assets/images/logo.png"/>

                </div>

            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.7548 0.333313H20.7051C22.341 0.333313 23.6667 1.67014 23.6667 3.31994V7.30359C23.6667 8.95339 22.341 10.2902 20.7051 10.2902H16.7548C15.1188 10.2902 13.7932 8.95339 13.7932 7.30359V3.31994C13.7932 1.67014 15.1188 0.333313 16.7548 0.333313Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29492 0.333313H7.24522C8.8812 0.333313 10.2068 1.67014 10.2068 3.31994V7.30359C10.2068 8.95339 8.8812 10.2902 7.24522 10.2902H3.29492C1.65894 10.2902 0.333313 8.95339 0.333313 7.30359V3.31994C0.333313 1.67014 1.65894 0.333313 3.29492 0.333313ZM3.29492 13.7097H7.24522C8.8812 13.7097 10.2068 15.0466 10.2068 16.6964V20.68C10.2068 22.3287 8.8812 23.6666 7.24522 23.6666H3.29492C1.65894 23.6666 0.333313 22.3287 0.333313 20.68V16.6964C0.333313 15.0466 1.65894 13.7097 3.29492 13.7097ZM20.705 13.7097H16.7547C15.1188 13.7097 13.7931 15.0466 13.7931 16.6964V20.68C13.7931 22.3287 15.1188 23.6666 16.7547 23.6666H20.705C22.341 23.6666 23.6666 22.3287 23.6666 20.68V16.6964C23.6666 15.0466 22.341 13.7097 20.705 13.7097Z" fill="white" />
                    </svg>

                </div>
            </div>

        </div>
    </>
}

export default NavHeader
