import { Nav } from "react-bootstrap"
import MyStyle from '../../styles/colorStyle';
const Sidebar = () => (
    <Nav defaultActiveKey="/home" className="flex-column" style={MyStyle.nav_background}>
        <Nav.Link style={ MyStyle.nav_background } href="/home">Active</Nav.Link>
        <Nav.Link style={ MyStyle.nav_background } eventKey="link-1">Link</Nav.Link>
        <Nav.Link style={ MyStyle.nav_background } eventKey="link-2">Link</Nav.Link>
        <Nav.Link style={ MyStyle.nav_background } eventKey="link-3">Disabled</Nav.Link>
    </Nav>
)

export default Sidebar;