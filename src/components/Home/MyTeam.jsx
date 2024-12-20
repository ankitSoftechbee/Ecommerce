import { faTeamspeak } from "@fortawesome/free-brands-svg-icons"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PersonIcon from '@mui/icons-material/Person';

const MyTeam = (props) => {
    const { data } = props
    const content = [{
        "id": 'totaldirect',
        "name": 'My Direct',
        "color": 'white'
    },
    {
        "id": 'activeDirect',
        "name": 'Active Direct',
        "color": '#00ff7f'
    },
    {
        "id": 'inActiveDirect',
        "name": 'InActive Direct',
        "color": 'red'
    },
    {
        "id": 'totalTeam',
        "name": 'Total Team',
        "color": 'white'
    },
    {
        "id": 'activeTeam',
        "name": 'Active Team',
        "color": '#00ff7f'
    },
    {
        "id": 'inActiveTeam',
        "name": 'InActive Team',
        "color": 'red'
    },
    ]
    return <div>
        <h4 className="mt-4 px-1 fs-18 font-w600">My Team</h4>
        <div className="card Invoices mb-5 mt-2">
            <div className="card-body loadmore-content recent-activity-wrapper-invoice dz-scroll px-3  py-2" id="RecentActivityContent">
                {content.map((item, index) => {
                    const value = data[item.id] !== undefined ? data[item.id] : 'N/A';
                    return <div className="d-flex py-sm-3 py-1 px-3 align-items-center student">
                        <span className=" me-3">
                            <PersonIcon sx={{ color: item.color, height: '40px', width: '40px' }} />
                        </span>
                        <div>
                            <h6 className="font-w500 fs-16 mb-0"><a href="app-profile.html">{item.name}</a></h6>
                        </div>
                        <div className="price ms-auto">
                            <a href="#">
                                {value}
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default MyTeam