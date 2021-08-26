import React from 'react'
import '../Styles/Header.scss';

const Header = ({title}) => {
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
            </header>

        </div>
    )
}

export default Header
