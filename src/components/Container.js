import React from 'react'
import Coins from './coins/Coins'
import Header from './header/Header'
import MainLeft from './leftComponent/MainLeft'
import MostUsableExchange from './mostUsableExchange/MostUsableExchange'
import TotalPoints from './totalPoints/TotalPoints'
import Balance from './balance/Balance'
import Analytics from './analytics/Analytics'
import Future from './future/Future'
const Container = () => {
    return (
        <div className='container'>
            <Header />
            <main>
                <MainLeft />
                <TotalPoints />
                <MostUsableExchange />
                <Coins />
                <Balance />
                <Analytics />
                <Future />
            </main>
        </div>
    )
}

export default Container