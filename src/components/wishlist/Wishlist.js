import React from 'react';

const Wishlist = (props) => {

    const {id, title, price} = props.wish;

    console.log(id);

    return (
        <div>
            <h1>This is wishlist part</h1>
            <h2>{id}</h2>
            

            
        </div>
    );
};

export default Wishlist;