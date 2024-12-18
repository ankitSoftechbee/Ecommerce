import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from 'react-slick';
import { faDollarSign, faWallet, faCoins, faArrowUp, faArrowDown, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Bonus = () => {


    const content = [
        { name: 'Tier Bonus', price: '$1900' },
        { name: 'Performance Bonus', price: '$1400' },
        { name: 'Direct Referral Bonus', price: '$3100' },
        { name: 'Reward Bonus', price: '$1030' },
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
            <h4 className="mt-4 px-1 fs-18 font-w600">Bonus</h4>
            <Slider {...settings} className='w-full mt-2 px-1'>
                {content.map((item, index) => (
                    <div className='px-1' style={{ border: '2px solid yellow' }}>
                        <div class="card  wallet blue">
                            <div class="boxs">
                                <span class="box one"></span>
                                <span class="box two"></span>
                                <span class="box three"></span>
                                <span class="box four"></span>
                            </div>
                            <div class="card-header border-0">
                                <div class="wallet-info">
                                    <span class="font-w400 d-block text-white">{item.name}</span>
                                    <h4 class="fs-24 font-w600 mb-0 d-inline-flex me-2">{item.price}</h4>
                                </div>
                                <div class="wallet-icon">
                                    <svg width="62" height="39" viewBox="0 0 62 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="42.7722" cy="19.2278" r="19.2278" fill="white" fill-opacity="0.2" />
                                        <circle cx="19.2278" cy="19.2278" r="19.2278" fill="white" fill-opacity="0.2" />
                                    </svg>
                                </div>
                            </div>
                            {/* <div class="card-body py-3  d-flex align-items-center  flex-wrap">
                                <div class="value-data p-0 me-3">
                                    <span class="fs-14 font-w400 ">VALID THRU</span>
                                    <span class="value fs-16 "><span class="text-black pe-2 "></span>08/21</span>
                                </div>
                                <div class="value-data p-0">
                                    <span class="fs-14 font-w400 ">CARD HOLDER</span>
                                    <span class="value fs-16"><span class="text-black pe-2 "></span>Adam Jackson</span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                ))}
            </Slider>
        </>
    );
};

export default Bonus;
