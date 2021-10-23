import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function StudentForm (){
    
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body><form>
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
              
          </form></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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