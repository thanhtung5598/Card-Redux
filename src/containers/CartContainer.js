import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../constant/Message";
import * as action from "../action/index";

class CartContainer extends Component {
    showCart(carts) {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var { onDeleteCartItem, onChangeMessage, onUpdateProduct } = this.props
        if (carts.length > 0) {
            result = carts.map((items, index) => {
                return <CartItem
                            key={index}
                            items={items}
                            onDeleteCartItem={onDeleteCartItem}
                            onChangeMessage={onChangeMessage}
                            onUpdateProduct={onUpdateProduct}
                        >
                        {this.PriceToTal(items.product.price, items.quatity)}
                        </CartItem>
            });
        }
        return result;
    }
    PriceToTal(price, quatity) {
        return price * quatity
    }
    showTotalAmout(carts) {
        var total = 0;
        carts.forEach(i => {
            total += i.product.price * i.quatity;
        });
        return <CartResult totalAmout={total} />;
    }
    render() {
        var { cart } = this.props
        return (
            <Cart>
                {this.showCart(cart)}
                {this.showTotalAmout(cart)}
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    Cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rate: PropTypes.number.isRequired
            }).isRequired,
            quatity: PropTypes.number.isRequired
        }),
    )
}

const mapStateToProp = (state) => {
    return {
        cart: state.Cart
    }
}
const mapDispatchToProp = (dispatch, props) => {
    return {
        onDeleteCartItem: (product) => {
            dispatch(action.onDeleteCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(action.onChangeMessage(message))
        },
        onUpdateProduct: (product, quatity) => {
            dispatch(action.onUpdateProductInCart(product, quatity))
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(CartContainer);
