import { Navbar, Nav, Form, InputGroup, FormControl, Image, Button, Card } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLanguage, faUser, faCartPlus, faPen, faSignOutAlt, faGlobe, faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import MuhalikConfig from '../../../../sdk/muhalik.config';
import axios from 'axios';
function Toolbar(props) {
    let dashboard = null;
    let login = null;

    if (props.token == 'vendor') {
        dashboard = <Nav.Link href='./vendor' style={styles.nav_link}>Vendor dashboard</Nav.Link>
        login = <Nav.Link onClick={props.logout} style={styles.nav_link}> Logout </Nav.Link>
    } else if (props.token == 'admin') {
        dashboard = <Nav.Link href='./admin' style={styles.nav_link}> Admin dashboard </Nav.Link>
        login = <Nav.Link onClick={props.logout} style={styles.nav_link}>
            <FontAwesomeIcon icon={faSignOutAlt} style={styles.nav_fontawesome} />
                    Logout
                </Nav.Link>
    } else if (props.token == 'customer') {
        login = <Nav.Link onClick={props.logout} style={styles.nav_link}> Logout </Nav.Link>
    } else {
        login =
            <>
                <Nav.Link href='./login' style={styles.nav_link}>
                    <FontAwesomeIcon icon={faUser} style={styles.nav_fontawesome} />
                    Login/Signup
                </Nav.Link>
                {/* <Nav.Link href='./vendor-signup'> Register_as_Shop </Nav.Link> */}
            </>
    }

    const all = React.useState('');

    return (
        <div>
            <Card>
                <Card.Body>
                    <Navbar collapseOnSelect expand="lg">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image src="muhalik.jpg" roundedCircle thumbnail fluid style={{ width: '80px', position: 'absolute' }} />
                            <h3 style={{ marginLeft: '100px' }} className="text-center">Muhalik</h3>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <InputGroup style={styles.search_div}>
                                <InputGroup.Prepend >
                                    <Form.Control
                                        style={styles.search_critera}
                                        as="select"
                                        name="countary"
                                        value={all}
                                        onChange={all}
                                    >
                                        <option>All</option>
                                        <option>Cloths</option>
                                        <option>Mobiles</option>
                                        <option>Laptops</option>
                                        <option>Electronics</option>
                                    </Form.Control>
                                </InputGroup.Prepend>
                                <FormControl style={styles.search_box} placeholder="Search here" />
                                <InputGroup.Append style={styles.append}>
                                    <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                    <Form.Label style={{ color: 'white', margin: '0px 0px 0px 10px', padding: '0px', fontSize: 'large' }}>
                                        Search
                                    </Form.Label>
                                </InputGroup.Append>
                            </InputGroup>
                            <Nav>
                                <Nav.Link href='./login' style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faGlobe} style={styles.nav_fontawesome} />
                                    ENG
                                </Nav.Link>
                                {login}
                                {dashboard}
                                <Nav.Link href="#" style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faPen} style={styles.nav_fontawesome} />
                                    Orders
                                </Nav.Link>
                                <Nav.Link href="#" style={styles.nav_link}>
                                    <FontAwesomeIcon icon={faLuggageCart} style={styles.nav_cart_fontawesome} />
                                    Cart
                                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Body>
            </Card>
        </div>
    )
}

Toolbar.getInitialProps = async ctx => {
    url = MuhalikConfig + '/api/products-categories/get-all'
    const url = MuhalikConfig.PATH + '/api/products-categories/get-all';
    try {
        const response = await axios.get(url);
        this.setState({ categoryList: response.data.data });
        return { searchCategory: response.data.data }
    } catch (error) {
        console.error(error);
        return null;
    }
    // const res = await fetch('')
    // const json = await res.json()

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
        margin: '0% 5% 0% 7%',
        // border: `1px solid ${GlobalStyleSheet.primry_color}`,
    },
    search_critera: {
        // background: `${GlobalStyleSheet.primry_color}`,
        border: `2px solid ${GlobalStyleSheet.primry_color}`,
        color: 'black',
        padding: '0px 10px',
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
        maxWidth: '18px',
    },

    nav_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '25px',
        height: '25px',
        maxHeight: '25px',
        maxWidth: '25px',
        marginBottom: '4px'
    },
    nav_cart_fontawesome: {
        color: `${GlobalStyleSheet.primry_color}`,
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
    },
    nav_link: {
        textAlign: 'center',
        fontSize: '14px'
    },

}

export default Toolbar;