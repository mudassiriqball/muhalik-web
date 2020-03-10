import { Navbar, Nav, Form, InputGroup, FormControl,Image, Button, Card } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
                <Nav.Link href='./vendor-signup'> Register_as_Shop </Nav.Link>
            </>
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <Navbar collapseOnSelect expand="lg">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '80px', position: 'absolute' }} />
                            <h3 style={{marginLeft: '100px'}} className="text-center">Muhalik</h3>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"></Nav>
                            <InputGroup style={styles.search_div}>
                                <InputGroup.Prepend style={styles.prepend}>
                                    <FontAwesomeIcon icon={faSearch} style={styles.fontawesome} />
                                </InputGroup.Prepend>
                                <FormControl style={styles.search_box} />
                                <InputGroup.Append style={styles.append}>
                                    <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                    <Form.Label style={{ color: 'white', margin: '0px 0px 0px 10px', padding: '0px', fontSize: 'large' }}>
                                        Search
                                    </Form.Label>
                                </InputGroup.Append>
                            </InputGroup>
                            <Nav>
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
    },
    search_div: {
        margin: '0% 2% 0% 4%',
        // border: `1px solid ${GlobalStyleSheet.primry_color}`,
    },
    prepend: {
        // background: `${GlobalStyleSheet.primry_color}`,
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        color: 'black',
        padding: '0px 25px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
    },
    fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18x',
    },

    search_box: {
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
    },

    append: {
        background: `${GlobalStyleSheet.primry_color}`,
        padding: '0px 25px',
        display: 'flex',
        alignItems: 'center',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
    },
    search_fontawesome: {
        color: `${GlobalStyleSheet.primary_text_color}`,
        width: '18px',
        height: '18px',
        maxHeight: '18px',
        maxWidth: '18x',
    },

}

export default Toolbar;