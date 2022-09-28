import React from "react";
import "./Search.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search(props){
    return (
        <section className="mb-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="bg-light p-3 rounded">
                            <Form>
                                <InputGroup>
                                    <Form.Control
                                    placeholder={props.placeholderText}
                                    aria-label="Search book"
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="primary" type="submit">Search</Button>
                                </InputGroup>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Search;  