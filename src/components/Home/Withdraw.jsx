import React from 'react';
import { PieChart } from '@mui/x-charts';

const Withdraw = (props) => {
    const chartData = [
        {
            id: 'Available Withdraw Balance',
            value: props.data?.incomeWallet || 0,
            color: '#FF9F00',
        },
        {
            id: 'Withdraw Approved',
            value: props.data?.withdrawApproved || 0,
            color: '#FD5353',
        },
        {
            id: 'Withdraw Pending',
            value: props.data?.withdrawPending || 0,
            color: '#E8ECFF',
        },
    ];

    return (
        <div className="card pia-chart">
            <div className="card-header border-0">
                <h4 className="mb-0 fs-18 font-w700">Withdraw Summary</h4>
            </div>
            <div className="card-body" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'-10px' }}>
                {/* Pie Chart */}
                <PieChart
                    series={[
                        {
                            data: chartData,
                        },
                    ]}
                    width={300}
                    height={300}
                    colors={chartData.map((item) => item.color)}
                />
                {/* Legend */}
                <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    {chartData.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '8px',
                            }}
                        >
                            {/* Color box */}
                            <div
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    backgroundColor: item.color,
                                    marginRight: '8px',
                                }}
                            ></div>
                            {/* Label and Value */}
                            <span style={{ fontWeight: 'bold', marginRight: '4px' }}>{item.id}:</span>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
