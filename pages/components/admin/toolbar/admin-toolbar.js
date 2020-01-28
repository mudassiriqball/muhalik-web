import { Navbar, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';

const styles = {
  background: {
      background: `${GlobalStyleSheet.primry_color}`,
  },
  brand: {
      color: `${GlobalStyleSheet.primary_text_color}`,
      fontSize: 'medium',

  },
  form: {
      border: `2px solid ${GlobalStyleSheet.primry_color}`,
      width: '60%',
      borderRadius: '25px',
      padding: '0px 5px'
  }
}

const AdminToolbar = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" style={styles.background} variant="dark">
      <Navbar.Brand href="/" className="mr-auto" style={styles.brand}>Muhalik</Navbar.Brand>
      <Navbar.Brand href="#home" className="mr-auto" style={styles.brand}>Admin Dashboard</Navbar.Brand>

      <Dropdown as={ButtonGroup} alignRight>
        <Dropdown.Toggle size="sm" split variant="dark" id="dropdown-split" style={{background: 'none', border: 'none'}} />
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
