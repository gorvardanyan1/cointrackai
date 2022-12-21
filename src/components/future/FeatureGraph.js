import React from 'react'
import { AreaChart, Area } from 'recharts';
import { futureData } from '../../fakeData';
const FutureGraph = () => {
    return (
        <div className='futureGraph'>
            <AreaChart width={500} height={200} data={futureData}
                margin={{ top: 40, right: 30, left: 30, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Area type="line" dataKey="pv" stroke="#1F2633" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    )
}

export default FutureGraph