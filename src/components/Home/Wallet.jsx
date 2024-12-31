import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';
import { faArrowDown, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Wallet = (props) => {
    const { data } = props;

    const content = [
        { id: 'fundWallet', name: 'Fund Wallet Balance', icon: faArrowDown },
        { id: 'earningWallet', name: 'Account Balance', icon: faBriefcase },
        { id: 'totalInvestment', name: 'Total Investment', icon: faBriefcase },
        { id: 'totalEarnings', name: 'Total Earnings', icon: faBriefcase },
        { id: 'todayEarnings', name: 'Today Earnings', icon: faBriefcase },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h4 className="mt-8 px-1 fs-18 font-w600">Wallet</h4>
            <Slider {...settings} className="w-full mt-2 px-1">
                {content.map((item, index) => {
                    const price = data[item.id] !== undefined ? data[item.id] : 'N/A';
                    return (
                        <div className="px-1" key={index} style={{ border: '2px solid yellow' }}>
                            <div className="card Expense overflow-hidden">
                                <div className="card-body p-4 p-lg-3 p-xl-4">
                                    <div className="students1 one d-flex align-items-center justify-content-between">
                                        <div className="content">
                                            <h2 className="mb-0">{price} USDT</h2>
                                            <span className="mb-2 fs-14">{item.name}</span>
                                        </div>
                                        <div>
                                            <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                                <FontAwesomeIcon icon={item.icon} className="h-[50px] w-[50px] my-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default Wallet;
