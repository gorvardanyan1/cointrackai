import React from 'react'
import '../../style/left.scss'
import Binance from './Binance'
import CoinList from './CoinList'
import Inputs from './Inputs'
import MetaMask from './MetaMask'
const MainLeft = () => {
    return (
        <div className='leftMainDiv'>
            <Inputs />
            <MetaMask />
            <Binance />
            <CoinList />
        </div>
    )
}

export default MainLeft