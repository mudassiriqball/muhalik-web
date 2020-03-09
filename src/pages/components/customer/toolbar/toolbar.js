import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';
import Link from 'next/link';

const Toolbar = props => {
    let dashboard = null;
    let login = null;

    if (props.token == 'vendor') {
        dashboard = <Nav.Link href='./vendor'>Vendor dashboard</Nav.Link>
        login = <Nav.Link onClick={props.logout}> Logout </Nav.Link>
    } else if (props.token == 'admin') {
        dashboard = <Nav.Link href='./admin'> Admin dashboard </Nav.Link>
        login = <Nav.Link onClick={props.logout}> Logout </Nav.Link>
    } else if (props.token == 'customer') {
        login = <Nav.Link onClick={props.logout}> Logout </Nav.Link>
    } else {
        login =
            <>
                <Nav.Link href='./login'> Login/Signup </Nav.Link>
                <Nav.Link href='./vendor-signup'> Register as Shop </Nav.Link>
            </>
    }

    return (
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
                                {login}
                                {dashboard}
                                <Nav.Link href="#features">Orders</Nav.Link>
                                <Nav.Link href="#pricing">Cart</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Body>
            </Card>
        </div>
    )
}

const styles = {
    background: {
        background: `${GlobalStyleSheet.primry_color}`,
    },
    brand: {
        color: `${GlobalStyleSheet.primry_color}`,
        fontSize: 'medium'
    },
    form: {
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        width: '60%',
        borderRadius: '25px',
        padding: '0px 5px'
    }
}

export default Toolbar;