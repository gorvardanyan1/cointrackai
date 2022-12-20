import React from 'react'
import { coinList } from '../../fakeData'
import CoinListItem from './CoinListItem'
const CoinList = () => {
    return (
        <div className='coinListDiv'>
            <ul>
                {coinList.map(elem => {
                    return <CoinListItem key={elem.id} dataName={elem.name} logo={elem.logo} percent={elem.percent} chart={elem.chart} />
                })}
            </ul>
        </div>
    )
}

export default CoinList