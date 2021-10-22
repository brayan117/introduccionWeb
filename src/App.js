import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

import {BrowserRouter } from 'react-router-dom';
import MisRoutes from './MisRutas';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header/>
        <MisRoutes/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
