import { Navbar, Nav } from 'react-bootstrap';
import MyStyle from '../../styles/colorStyle';
const AdminNavbar = () => (
    <Navbar collapseOnSelect expand="lg" style={MyStyle.nav_background} variant="dark">
        <dev style={{flex: '1'}}><Navbar.Brand href="#home" >Muhalik</Navbar.Brand></dev>
        <dev style={{flex: '1'}}><Navbar.Brand href="#home" >Admin Dashboard</Navbar.Brand></dev>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Nav.Link href=""> Signout </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default AdminNavbar;

{/* 563D7C E35300 */ }
