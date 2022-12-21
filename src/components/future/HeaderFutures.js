import React from 'react'
import Vector from './Vector'

const HeaderFutures = () => {
    return (
        <div className='headerFutures'>
            <div className='leftDiv'>
                <h5>3/22/2022 17:51:03 PM</h5>
                <div>
                    <span className='positive'>
                        <Vector />
                        <h4>$0.74</h4>
                    </span>
                    <span className='negative'>
                        <Vector type="negative" />
                        <h4>$0.58</h4>
                    </span>
                </div>

            </div>
            <div className='rightDiv'>
                <span>$3,698.58</span>
            </div>
        </div>
    )
}

export default HeaderFutures