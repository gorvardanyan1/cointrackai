import React from 'react'
import FoxMaskSvg from './FoxMaskSvg'
import RemoveEditDiv from './RemoveEditDiv'
const MetaMask = () => {
    return (
        <div className='metaMask'>
            <div>
                <FoxMaskSvg />
                <h4>Metamask</h4>
            </div>

            <div>
                <h5>4.85 $</h5>
                <svg width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.05 4.58274L39.6643 19.7068L0.999969 20.1328V1.17452L2.9067 2.66562C3.29511 2.3106 4.24142 1.51534 4.91937 1.17452C5.59732 0.833692 9.08594 2.66561 10.7455 3.62418C11.5223 3.41116 13.4573 3.11294 14.9827 3.62418C16.8894 4.26322 18.1606 6.18035 18.6902 4.58274C19.2199 2.98513 21.4444 4.58274 22.5037 4.58274C23.3511 4.58274 26.1759 3.9437 27.4824 3.62418C28.2592 4.33422 30.173 5.71172 31.6137 5.54131C33.0543 5.37089 33.8382 4.83126 34.05 4.58274Z" fill="url(#paint0_linear_1_751)" fillOpacity="0.12" />
                    <path d="M39.4882 19.7824L34.0291 4.58137C33.8165 4.82979 33.0299 5.36921 31.5843 5.53955C30.1387 5.7099 28.2183 4.33295 27.4389 3.62318C26.1279 3.94258 23.2934 4.58137 22.4431 4.58137C21.3801 4.58137 19.148 2.9844 18.6165 4.58137C18.085 6.17834 16.8095 4.26197 14.8962 3.62318C13.3656 3.11215 11.4239 3.41025 10.6444 3.62318C8.97918 2.665 5.47858 0.833811 4.7983 1.1745C4.11802 1.51519 3.16846 2.31013 2.77872 2.66501L1.13116 1.1745" stroke="#FF0000" strokeWidth="0.30243" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_1_751" x1="20.3321" y1="1.13281" x2="20.3321" y2="20.1328" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF001F" />
                            <stop offset="0.901042" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <RemoveEditDiv />
        </div>
    )
}

export default MetaMask