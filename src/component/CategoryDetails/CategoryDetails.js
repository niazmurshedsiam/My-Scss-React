import React from 'react';


const CategoryDetails = (props) => {
    
   const {name,category} = props.product;
    return (
        <div>
            <h1>This is Product Name : {name}</h1>
            <h3>This is Category Type : {category}</h3>
        </div>
    );
};

export default CategoryDetails;