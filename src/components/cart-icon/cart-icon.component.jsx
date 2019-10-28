import React from 'react'
import {connect} from 'react-redux'

import {cartAction} from '../../Redux/cart/cart.action'
import {selectCartItemsCount} from '../../Redux/cart/cart.selector'


import {ReactComponent as ShoppigIcon} from '../../assets/11.2 shopping-bag.svg.svg'

import './cart-icon.styles.scss'
// import CartItem from '../cart-item/cart-item.component'

const CartIcon=(props)=>(
    <div className="cart-icon" onClick={props.toggleCart}>
        <ShoppigIcon className='shopping-icon'/>
        <span className="item-count">{props.cartItemCount}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        hidden:state.cart.hidden,
        cartItemCount:selectCartItemsCount(state)
    }
}
const mapDispatchToProps=dispatch=>({
    toggleCart:()=>dispatch(cartAction)
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);