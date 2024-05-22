export const addToCart = (item) => (dispatch, getState) => {

    const {CartMainReducer : {cartList}} = getState()

    const hasItem = cartList.find(each => each.id === item.id)

    if(!hasItem){
        dispatch({
            type: 'ADD_TO_CART',
            payload: [...cartList, item]
        })
    }

}

export const removeFromCart = (item) => (dispatch, getState) => {

    const {CartMainReducer : {cartList}} = getState()

    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: cartList.filter(each => each.id !== item.id)
    })

}