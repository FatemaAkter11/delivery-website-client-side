import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gentle-thicket-65790.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (

        <div>
            <Container className="py-5">
                <Row>
                    {services?.map((service) => (
                        <Service
                            service={service}
                            key={service.id}>
                        </Service>
                    ))}
                </Row>
            </Container>
        </div>

    );
};

export default Services;