import {createSelector} from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartItem
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((a,c)=>a+c.quantity,0)
)
