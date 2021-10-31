import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const MyOrder = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gentle-thicket-65790.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const url = `https://gentle-thicket-65790.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('Your order deleted');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
    }

    return (
        <div>
            <h2 className="mt-5">My Order</h2>
            <hr />
            <Container className="py-5 my-5">
                {
                    services?.map((service) => <Card
                        className="my-5 bg-light" key={service._id}>
                        <div className="py-5">
                            <img className="w-25" src={service.img} alt="" />
                            <h3>{service.name}</h3>
                            <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button>
                        </div>
                    </Card>)
                }
            </Container>
        </div>
    );
};

export default MyOrder;