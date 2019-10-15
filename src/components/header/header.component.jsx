import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'

import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'

const Header=()=>(
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo/>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                shop
            </Link>
            <Link className='option' to='/shop'>
                contact
            </Link>
        </div>
    </div>
)

export default Header;