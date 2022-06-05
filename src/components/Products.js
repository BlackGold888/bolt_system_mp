import React from 'react';
import Product from "./Product";
import logo from './logo.svg';
import {Link, useNavigate} from "react-router-dom";


function Products(props) {
    const { products, cart } = props;
    const navigate = useNavigate();
    function back(){
        props.cleanCart();
        navigate(-1);
    }

    function addToCart(id) {
        props.addTocart(id);
    }

    function renderCart(){
        let res = [];
        for (const key in cart) {
            res.push(<p key={cart[key].id}>{cart[key].name} x{cart[key].count} - {cart[key].price * cart[key].count} $</p>)
        }
        return res;
    }

    function renderTotalPrice() {
        let total = 0;
        for (const key in cart) {
            total += cart[key].price * cart[key].count;
        }
        return total;
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        focusOnSelect: false,
        pauseOnFocus: false,
        slide: 'div',
        swipe: false

    };
    return (
        <div className={'container'}>
            <img draggable={"false"} src={logo} className={'logo'} alt=""/>
            <button className={'back-btn cb-bolt-btn-action cb-bolt-btn-primary'} onClick={() => back()}>Back</button>
            <div className="products_box">
                {products.map(product => <Product key={product.id} addToCart={addToCart} removeFromCart={props.removeFromCart}  product={product} />)}
            </div>
            <hr className={'line'} />
            <h3>{cart ? 'Cart Items' : 'Cart Empty'}</h3>
            {renderCart()}
            <b>Total price: {renderTotalPrice()} $</b>
            <hr className={'line'} />
            <button className="cb-bolt-btn-action cb-bolt-btn-primary" onClick={() => props.buy()}>Buy</button>
        </div>
    );
}

export default Products;