import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = () => {
    
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>This is CategoryDetails : {category}</h1>
        </div>
    );
};

export default CategoryDetails;