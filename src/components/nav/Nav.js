import './nav.scss';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';

function Nav() { 
    return(
    <nav>
        <Container>
    <Navbar className="bg-white justify-content-between" md={{ span: 4, offset: 8 }}>
    <Form inline>
        <FormControl type="text" placeholder="example: google.com" className=" mr-sm-2" />
        <Button type="submit" variant="primary">Ieškoti</Button>
    </Form>
    </Navbar>
    </Container>
    </nav>
    )
 }
export default Nav;