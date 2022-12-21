import React from 'react'
import PriceGraph from './PriceGraph'
import img from "../../imgSource/AAVE.png"
const TableItem = ({ tableName, amount, total, hourCharge, marketCap, priceBtc, priceGraph }) => {
    return (
        <tr>
            <td className='holdingNameTd'>
                <img src={img} alt="holding Logo" />
                {tableName} </td>
            <td>{amount}</td>
            <td>{total}</td>
            <td className={hourCharge.isPositive ? 'charge  chargePositive' : 'charge  chargeNegative'}><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.71723 0.245999L0 5.27734H7.89912L3.71723 0.245999Z" fill="#34D35C" />
            </svg>
                {hourCharge.num}%</td>
            <td>{marketCap}B</td>
            <td>{priceBtc}</td>
            <td className='graph'> <PriceGraph data={priceGraph} /></td>
            <td className='menuSvg'><svg width="5" height="23" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.00391" cy="2.78906" r="2" fill="#ECECEC" />
                <circle cx="2.00391" cy="11.7891" r="2" fill="#ECECEC" />
                <circle cx="2.00391" cy="20.7891" r="2" fill="#ECECEC" />
            </svg>
            </td>
        </tr >
    )
}

export default TableItem