import React from 'react'

import {connect} from 'react-redux';

import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'

const CartDropdown=({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)}
            <CustomButton>{'go to checkout'.toUpperCase()}</CustomButton>
        </div>
    </div>
);

const mapStateToProps=({cart:{cartItem}})=>({
    cartItems:cartItem
})
export default connect(mapStateToProps)(CartDropdown);