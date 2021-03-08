import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is categories : {count}</h1>
            <CategoryDetails count={count}></CategoryDetails>
        </div>
    );
};

export default Categories;