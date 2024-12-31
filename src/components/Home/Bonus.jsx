import React from 'react';
import Slider from 'react-slick';

const Bonus = (props) => {
    const { data } = props;

    const content = [
        { id: 'tradingincome', name: 'Trading Profit' },
        { id: 'tradingpassiveincome', name: 'Trading Profit Income' },
        { id: 'directincome', name: 'Direct Income' },
        { id: 'levelincome', name: 'Level Income' },
        { id: 'rewardincome', name: 'Reward Income' },
        { id: 'royaltyincome', name: 'Royalty Income' },
        { id: 'clubincome', name: 'Club Income' },
    ];

    const settings = {
        infinite: true, // Infinite scroll
        speed: 500, // Animation speed
        slidesToShow: 2, // Show 2 items at a time
        slidesToScroll: 1, // Scroll 1 item at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay interval to 2 seconds
        arrows: false, // Disable next/prev arrows
        responsive: [
            {
                breakpoint: 1024, // On desktop and tablets
                settings: {
                    slidesToShow: 2, // Show 2 items
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // On mobile
                settings: {
                    slidesToShow: 1, // Show 1 item
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h4 className="mt-4 px-1 fs-18 font-w600">Income Details</h4>
            <Slider {...settings} className="w-full mt-2 px-1">
                {content.map((item, index) => {
                    // Retrieve the corresponding value from the data object
                    const price = data[item.id] !== undefined ? data[item.id] : 'N/A';

                    return (
                        <div className="px-1" key={index} style={{ border: '2px solid yellow' }}>
                            <div className="card wallet blue">
                                <div className="boxs">
                                    <span className="box one"></span>
                                    <span className="box two"></span>
                                    <span className="box three"></span>
                                    <span className="box four"></span>
                                </div>
                                <div className="card-header border-0">
                                    <div className="wallet-info">
                                        <span className="font-w400 d-block text-white">{item.name}</span>
                                        <h4 className="fs-24 font-w600 mb-0 d-inline-flex me-2">{price} USDT</h4>
                                    </div>
                                    <div className="wallet-icon">
                                        <svg width="62" height="39" viewBox="0 0 62 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="42.7722" cy="19.2278" r="19.2278" fill="white" fillOpacity="0.2" />
                                            <circle cx="19.2278" cy="19.2278" r="19.2278" fill="white" fillOpacity="0.2" />
                                        </svg>
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

export default Bonus;
