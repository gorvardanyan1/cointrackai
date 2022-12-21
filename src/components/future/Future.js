import React from 'react'
import '../../style/future.style.scss'
import FutureGraph from './FutureGraph'
import HeaderFutures from './HeaderFutures'
import FooterFutures from './FooterFutures'
import SectionHeader from '../SectionHeader'
const Future = () => {
    return (
        <div className='futureDiv'>
            <SectionHeader header='Futures' linkHref='#' />
            <HeaderFutures />
            <FutureGraph />
            <FooterFutures />
        </div>
    )
}

export default Future