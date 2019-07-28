import {combineReducers} from "redux";
import products from "./product";
import Cart from "./Cart";
import message from "./message";
const appReducer = combineReducers({
    products:products,
    Cart:Cart,
    message:message
});
export default appReducer;