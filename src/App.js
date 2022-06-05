import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import shop from "./components/Shop";
// You can fetch it from server up to you
const shops = [
    {
        id: 1,
        name: 'Shop 24/7 #1',
        position: {x: 0, y: 0, z: 0},
        products: [
            {
                id: 0,
                name: 'Burger',
                img: '/products/burger.png',
                price: 100,
                count: 0
            },
            {
                id: 1,
                name: 'Cola',
                img: '/products/cola.png',
                price: 200,
                count: 0

            },
            {
                id: 2,
                name: 'Fries',
                img: '/products/fries.png',
                price: 300,
                count: 0
            },
        ]
    },
    {
        id: 2,
        name: 'Shop 24/7 #2',
        position: {x: 0, y: 0, z: 0},
        products: [
            {
                id: 0,
                name: 'Burger',
                img: '/products/burger.png',
                price: 100,
                count: 0
            },
            {
                id: 1,
                name: 'Cola',
                img: '/products/cola.png',
                price: 200,
                count: 0

            },
            {
                id: 2,
                name: 'Fries',
                img: '/products/fries.png',
                price: 300,
                count: 0
            },
        ]
    }
]

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home shops={shops} />} />
                    {shops.map(shop => <Route key={shop.id} path={'shop/' + shop.id}
                                              element={<Shop products={shop.products}/>}/>)}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
