import React from 'react'
import Header from './header/Header'
import MainLeft from './leftComponent/MainLeft'
import MostUsableExchange from './mostUsableExchange/MostUsableExchange'
import TotalPoints from './totalPoints/TotalPoints'

const Container = () => {
    return (
        <div className='container'>
            <Header />
            <main>
                <MainLeft />
                <TotalPoints />
                <MostUsableExchange />
            </main>
        </div>
    )
}

export default Container