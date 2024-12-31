const Reward = (props) => {
    const { data } = props
    const content = [{ id: 'rightTeamBusiness', name: 'Total Right Business' }, { id: 'leftTeamBusiness', name: 'Total Left Business' }]

    return <>
        <h4 className="mt-4 px-1 fs-18 font-w600">Reward / Rank</h4>
        {content.map((item) => {
            const value = data[item.id] !== undefined ? data[item.id] : 'N/A';

            return <div class="card  pia-chart">
                <div class="card-header border-0 ">
                    <div>
                        <h4 class="mb-0 fs-18 font-w700">{item.name}</h4>
                    </div>
                    <div>
                        <h4 class="mb-0 fs-18 font-w700">{value} USDT</h4>

                    </div>
                </div>
            </div>
        })}

    </>
}

export default Reward