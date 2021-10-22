import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import './Estilos.css';
import {Link} from 'react-router-dom'

function Header (){
    return(
        <Row id="Color_Head">
            <Col>
                <p><Link to='/' id="Color_Text">Store</Link></p>
             </Col>
            <Col>
                <p> <Link to= '/About' id="Color_Text"> About </Link></p>
            </Col>
            <Col>
                   <p>Cart</p>
            </Col>
        </Row>

    );
}

export default Header;

