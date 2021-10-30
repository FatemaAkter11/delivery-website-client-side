import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const OrderPlace = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="my-5">
            <h2>Title of: {service.name}</h2>
            <h2>This is OrderPlace: {serviceId} </h2>
        </div>
    );
};

export default OrderPlace;