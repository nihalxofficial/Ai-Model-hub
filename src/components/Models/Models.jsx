import React, { use } from 'react';
import ModelsContainer from '../ModelsContainer/ModelsContainer';

const Models = ({modelPromise}) => {
    const models = use(modelPromise)    
    
    return (
        <div className='space-y-8'>
            <div className='text-center space-y-5'>
                <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
                <p className='text-gray-600 text-xl'>One subscription gives you access to all frontier AI models</p>
            </div>
            <ModelsContainer models={models}></ModelsContainer>
        </div>
    );
};

export default Models;