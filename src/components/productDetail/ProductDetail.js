import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

const ProductDetail = () => {

    const [prod, setProd] = useState({})

    const {productId} = useParams()

    useEffect(()=>{
 
        fetch('https://api.jsonbin.io/v3/b/63ad557715ab31599e2740a4')
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            const product = data.record.find(p => p.id === +productId ) //eta r ek vabeo kora jay (p => p.id == productId) 
            console.log();          
            setProd(product)
         })
    },[])


    return (
        <div>
            <h2>this is detail about product : {productId}</h2>
            <h3>name: {prod.title}</h3>
            <img src={prod.firstImage} alt="" />
            <h4>{prod.price}</h4>
            
        </div>
    );
};

export default ProductDetail;