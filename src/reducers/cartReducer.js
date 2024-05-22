const cartReducer = (state={cartList: []}, action) => {

    switch(action.type){
        case 'ADD_TO_CART':
            return {cartList: action.payload}
        case 'REMOVE_FROM_CART':
            return {cartList: action.payload}
        default:
            return state;
    }

}

export default cartReducer