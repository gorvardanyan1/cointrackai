import React from 'react'
import VectorCoin from './VectorCoin'
import '../../style/coins.style.scss'
import DataTime from '../DataTime'
import SectionHeader from '../SectionHeader'
const Coins = () => {
    return (
        <div className='coins'>
            <SectionHeader header='Coins' linkHref='#' />
            <div className="oval">
                <svg width="213" height="123" viewBox="0 0 213 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M212.475 105.074C196.836 105.207 188.354 109.416 179.874 113.623C170.333 118.357 160.795 123.089 141.067 122.012C121.295 120.931 111.083 115.112 100.874 109.295C90.6735 103.482 80.4765 97.6715 60.7488 96.5936C40.9769 95.5133 31.4246 100.253 21.8758 104.99C15.6393 108.085 9.40439 111.178 0.324782 112.649C0.203846 110.573 0.142534 108.482 0.142534 106.376C0.142536 47.7398 47.6765 0.205877 106.313 0.205878C164.514 0.205879 211.777 47.0379 212.475 105.074Z" fill="url(#paint0_linear_1_301)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_301" x1="99.6445" y1="-0.31965" x2="89.6318" y2="120.406" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#783EF9" />
                            <stop offset="0.432292" stopColor="#8F67EA" />
                            <stop offset="1" stopColor="#905FFF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='topDiv'>
                    <div>TOP <span>Gainer</span> </div>
                    <div>Apecoin</div>
                    <div><VectorCoin /> 0.74%</div>
                </div>
                <div className='bottomDiv'>
                    <div>TOP <span>Looser</span> </div>
                    <div>Apecoin</div>
                    <div><VectorCoin /> 0.74%</div>
                </div>
            </div>

            <DataTime />
        </div>

    )
}

export default Coins