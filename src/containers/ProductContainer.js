import React, { Component } from 'react';
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as action from "../action/index";

class ProductContainer extends Component {
    showProduct(products) {
        var result = null;
        var { onAddToCart,onChangeMessage } = this.props
        if (products.length > 0) { 
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products> // Làm trung gian
        );
    }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage:PropTypes.func.isRequired
}

const mapStateToProp = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.onAddToCart(product, 1))
        },
        onChangeMessage:(message)=>{
            dispatch(action.onChangeMessage(message))
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ProductContainer);
