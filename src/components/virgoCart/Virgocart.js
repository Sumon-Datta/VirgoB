import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Virgocart.css"

const Virgocart = (props) => {

    const [wishss, seWishss] = useState([])
    const {id,title,firstImage } = props.product;

   useEffect(()=>{
    fetch('pagin.json')
    .then(res => res.json())
    .then(data=> seWishss(data))
   },[])

    const navigate = useNavigate()
    
    const showfriendDetails = () =>{
        const path = `/product/${id}`
        navigate(path)
        
    }
    
    
    // const handleDemo = (product) =>{
    //     console.log(product);
    // }
    


    return (
        <div>
            <img src={firstImage} onClick={()=> props.handleaddToCart(props.product)} alt="" />
           <h3>{title}</h3>
            <button onClick={()=> props.handleToCart(props.product)} >cart</button> 
            <button onClick={()=> props.handleAdd(props.product)} >wish</button> 
             
           <button onClick={showfriendDetails} >Details</button>
            
        </div>
    );
};

export default Virgocart;