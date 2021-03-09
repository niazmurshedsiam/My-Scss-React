import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const allProduct = [
    {name:'Lenovo', category:'laptop'}, {name:'Asus',category:'laptop'},{name:'Dell',category:'laptop'},
    {name:'Samsung', category:'mobile'}, {name:'Nokia',category:'mobile'},{name:'Apple',category:'mobile'},
    {name:'Canon', category:'camera'}, {name:'Nikkon',category:'camera'},{name:'Sony',category:'camera'},

]
const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const matchProduct = allProduct.filter(product => product.category.toLowerCase() ===  category.toLowerCase());
        setProducts(matchProduct);

    },[category])   
    return (
        <div>
            <h1>This is categories : {category}</h1>
            {
                products.map(product =><CategoryDetails product={product}></CategoryDetails>)
            }

        </div>
    );
};

export default Categories;