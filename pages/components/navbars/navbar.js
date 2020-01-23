import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import ComponentStyleSheet from '../componentStyleSheet';

const NavBar = () => (
    <dev>
        <Card>
            <Card.Body>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home" style={ComponentStyleSheet.brand}>Muhalik</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto"></Nav>

                        <Form inline style={ ComponentStyleSheet.form } className="mr-auto">
                            <label className="mr-auto">Fuck</label>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '80%' }} className="mr-auto"></FormControl>
                            <Button style={{ background: 'none', border: 'none' }}>Search</Button>
                        </Form>

                        <Nav className>
                            <Nav.Link href="#home">Login/Signup</Nav.Link>
                            <Nav.Link href="#features">Orders</Nav.Link>
                            <Nav.Link href="#pricing">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Card.Body>
        </Card>
    </dev>
);

export default NavBar;