import React from 'react'
import { analyticsData } from '../../fakeData'
import SectionHeader from '../SectionHeader'
import '../../style/analytics.style.scss'
import AnalyticsListItem from './AnalyticsListItem'
import { v4 } from 'uuid'
const Analytics = () => {
    return (
        <div className='analytics'>
            <SectionHeader header='Analtyics' linkHref='#' />
            <ul>
                {analyticsData.map(elem => {
                    return (<AnalyticsListItem key={v4()} text={elem.text} lastItem={elem.lastElem} >
                        {elem.svgLogo}
                    </AnalyticsListItem>)
                })}
            </ul>
        </div>
    )
}

export default Analytics