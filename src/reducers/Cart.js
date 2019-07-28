import * as types from "../constant/ActionType";
var data = JSON.parse(localStorage.getItem('CART'));
var initial = data ? data : [];

const Cart = (state = initial, action) => {
    var { product, quatity } = action
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findCart(state, product);
            if (index !== -1) {
                state[index].quatity += 1;
            } else {
                state.push({
                    product,
                    quatity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findCart(state,product)
            if(index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findCart(state,product)
            if(index!==-1){
                state[index].quatity = quatity
            }
            localStorage.setItem('CART',JSON.stringify(state))
            return [...state];
        default:
            return [...state];
    }
}

var findCart = (carts, product) => {
    var result = -1;
    if (carts.length > 0) {
        carts.forEach((cart, index) => {
            if (cart.product.id === product.id) {
                result = index;
            }
        });
    }
    return result;
}

export default Cart