import { useEffect } from 'react';
import Footer from '../../layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Wallet from './Wallet';
import Bonus from './Bonus';
import CoinPrice from './CoinPrice';

const Home = () => {
    // useEffect(() => {
    //     window.location.reload()
    // }, [])

    return <>
        <div className="content-body">

            <div className="container-fluid">
                <div className="relative overflow-hidden w-full mb-4">
                    <div className="flex items-center justify-center animate-scroll">
                        <p className="text-white-900 font-bold text-2xl mr-4">Good News :-</p>
                        <p className="text-xl text-yellow-600">Congratulations on your new project.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-7'>
                        <div>
                            <button type="button" className="btn btn-light">
                                Referral Link <FontAwesomeIcon icon={faShare} className="ms-2" /> {/* Icon inside the button text */}
                            </button>
                        </div>
                        <Wallet />
                        <Bonus/>
                        <CoinPrice/>
                    </div>
                    <div className='col-xl-5'>
                        <div className="card">
                            <div className="row">
                                <div className="card-header border-0  pb-0">
                                    <div className='w-full text-center border-b-[1px] pb-3 '>
                                        <h4 className="mb-0 fs-18 font-w600 text-center">Personal Info</h4>
                                    </div>
                                </div>
                                <div class="card-body pb-2">
                                    <div class="row px-8">
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center p-3">
                                                <p className="font-semibold text-xl">
                                                    Sponsor ID
                                                </p>
                                                <p className="font-semibold text-xl">
                                                    XYZ
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center p-3">
                                                <p className="font-semibold text-xl">
                                                    Name
                                                </p>
                                                <p className="font-semibold text-xl">
                                                    John Doe
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center p-3">
                                                <p className="font-semibold text-xl">
                                                    Mobile
                                                </p>
                                                <p className="font-semibold text-xl">
                                                    8826757573
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center p-3">
                                                <p className="font-semibold text-xl">
                                                    Status
                                                </p>
                                                <p className="font-semibold text-xl">
                                                    Active
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    </>
}
export default Home