import React from 'react';
import Products from "./Products";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";

// eslint-disable-next-line no-unused-expressions
let promiseResolve;
// eslint-disable-next-line no-unused-expressions
let promiseReject;

let  myPromise = new Promise((resolve, reject) => {
    window.promiseResolve = resolve;
    window.promiseReject = reject;
});

function Shop(props) {
    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([...props.products]);

    useEffect(() => {
        window.orderStatus = (data) => {
            data = JSON.parse(data)
            data.status ? window.promiseResolve() : window.promiseReject();
        };

    });
    function addToCart(id){
        let tempCart = {...cart};
        if (tempCart[id]) {
            tempCart[id].count++;
            setCart({...tempCart});
        }else {
            tempCart[id] = products[id];
            tempCart[id].count++;
            setCart({ ...tempCart });
        }
    }

    function removeFromCart(id) {
        let tempCart = {...cart};
        if (!tempCart[id]) return;
        tempCart[id].count--;
        if (!tempCart[id].count) {
            delete tempCart[id];
        }
        setCart({...tempCart});
    }

    async function buy(){
        let total = 0;
        if (!Object.keys(cart).length) return;

        for (const key in cart) {
            total += cart[key].price * cart[key].count;
        }
        products.forEach(product => product.count = 0);
        // eslint-disable-next-line
        //mp.trigger('bolt.system.buy', JSON.stringify({total, cart}));

        setCart({});
        await toast.promise(myPromise, {
            pending: "Promise is pending",
            success: "Заказ принят",
            error: "Закан откланён проверьте баланс"
        });
    }

    function cleatCart() {
        setCart({});
        products.forEach(product => product.count = 0);
    }

    return (
        <div>
            <Products cart={cart} cleanCart={cleatCart} buy={buy} products={props.products} removeFromCart={removeFromCart} addTocart={addToCart} />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme={'dark'}
            />
        </div>
    );
}

export default Shop;