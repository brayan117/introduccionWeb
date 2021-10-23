import React from "react";
import StudenItem from "./StudenItem";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentForm from "./StudentForm";

const StudenLists =()=>{

    const students =[{nombre: "alvaro", programa: "ingenieria de sistemas", semestre: 4}
                    ,{nombre: "jose", programa: "ingenieria de sistemas", semestre: 5},
                    {nombre: "luis", programa: "ingenieria de sistemas", semestre: 6},
                    {nombre: "camilo", programa: "ingenieria de sistemas", semestre: 8},
                    {nombre: "liz", programa: "ingenieria de sistemas", semestre: 1}
                
                ]
    return(
        <>
        <Row>
             <StudentForm/>
        </Row>

          <Row className ="border">
            <Col>
            
           {
               
            students.map(s=> (
                  
                <StudenItem student ={s}/>
            ))

           }
             </Col>
           </Row>
        </>
    );
}

export default StudenLists