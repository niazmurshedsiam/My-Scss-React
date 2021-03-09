import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h1>This is categories : {category}</h1>
            <CategoryDetails></CategoryDetails>
        </div>
    );
};

export default Categories;