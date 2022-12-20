import React from 'react'
import TotalPointsHeader from './TotalPointsHeader'
import ControlIcons from './ControlIcons'
import TotalPointsChart from './TotalPointsChart'
import Exchange from './Exchange'
import '../../style/totalPoints.style.scss'
const TotalPoints = () => {
    return (
        <div className='totalPoints'>
            <TotalPointsHeader />
            <ControlIcons />
            <TotalPointsChart />
            <Exchange />
        </div>
    )
}

export default TotalPoints