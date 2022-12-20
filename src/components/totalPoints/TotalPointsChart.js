import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { totalPointsData } from '../../fakeData';
import React from 'react'


const TotalPointsChart = () => {
    return (
        <div style={{ width: "100%", height: "200px", backgroundColor: "#212734" }}>
            <ResponsiveContainer color="white" width="100%" height="100%">
                <LineChart width={300} height={100} data={totalPointsData}>
                    <XAxis dataKey="name" tick={{ fill: "#fff", fontSize: "12px" }} />
                    <YAxis tick={{ fill: "#fff", fontSize: "12px", fontWeight: 400 }} />
                    <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
                    <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
                    <Line type="monotone" dataKey="pv" stroke="#805AD5" strokeWidth="1" dot={{ fill: "#2e4355", stroke: "#8884d8", strokeWidth: 3, r: 2 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TotalPointsChart