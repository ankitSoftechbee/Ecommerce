import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';
import { faDollarSign, faWallet, faCoins, faArrowUp, faArrowDown, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Wallet = () => {


    const content = [
        { name: 'Income Wallet', icon: faArrowDown, price: '$100' },
        { name: 'Master Wallet', icon: faWallet, price: '$100' },
        { name: 'SRPToken Wallet', icon: faCoins, price: '$100' },
        { name: 'Staking Wallet', icon: faArrowUp, price: '$100' },
        { name: 'Earning Wallet', icon: faDollarSign, price: '$100' },
        { name: 'Fund Wallet', icon: faBriefcase, price: '$100' },
    ]

    const settings = {
        infinite: true, // Infinite scroll
        speed: 500, // Animation speed
        slidesToShow: 2, // Show 3 images at a time
        slidesToScroll: 1, // Scroll 1 image at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set the autoplay interval to 2 seconds
        arrows: false, // Disable next/prev arrows
        responsive: [
            {
                breakpoint: 1024, // On desktop and tablets
                settings: {
                    slidesToShow: 2, // Show 3 images
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // On mobile
                settings: {
                    slidesToShow: 1, // Show 1 image
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h4 className="mt-8 px-1 fs-18 font-w600">Wallet</h4>
            <Slider {...settings} className='w-full mt-2 px-1'>
                {content.map((item, index) => (
                    <div className='px-1' style={{ border: '2px solid yellow' }}>
                        <div class="card Expense overflow-hidden">
                            <div class="card-body p-4 p-lg-3 p-xl-4 ">
                                <div
                                    class="students1 one d-flex align-items-center justify-content-between ">
                                    <div class="content">
                                        <h2 class="mb-0">{item.price}</h2>
                                        <span class="mb-2 fs-14">{item.name}</span>
                                    </div>
                                    <div>
                                        <div
                                            class="d-inline-block position-relative donut-chart-sale mb-3">
                                            <FontAwesomeIcon icon={item.icon} className='h-[50px] w-[50px] my-3' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </Slider>
        </>
    );
};

export default Wallet;
