import React from 'react'
import '../../style/future.style.scss'
import FeatureGraph from './FeatureGraph'
import HeaderFutures from './HeaderFutures'
import FooterFutures from './FooterFutures'
const Future = () => {
    return (
        <div className='futureDiv'>
            <HeaderFutures />
            <FeatureGraph />
            <FooterFutures />
        </div>
    )
}

export default Future