import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserLight from './UserLight'
import "../../style/header.style.scss"
const Header = () => {
    return (
        <header>
            <div>
                <Logo />
                <Navigation />
                <UserLight />
            </div>
        </header>
    )
}

export default Header