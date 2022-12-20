import React from 'react'
import RemoveEditDiv from './RemoveEditDiv'

const CoinListItem = ({ dataName, logo, percent, chart }) => {
    return (
        <li>
            <div>
                {logo}
                <h4>{dataName}</h4>
            </div>
            <div>
                <h5>{percent}%</h5>
                {chart}
            </div>
            <RemoveEditDiv />
        </li>
    )
}

export default CoinListItem