import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserLight from './UserLight'

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