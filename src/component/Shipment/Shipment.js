import React from 'react';

const Shipment = (props) => {
    const {count} = props;
    return (
        <div>
            <h1>This is Shipment {count}</h1>
        </div>
    );
};

export default Shipment;