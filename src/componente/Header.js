import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header =()=>{
    return(
      <Row> 
        <Col className="py5 text-center">
           <h1>Gestion de estudiantes</h1>
           <span>Crear/consultar/actualizar/Eliminar</span>
        </Col>
      </Row>
    );
}

export default Header