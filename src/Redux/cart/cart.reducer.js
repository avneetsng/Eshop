import cartActionTypes from './cart.types';
import {addItemToCart,removeItemFromCart} from './cart.util'

const INITIAL_STATE={
    hidden:true,
    cartItem:[]
}

const 
cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden:!state.hidden

            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItem:addItemToCart(state.cartItem,action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItem:state.cartItem.filter(item=>item.id!==action.payload.id)
            }        
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItem:removeItemFromCart(state.cartItem,action.payload)
            }    
        default : return state;
    }

}

export default cartReducer;
