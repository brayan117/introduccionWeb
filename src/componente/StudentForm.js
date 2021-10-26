import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function StudentForm (props){
  
  const [show, setShow] = useState(false);
      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const estadoInicial =
{
  nombre:"", programa:"",semestre:""
}    

const [estadoForm, cambiarEstadoForm] = useState(estadoInicial);

const gestionarCamposForm = e =>{
    const {name, value}= e.target;
    cambiarEstadoForm ({...estadoForm,[name]:value});
}

const onSubmitForm = ev =>{
   ev.preventDefault();
   props.agregar(estadoForm);
    
}

      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}   onSubmit={onSubmitForm}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body><form >
              <div className="mb-3">
              <label htmlFor ="nameStudent" className="form-label"  >Name</label>
              <input type="text" name ="nombre" className="form-control" id="nameStudent" value={estadoForm.nombre} onChange={gestionarCamposForm} />
              </div>
              <div className="mb-3">
              <label htmlFor ="program" className="form-label">Programa</label>
              <input type="text" name="programa" className="form-control" id="program" value={estadoForm.programa} onChange={gestionarCamposForm}/>
              </div>
              <div classNamea="mb-3">
              <label htmlFor ="grade" className="form-label">semestre</label>
              <input type="text" name="semestre" className="form-control" id="grade" value={estadoForm.semestre} onChange={gestionarCamposForm}/>
              </div>
              
          </form></Modal.Body >
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" onClick={onSubmitForm}>
                  Agregar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      
      
      
}








/*
<form>
              <div className="mb-3">
              <label htmlFor ="nameStudent" className="form-label">Name</label>
              <input type="text" className="form-control" id="nameStudent"/>
              </div>
              <div className="mb-3">
              <label htmlFor ="program" className="form-label">Programa</label>
              <input type="text" className="form-control" id="program"/>
              </div>
              <div classNamea="mb-3">
              <label htmlFor ="grade" className="form-label">semestre</label>
              <input type="text" className="form-control" id="grade"/>
              </div>
              <div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
          </form>
*/