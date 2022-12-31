import React, { useState } from 'react';

const Counter = () => {

    const [value, setValue] = useState(1);


    const increase = () =>{
      if(value >= 10){
        setValue(10)
      }
      else{
        setValue(value+1)
      } 
    }
  
    const decrease = () =>{
      if(value <= 1){
        setValue(1)
  
      
         
      }
      else{
        setValue(value-1)
      } 
    }



    return (
        <div className="valueupanddown">
      <button className="button" onClick={decrease}>
        Decrease
      </button>
      <h3 className="value">{value}</h3>
      <button className="button" onClick={increase}>
        Increase
      </button>

      
    </div>
    );
};

export default Counter;