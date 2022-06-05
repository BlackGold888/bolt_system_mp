import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div className={'container'}>
            All shops
            {props.shops.map(shop => <Link className={'link cb-bolt-btn-action cb-bolt-btn-primary'} key={shop.id} to={'shop/' + shop.id}>{shop.name}</Link>)}
        </div>
    );
}

export default Home;