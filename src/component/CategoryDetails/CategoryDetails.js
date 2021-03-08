import React from 'react';

const CategoryDetails = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is CategoryDetails {count}</h1>
        </div>
    );
};

export default CategoryDetails;