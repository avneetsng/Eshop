import React from 'react'

import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems} from '../../Redux/cart/cart.selector'
import {toggleCartHidden} from '../../Redux/cart/cart.action'

import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'

const CartDropdown=({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        {console.log(history)}
        <div className="cart-items">
            { cartItems.length?
                (cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>))
                : <span className="empty-message">Your cart is empty</span>
            }
            <CustomButton onClick={()=>
                {
                    history.push('/checkout');
                    dispatch(toggleCartHidden)
                }}>
            {'go to checkout'.toUpperCase()}
            </CustomButton>
        </div>
    </div>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));