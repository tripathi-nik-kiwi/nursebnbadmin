import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Sidebar from '../Sidebar';
import classes from './layout.module.css';

const Layout = ({children}) => {
  return (
    <>
    <Container>
     <Row>
      <Col md={3} lg={3}>
       <Sidebar/>
      </Col>
      <Col md={9}>
        {children}
      </Col>
     </Row>
    </Container>
    </>
  );
};

export default Layout;
