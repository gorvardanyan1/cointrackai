import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
const PriceGraph = ({ data }) => {


    return (
        <div style={{ width: "250px", height: "40px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={data}>
                    <Line type="line" dataKey="pv" stroke="#32D25A" strokeWidth={1} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}


export default PriceGraph