import React, { use, useState } from 'react';
import ModelsContainer from '../ModelsContainer/ModelsContainer';
import Cart from '../Cart/Cart';

const Models = ({modelPromise}) => {
    const models = use(modelPromise) 
    const [handleTab, setHandleTab] = useState("ModelsContainer")
    
    return (
        <div className=''>
            <div className='flex justify-center gap-15 my-12'>
                <button onClick={()=>setHandleTab("ModelsContainer")} className={handleTab==="ModelsContainer"? "btn bg-linear-to-r from-red-600 to-orange-400 text-white text-lg rounded-3xl px-15 py-5 cursor-pointer" : "cursor-pointer"}>Models</button>
                <button onClick={()=>setHandleTab("Cart")} className={handleTab==="Cart"? "btn bg-linear-to-r from-red-600 to-orange-400 text-white text-lg rounded-3xl px-15 py-5 cursor-pointer" : "cursor-pointer"}>Cart (0)</button>
            </div>
            {handleTab === "ModelsContainer"? <ModelsContainer models={models}></ModelsContainer> 
            : <Cart></Cart>}
            
            

        </div>
    );
};

export default Models;