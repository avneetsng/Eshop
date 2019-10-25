import React from 'react'
import {connect} from 'react-redux'

import {cartAction} from '../../Redux/cart/cart.action'
import {ReactComponent as ShoppigIcon} from '../../assets/11.2 shopping-bag.svg.svg'


import './cart-icon.styles.scss'
// import CartItem from '../cart-item/cart-item.component'

const CartIcon=(props)=>(
    <div className="cart-icon" onClick={props.toggleCart}>
        <ShoppigIcon className='shopping-icon'/>
        <span className="item-count">{props.cartItem.length}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        hidden:state.cart.hidden,
        cartItem:state.cart.cartItem
    }
}
const mapDispatchToProps=dispatch=>({
    toggleCart:()=>dispatch(cartAction)
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);