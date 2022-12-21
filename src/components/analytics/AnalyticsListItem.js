import React, { Children } from 'react'

const AnalyticsListItem = ({children,text,lastItem}) => {
    return (
        <li>
            {children}
            <h4>{text}</h4>
            {lastItem}
        </li>
    )
}

export default AnalyticsListItem