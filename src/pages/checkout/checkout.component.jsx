import React from 'react'

import CheckoutItem from '../../components/checkout-item/checkout-item.compoent'

import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import {selectCartItems,selectCartItemsTotal} from '../../Redux/cart/cart.selector'

import './checkout.styles.scss'

const Checkout=({cartItemsTotal,cartItems})=>(
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>

            <div className="header-block">
                <span>Description</span>
            </div>

            <div className="header-block">
                <span>Quantity</span>
            </div>

            <div className="header-block">
                <span>Price</span>
            </div>

            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
           cartItems.map(cartItem=>(
               <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
           ))
        }
        <div className="total">
            <span>Total : Rs {cartItemsTotal}</span>
        </div>
    </div>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    cartItemsTotal:selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout);