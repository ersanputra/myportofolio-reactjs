import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
   
    return (
        <footer className="mt-auto py-3 bg-dark text-white">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Kelompok 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col md={3}>
                        <h6>Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">About</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6>Contact Us</h6>
                        <p>Indonesia</p>
                        <p>Email: example@example.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-2">
                        © 2023 Kelompok 2. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
