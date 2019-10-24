import React from 'react'
import {connect} from 'react-redux'

import cartAction from '../../Redux/cart/cart.action'
import {ReactComponent as ShoppigIcon} from '../../assets/11.2 shopping-bag.svg.svg'


import './cart-icon.styles.scss'

const CartIcon=(props)=>(
    <div className="cart-icon" onClick={props.toggleCart}>
        <ShoppigIcon className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        hidden:state.cart.hidden
    }
}
const mapDispatchToProps=dispatch=>({
    toggleCart:()=>dispatch(cartAction)
});


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);