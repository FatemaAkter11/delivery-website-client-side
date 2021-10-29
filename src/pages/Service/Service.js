import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, description, img } = service;
    return (
        <Col sm={12} md={6} lg={4}>
            <div className="m-2">
                <Card className="mx-auto card" style={{ width: "21rem" }}>
                    <Card.Img variant="top" className="img-fluid mx-auto" src={img} />
                    <Card.Body className="my-1 py-1">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <Card.Body className="d-flex">
                        <NavLink
                            to={`/services/${_id}`}
                            className="btn btn-primary w-100 me-1"
                        >
                            Order Place
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default Service;