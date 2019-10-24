import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import { auth } from '../../firebase/firebase.util'

const Header=({currentUser,hidden})=>(
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
            <CartIcon/>
        </div>
        {
          hidden?null:<CartDropdown/>
        }
        
    </div>
)

const mapStateToProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);