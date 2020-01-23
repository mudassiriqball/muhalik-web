import { Navbar, Nav } from 'react-bootstrap';
import MyStyle from '../../global-styles/styleSheet';
import AdminStyleSheet from '../../admin/adminStyleSheet';

const AdminNavbar = () => (
  <Navbar collapseOnSelect expand="lg" style={AdminStyleSheet.background} variant="dark">
    <div style={{ flex: '1' }}><Navbar.Brand href="#home" >Muhalik</Navbar.Brand></div>
    <div style={{ flex: '1' }}><Navbar.Brand href="#home" >Admin Dashboard</Navbar.Brand></div>
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
