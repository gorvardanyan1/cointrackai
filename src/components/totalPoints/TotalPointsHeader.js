import React from 'react'

const TotalPointsHeader = () => {
    return (
        <div className='totalPointsHeader'>
            <h2>Total Points</h2>
            <select>
                <option value="All">All</option>
                <option value="item1">Item1</option>
                <option value="item2">Item2</option>
                <option value="item3">Item3</option>
            </select>
            <select>
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                <option value="5">5 Year</option>
                <option value="6">6 Year</option>
                <option value="7">7 Year</option>

            </select>

            <a href="#">See More</a>
        </div>
    )
}

export default TotalPointsHeader