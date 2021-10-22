import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../CSS/misEstilos.css'
const StudenItem =(propiedad)=>{
    const {nombre, programa, semestre} = propiedad.student
    return(
        <Row>
            <Col md={2} sm={2}>
                <img src="http://bootdey.com/img/Content/avatar/avatar7.png" className="avatar"/>
            </Col>
            <Col md={7} sm={7}>
                <h5>{nombre}</h5>
                <p>{programa}</p>
                <p className ="text-muted">{semestre}</p>
            </Col> 
            <Col md={3}>
                <Button variant = "primary" size ="sm">ver detalles</Button>
            </Col>
        </Row>
    );
}

export default StudenItem