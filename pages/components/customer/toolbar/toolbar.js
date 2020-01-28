import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';

const styles = {
    background: {
        background: `${GlobalStyleSheet.primry_color}`,
    },
    brand: {
        color: `${GlobalStyleSheet.primry_color}`,
        fontSize: '5px'
    },
    form: {
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        width: '60%',
        borderRadius: '25px',
        padding: '0px 5px'
    }
}

const Toolbar = () => (
    <div>
        <Card>
            <Card.Body>
                <Navbar collapseOnSelect expand="lg">

                    <Navbar.Brand href="#home" style={styles.brand}>Muhalik</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Form inline style={styles.form} className="mr-auto">
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
    </div>
);

export default Toolbar;