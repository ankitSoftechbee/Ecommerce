import { useEffect, useState } from 'react';
import Footer from '../../layout/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faShare } from '@fortawesome/free-solid-svg-icons';
import Wallet from './Wallet';
import Bonus from './Bonus';
import MyTeam from './MyTeam';
import axios from 'axios';
import { dashboardAPIConfig } from '../../api/apiConfig';
import { toast, ToastContainer } from 'react-toastify';
import Reward from './Reward';
import Withdraw from './Withdraw';
import Loader from "../../lib/Loader"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState('')


    useEffect(() => {
        setLoading(true)
        axios.get(dashboardAPIConfig.dashboard, {
            headers: {
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then((response) => {
            if (response.status === 200) {
                setData(response.data)
            } else {
                toast.error('Something went wrong')
            }
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            toast.error('Something went wrong')
        })
    }, [])

    useEffect(() => {
        setLoading(true)
        axios.get(dashboardAPIConfig.currentNews, {
            headers: {
                "Content-Type": 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then((response) => {
            if (response.status === 200) {
                // console.log(response)
                setNews(response.data)
            } else {
                toast.error('Something went wrong')
            }
            setLoading(false)
        }).catch((error) => {
            setLoading(false)
            toast.error('Something went wrong')
        })
    }, [])


    if (loading) {
        return <Loader />
    }

    const handleReferral = (position) => {
        let link
        if (position === 'left') {
            const user = JSON.parse(sessionStorage.getItem('user'))
            link = `https://gmfxbotworld.com/user/signup/${user.userName}/left/${user.name}`

        } else if (position === 'right') {
            link = `https://gmfxbotworld.com/user/signup/${user.userName}/right/${user.name}`
        }
        navigator.clipboard
            .writeText(link)
            .then(() => toast.success("Referral link copied!"))
            .catch(() => toast.error("Failed to copy referral link."));
    };


    return <>
        <div className="content-body">

            <div className="container-fluid">
                <div className="relative overflow-hidden w-full mb-4">
                    <div className="flex items-center justify-center animate-scroll">
                        <p className="text-white-900 font-bold text-2xl mr-4">{news.tittle} :-</p>
                        <p className="text-xl text-yellow-600">{news.news}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-7'>
                        <div>
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={() => handleReferral('left')}
                            >
                                Left Referral Link <FontAwesomeIcon icon={faCopy} />
                            </button>
                            <button
                                type="button"
                                className="ml-2 btn btn-primary"
                                onClick={() => handleReferral('right')}
                            >
                                Right Referral Link <FontAwesomeIcon icon={faCopy} />
                            </button>
                        </div>
                        <Wallet data={data} />
                        <Bonus data={data} />
                        <MyTeam data={data} />
                        <Withdraw data={data} />
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
                                            <div class="card-body flex justify-between items-center px-1 py-3">
                                                <p className="font-semibold text-white text-xl">
                                                    User Name
                                                </p>
                                                <p className="font-semibold text-white text-xl">
                                                    {data.username || ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center px-1 py-3">
                                                <p className="font-semibold text-white text-xl">
                                                    Name
                                                </p>
                                                <p className="font-semibold text-white text-xl">
                                                    {data.name || ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center px-1 py-3">
                                                <p className="font-semibold text-white text-xl">
                                                    Date of Joining
                                                </p>
                                                <p className="font-semibold text-white text-xl">
                                                    {data?.dateofjoin?.split('T')[0] || ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center px-1 py-3">
                                                <p className="font-semibold text-white text-xl">
                                                    Package
                                                </p>
                                                <p className="font-semibold text-green-300 text-xl">
                                                    {data?.packtype || ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center px-1 py-3">
                                                <p className="font-semibold text-white text-xl">
                                                    Rank
                                                </p>
                                                <p className="font-semibold text-yellow-500 text-xl">
                                                    {data?.currentReward || ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div class="card-body flex justify-between items-center px-1 py-3">
                                                <p className="font-semibold text-white text-xl">
                                                    Status
                                                </p>
                                                <p className="font-semibold text-green-300 text-xl">
                                                    {data.status || ''}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Reward data={data} />

                    </div>
                </div>


                <Footer />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    </>
}
export default Home