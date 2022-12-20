import React from 'react'
import img from '../../imgSource/pen.png'
const RemoveEditDiv = () => {
    return (
        <div>
            <img src={img} alt="Pen" />
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3466 18.9818H7.84656C7.01322 18.9818 6.30489 18.3984 6.17989 17.5651L4.34656 5.23177H16.8466L14.9716 17.5651C14.8466 18.3984 14.1382 18.9818 13.3466 18.9818Z" fill="#B39DDB" />
                <path d="M12.2635 3.14772H8.93018L6.43018 5.64772H14.7635L12.2635 3.14772Z" fill="#9575CD" />
                <path d="M4.76424 3.98131H16.4309C16.8892 3.98131 17.2642 4.35631 17.2642 4.81464V5.64797H3.93091V4.81464C3.93091 4.35631 4.30591 3.98131 4.76424 3.98131Z" fill="#7E57C2" />
            </svg>
        </div>

    )
}

export default RemoveEditDiv