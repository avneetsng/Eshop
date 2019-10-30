import React from 'react'

import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect'

import {toggleCartHidden} from '../../Redux/cart/cart.action'
import {selectCartItemsCount} from '../../Redux/cart/cart.selector'
import {selectCartHidden} from '../../Redux/cart/cart.selector'


import {ReactComponent as ShoppigIcon} from '../../assets/11.2 shopping-bag.svg.svg'

import './cart-icon.styles.scss'
// import CartItem from '../cart-item/cart-item.component'

const CartIcon=(props)=>(
    <div className="cart-icon" onClick={props.toggleCart}>
        <ShoppigIcon className='shopping-icon'/>
        <span className="item-count">{props.cartItemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector(
    
    {
        hidden:selectCartHidden,
        cartItemCount:selectCartItemsCount
    }
)
const mapDispatchToProps=dispatch=>({
    toggleCart:()=>dispatch(toggleCartHidden)
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);