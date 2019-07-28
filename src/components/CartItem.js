import React, { Component } from 'react';
import * as Message from "../constant/Message";
class CartItem extends Component {
    onDeleteCart=(product)=>{
        this.props.onDeleteCartItem(product)
        this.props.onChangeMessage(Message.MSG_DELETE_CART_SUCCESS)
    }
    updateProduct=(product,quatity)=>{
        if(quatity>0){
            this.props.onUpdateProduct(product,quatity)
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS)
        }
    }
    render() {
        var {items} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={items.product.img} alt={items.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{items.product.name}</strong>
                    </h5>
                </td>
                <td>{items.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{items.quatity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            onClick={()=>this.updateProduct(items.product,items.quatity-1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href="#.">—</a>
                        </label>
                        <label 
                            onClick={()=>this.updateProduct(items.product,items.quatity+1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href="#.">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.props.children}$</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick = {()=>this.onDeleteCart(items.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
