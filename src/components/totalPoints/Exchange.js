import React from 'react'

const Exchange = () => {
    return (
        <div className='exchange'>
            <div className='exchangeInnerDiv'>
                <div>
                    <input type="checkbox" name="usd" id="usd" />
                    <label className='usdLabel' htmlFor="usd">USD</label>
                </div>
                <div>
                    <input type="checkbox" name="btc" id="btc" />
                    <label className='btcLabel' htmlFor="btc">BTC</label>
                </div>
                <div>
                    <input type="checkbox" name="eth" id="eth" />
                    <label className='ethLabel' htmlFor="eth">ETH</label>
                </div>

            </div>
        </div>
    )
}

export default Exchange