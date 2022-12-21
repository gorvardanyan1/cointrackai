import React from 'react'

const SectionHeader = ({ header, linkHref }) => {
    return (
        <div className='sectionHeader'>
            <h2>{header}</h2>
            <a href={linkHref}>See More</a>
        </div>
    )
}

export default SectionHeader