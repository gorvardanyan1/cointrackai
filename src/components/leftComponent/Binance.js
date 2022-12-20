import React from 'react'
import BinanceLogoSvg from './BinanceLogoSvg'

const Binance = () => {
    return (
        <div className='binance'>
            <div className='binanceTopDiv'>

                <div>
                    <div className='binanceLogo'>
                        <BinanceLogoSvg />
                        <h5>Binance</h5>
                    </div>

                    <h4>$1000.00</h4>
                </div>

                <div>
                    <h6>4.85%</h6>
                    <svg width="101" height="50" viewBox="0 0 101 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1498 9.82721L1.00177 47.9423H3.00087L100.441 49.016V1.23791L95.6361 4.99575C94.6573 4.10102 92.2724 2.09684 90.5639 1.23791C88.8553 0.37898 80.0635 4.99572 75.8811 7.41146C73.9234 6.87463 69.0469 6.12307 65.2027 7.41146C60.3974 9.02196 57.1938 13.8534 55.859 9.82721C54.5242 5.80097 48.9181 9.82721 46.2485 9.82721C44.1128 9.82721 36.9938 8.21671 33.7013 7.41146C31.7436 9.2009 26.9205 12.6724 23.2899 12.2429C19.6592 11.8135 17.6837 10.4535 17.1498 9.82721Z" fill="url(#paint0_linear_1_764)" fillOpacity="0.12" />
                        <path d="M1.00171 47.6328L17.2007 9.82375C17.7365 10.4498 19.7188 11.8092 23.3619 12.2385C27.0051 12.6678 31.8447 9.19769 33.8092 7.40896C37.113 8.21389 44.2564 9.82375 46.3994 9.82375C49.0782 9.82375 54.7036 5.79911 56.043 9.82375C57.3824 13.8484 60.597 9.01882 65.4188 7.40896C69.2762 6.12108 74.1694 6.87234 76.1339 7.40896C80.3306 4.99419 89.1527 0.37928 90.8671 1.23787C92.5816 2.09646 94.9746 4.09984 95.9568 4.99421L100.109 1.23787" stroke="#61E224" strokeWidth="0.762173" strokeLinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1_764" x1="51.7221" y1="1.13281" x2="51.7221" y2="49.016" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#49D76C" />
                                <stop offset="0.901042" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <hr />
            <div className='binanceBottomDiv'>
                <div>
                    <BinanceLogoSvg />
                    <h3>Binance Savings</h3>
                </div>
                <div>
                    <BinanceLogoSvg />
                    <h3>Binance Savings</h3>
                </div>
            </div>
        </div>
    )
}
export default Binance