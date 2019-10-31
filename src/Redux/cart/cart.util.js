
export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem=>(
            cartItem.id===cartItemToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem
        ));
    }

    return[...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(cartItem,cartItemToRemove)=>{
    const existingCartItem = cartItem.find(item=>item.id===cartItemToRemove.id);

    if(existingCartItem.quantity===1){
        return cartItem.filter(item=>item.id!==cartItemToRemove.id)
    }
    return cartItem.map(item=>
        item.id===cartItemToRemove.id?
        {...item,quantity:item.quantity-1}
        :item)
}
