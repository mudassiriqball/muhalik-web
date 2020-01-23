import { Card } from 'react-bootstrap';
import ComponentStyleSheet from '../componentStyleSheet';

const Footer = () => (
    <div>
        <Card style={ComponentStyleSheet.footer}>
            <p className="text-center">
                Copyright@ 2020
                    <span> Muhalik </span>
                - Online Shopping Website
            </p>
        </Card>
        <style jsx>{`
            div {
                position: absolute;
                left: 0;
                bottom: 0; 
                right: 0;
            }
            p {
                font-size: smaller;
            }
            span {
                font-size: medium;
                font-weight: bold;
            }
        `}</style>
    </div>
)

export default Footer;