import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
        // <div id="services">
        //     <h2 className="text-primary mt-5">Our services</h2>
        //     <div className="service-container">
        //         {
        //             services.map(service => <Service
        //                 key={service.id}
        //                 service={service}
        //             ></Service>)
        //         }
        //     </div>
        // </div>
    );
};

export default Services;