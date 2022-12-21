import React from 'react'

const Vector = ({ type }) => {
    return (
        <svg className={type && 'negativeSvg'} width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8991 1.60517L9.61227 7.89195L6.25932 4.539L1.22989 9.56843M12.127 1.18605H16.2763V5.37724" stroke="#61E224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Vector