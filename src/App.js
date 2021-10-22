
import './App.css';
import Footer from './componente/Footer';
import Header from './componente/Header';
import StudenLists from './componente/StudenLists';
import Container from 'react-bootstrap/Container'

function App  () {
  return (
    <Container fluid >

       <Header/>
       <StudenLists/>
        <Footer/>

    </Container>
  );
}

export default App;
