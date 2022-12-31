import React, { createContext } from 'react';
import { useState } from 'react';

const providerContexApi = createContext();

const ContextApi = ({children}) => {

    const [cart, setCart] = useState([]);


    return (
        <div>
            <providerContexApi.Provider value={{cart, setCart}} >{children}</providerContexApi.Provider>
        </div>
    );
};

export default ContextApi;