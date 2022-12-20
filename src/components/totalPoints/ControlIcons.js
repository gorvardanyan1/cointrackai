import React from 'react'
import ZoomIn from './controlIcons/ZoomIn'
import ZoomOut from './controlIcons/ZoomOut'
import Zoom from './controlIcons/Zoom'
import Home from './controlIcons/Home'
import Hand from './controlIcons/Hand'
const ControlIcons = () => {
    return (
        <div className='controlIcons'>
            <ZoomIn />
            <ZoomOut />
            <Zoom />
            <Home />
            <Hand />
        </div>

    )
}

export default ControlIcons