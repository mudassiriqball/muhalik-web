import { Navbar, Dropdown, ButtonGroup, Button, Form } from 'react-bootstrap';
import GlobalStyleSheet from '../../../../styleSheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faChevronRight, faTachometerAlt, faPersonBooth, faUsers, faListAlt, faWarehouse, faTags, faPercent, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

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
  },
  search_btn: {
    background: `${GlobalStyleSheet.admin_primry_color}`,
    border: 'none',
},
  search_fontawesome: {
    color: `${GlobalStyleSheet.body_color}`,
    width: '15px',
    height: '15px',
    maxHeight: '15px',
    maxWidth: '15px',
},
}

const AdminToolbar = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" style={styles.background} variant="dark">
      <Navbar.Brand href="/" className="mr-auto" style={styles.brand}>Muhalik</Navbar.Brand>
      {/* <Navbar.Brand href="#home" className="mr-auto" style={styles.brand}>Admin Dashboard</Navbar.Brand> */}
      <Form.Row style={{ margin: '5px' }}>
                                    <Form.Control
                                        style={{ flex: '3' }}
                                        type="text"
                                        placeholder="Search here"
                                        aria-describedby="searchBtn"
                                        name="searchBtn"
                                    />
                                    <Button id="searchBtn" style={styles.search_btn}>
                                        <FontAwesomeIcon icon={faSearch} style={styles.search_fontawesome} />
                                    </Button>
                                </Form.Row>
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
