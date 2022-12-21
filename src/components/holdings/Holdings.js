import React from 'react'
import TableItem from './TableItem'
import { holdingsData } from '../../fakeData'
import '../../style/holdings.style.scss'
import SectionHeader from '../SectionHeader'
const Holdings = () => {
    return (
        <div className="tableDiv">
            <SectionHeader header='Holdings' linkHref='#' />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>1 Hour Charge</th>
                        <th>Market Cap</th>
                        <th>Price In BTC</th>
                        <th>Price Graph</th>
                        <th><svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H18.5" stroke="#ECECEC" strokeWidth="1.5" />
                            <path d="M0 6H18.5" stroke="#ECECEC" strokeWidth="1.5" />
                            <path d="M0 11H18.5" stroke="#ECECEC" strokeWidth="1.5" />
                        </svg>
                        </th>
                    </tr>

                </thead>
                <tbody>
                    {holdingsData.map(elem => {
                        return (
                            <TableItem key={elem.id} tableName={elem.tableName} amount={elem.amount} total={elem.total} hourCharge={elem.hourCharge} marketCap={elem.marketCap} priceBtc={elem.priceBtc} priceGraph={elem.priceGraph} />
                        )
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default Holdings