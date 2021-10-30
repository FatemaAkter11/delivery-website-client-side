import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Link to={`/orderplace/${_id}`}>
                            <button className="btn btn-warning">Order {name.toLowerCase()}</button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </Col>
        // <div className="service pb-3">
        //     <img src={img} alt="" />
        //     <h3>{name}</h3>
        //     <p className="px-3">{description}</p>
        //     <Link to={`/orderplace/${_id}`}>
        //         <button className="btn btn-warning">Book {name.toLowerCase()}</button>
        //     </Link>
        // </div>
    );
};

export default Service;