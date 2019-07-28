import * as types from "../constant/ActionType";

export const onAddToCart = (product, quatity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quatity: quatity
    }
}

export const onChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message: message
    }
}

export const onDeleteCart = (product) => {
    return{
        type:types.DELETE_PRODUCT_IN_CART,
        product:product
    }
}
export const onUpdateProductInCart = (product,quatity) =>{
    return {
        type:types.UPDATE_PRODUCT_IN_CART,
        product:product,
        quatity:quatity
    }
}