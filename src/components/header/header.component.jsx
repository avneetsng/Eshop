import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'

import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import { auth } from '../../firebase/firebase.util'

const Header=({currentUser})=>(
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

            { currentUser?
              <div className="option" onClick={()=>auth.signOut()}> Sign out</div>
              :<Link className='option' to='/signin'>
              SignIn
               </Link>
            }
            
        </div>
    </div>
)

export default Header;