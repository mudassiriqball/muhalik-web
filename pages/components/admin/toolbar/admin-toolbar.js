import { Navbar, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';

const AdminToolbar = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" style={{ background: `${GlobalStyleSheet.primry_color}` }} variant="dark">
      <Navbar.Brand href="/" className="mr-auto">Muhalik</Navbar.Brand>
      <Navbar.Brand href="#home" className="mr-auto">Admin Dashboard</Navbar.Brand>

      <Dropdown as={ButtonGroup} alignRight>
        <Button variant="light">Settings</Button>
        <Dropdown.Toggle split variant="light" id="dropdown-split" />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Acount</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Feedback</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Help?</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Signout</Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
    </Navbar>
  </div>
);

export default AdminToolbar;

{/* 563D7C E35300 */ }
