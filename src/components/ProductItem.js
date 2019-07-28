import React, { Component } from 'react';
import * as MessageTypes from "../constant/Message";
class ProductItem extends Component {
    showRate(product){
        var result = [];
        for (let i = 0; i < product.rate; i++) {
            result.push(<i className="fa fa-star"></i>);
        }
        for (let i = 0; i < (5-product.rate); i++) {
            result.push(<i className="fa fa-star-o"></i>);
        }
        return result;
    }
    onAddToCart = (product) =>{
        this.props.onAddToCart(product);
        this.props.onChangeMessage(MessageTypes.MSG_ADD_TO_CART_SUCCESS);
    }
    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img} className="img-fluid" alt={product.name} />
                        <a href="#.">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="#.">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {/* {this.showRate(product)} */}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a href="#."
                                   className="btn-floating blue-gradient" 
                                   data-toggle="tooltip" 
                                   data-placement="top" 
                                   title="" 
                                   data-original-title="Add to Cart"
                                   onClick={()=>this.onAddToCart(product)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
