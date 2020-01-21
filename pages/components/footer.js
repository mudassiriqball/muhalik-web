import { Card } from 'react-bootstrap';
import MyStyle from '../styles/colorStyle';

const Footer = () => (
    <dev style={{ position: 'absolute', left: '0', bottom: '0', right: '0' }}>
        <Card style={MyStyle.nav_background}>
            <Card.Body>
                <Card.Text className="text-center" style={{ color: 'white' }}>
                    Copyright@ 2020
                <span style={{ fontWeight: 'bolder', fontSize: 'larger' }}> Muhalik </span>
                    - Online Shopping Website
            </Card.Text>
            </Card.Body>
        </Card>
    </dev>
)

export default Footer;