import React from 'react';

function Product(props) {
    const { product } = props;
    return (
        <div className={'product'}>
            <div className="product__image">
                <img draggable={"false"} src={product.img} alt=""/>
            </div>
            <div className="product__desc">
                <p className={'product_price'}>{product.price} $</p>
                <div className={'actionButtons'}>
                    <button className="cb-bolt-btn-action cb-bolt-btn-primary" onClick={() => {props.addToCart(product.id)}}>+</button>
                    <p>{ product.count }</p>
                    <button className="cb-bolt-btn-action cb-bolt-btn-primary" onClick={() => {props.removeFromCart(product.id)}}>-</button>
                </div>
            </div>
        </div>
    );
}

export default Product;