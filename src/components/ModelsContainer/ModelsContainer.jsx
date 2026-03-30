import React from 'react';
import ModelCard from '../ModelCard/ModelCard';

const ModelsContainer = ({models}) => {
    return (
        <div className='grid grid-cols-3 gap-8 w-10/12 mx-auto'>
            {models.map(model => <ModelCard model={model}></ModelCard>)}
        </div>
    );
};

export default ModelsContainer;