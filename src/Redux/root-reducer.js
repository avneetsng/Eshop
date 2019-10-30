import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'   
import cartReducer from './cart/cart.reducer'

const rootReducer=combineReducers({
    cart:cartReducer,
    user:userReducer})

export default rootReducer;


