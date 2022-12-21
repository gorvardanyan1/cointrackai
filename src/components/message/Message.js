import React from 'react'
import '../../style/message.style.scss'
const Message = () => {
    return (
        <div className='message'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11.7075" cy="11.8984" r="11.5" fill="#1A202C" />
                <path d="M15.5905 7.21326L12.0096 10.7941L8.42875 7.21326L7.02234 8.61967L10.6032 12.2005L7.02234 15.7814L8.42875 17.1878L12.0096 13.6069L15.5905 17.1878L16.9969 15.7814L13.416 12.2005L16.9969 8.61967L15.5905 7.21326Z" fill="#F2F2F2" />
            </svg>

            <p>Your free trial has been started․ There are <span>5 days</span> left.</p>
            <button>Subscribe</button>
        </div>
    )
}

export default Message