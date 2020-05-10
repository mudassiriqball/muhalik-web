import GlobalStyleSheet from '../../../styleSheet';
import { Row, Col, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCcVisa, faCcMastercard, faCcPaypal,
    faFacebook, faInstagram, faTwitter, faWhatsapp, faSnapchat
} from '@fortawesome/free-brands-svg-icons'
const Footer = () => (
    <div>
        <div style={styles.footer}>
            <p className="text-center">
                Copyright@ 2020
                    <span style={{ fontSize: 'medium', fontWeight: 'bold', }}> Muhalik </span>
                - Online Shopping Website
            </p>
            <Card style={styles.card}>
                <Card.Body>
                    <Row>
                        <div className='mr-auto'></div>
                        <div className='flex_row' >
                            <div style={{ marginBottom: '2%' }}>Follow Muhalik</div>
                            <FontAwesomeIcon icon={faFacebook} onClick={() => { window.open('https://www.facebook.com/MUHALIK2020 ', "_blank") }} style={styles.fb_fontawesome} />
                            <FontAwesomeIcon icon={faInstagram} onClick={() => { window.open('https://instagram.com/muhalik2020?igshid=sno76rv9kp60 ', "_blank") }} style={styles.instagram_fontawesome} />
                            <FontAwesomeIcon icon={faTwitter} onClick={() => { window.open('https://twitter.com/muhalik2020?s=09 ', "_blank") }} style={styles.twitter_fontawesome} />
                            <FontAwesomeIcon icon={faWhatsapp} onClick={() => { window.open('https://www.snapchat.com/add/muhalik2020', "_blank") }} style={styles.whatsapp_fontawesome} />
                            <FontAwesomeIcon icon={faSnapchat} onClick={() => { window.open('https://www.snapchat.com/add/muhalik2020', "_blank") }} style={styles.snapchat_fontawesome} />
                            {/* <Button style={{ background: 'linear-gradient(to right bottom, #7C48BD, #F15B40)', margin: '1% 2% 0% 0%' }}>Instagram</Button> */}
                        </div>
                        <div className='mr-auto width'></div>
                        <div className='flex_row'>
                            <div style={{ marginBottom: '1.5%' }}>Payment Methods</div>
                            <FontAwesomeIcon icon={faCcVisa} style={styles.visa_fontawesome} />
                            <FontAwesomeIcon icon={faCcMastercard} style={styles.master_card_fontawesome} />
                            <FontAwesomeIcon icon={faCcPaypal} style={styles.paypal_fontawesome} />
                        </div>
                        <div className='mr-auto'></div>
                    </Row>
                </Card.Body>
            </Card>
            <Row noGutters style={{ padding: '4% 6%' }}>
                <div className='mr-auto'>
                    <div className='list_header'>Services</div>
                    <div className='list_text'>Need Help?</div>
                    <div className='list_text'>Contact Us</div>
                    <div className='list_text'>Submit Issue</div>
                </div>
                <div className='mr-auto'>
                    <div className='list_header'>About Us</div>
                    <div className='list_text'>Know More About Us</div>
                    <div className='list_text'>Muhalik's Team</div>
                </div>

                <div className='mr-auto'>
                    <div className='list_header'>Terms & Conditions</div>
                    <div className='list_text'>Terms</div>
                    <div className='list_text'>Conditions</div>
                    <div className='list_text'>Rules & Regulations</div>
                </div>
                <div>
                    <div className='list_header'>Sell With Us</div>
                    <div className='list_text'>Be Muhalik's Part</div>
                    <div className='list_text'>Learn More</div>
                </div>
            </Row>

        </div>
        <style jsx>
            {`
                .list_header {
                    background: none;
                    font-weight: bold;
                    white-space: nowrap;
                    color: ${GlobalStyleSheet.primary_text_color};
                    font-size: 18px;
                    margin-bottom: 8%;
                }
                .list_text {
                    background: none;
                    color: ${GlobalStyleSheet.primary_text_color};
                    font-size: ${GlobalStyleSheet.form_label_fontsize};
                    margin: 3% 0%;
                    white-space: nowrap;
                }
                p {
                    color: white;
                    font-size: ${GlobalStyleSheet.form_label_fontsize}
                }
                .flex_row {
                    display: flex;
                    align-items: center;
                    f
                    lex-direction: row;
                }
                @media (max-width: 768px) {
                    .width {
                        max-width: 0px;
                        display: none
                    }
                }
            `}
        </style>
    </div>
)

const styles = {
    footer: {
        background: `${GlobalStyleSheet.admin_primry_color}`,
        padding: '2% 5%'
    },
    card: {
        margin: '0% 5%'
    },

    fb_fontawesome: {
        marginRight: '6%',
        color: '#3B579D',
        width: '40px',
        height: '40px',
        maxHeight: '40px',
        maxWidth: '40px',
    },
    instagram_fontawesome: {
        marginRight: '6%',
        color: '#C9308A',
        width: '40px',
        height: '40px',
        maxHeight: '40px',
        maxWidth: '40px',
    },
    twitter_fontawesome: {
        marginRight: '6%',
        color: '#5EAADE',
        width: '40px',
        height: '40px',
        maxHeight: '40px',
        maxWidth: '40px',
    },
    whatsapp_fontawesome: {
        marginRight: '6%',
        color: '#4DC759',
        width: '40px',
        height: '40px',
        maxHeight: '40px',
        maxWidth: '40px',
    },
    snapchat_fontawesome: {
        marginRight: '6%',
        color: '#e6e600',
        width: '44px',
        height: '44px',
        maxHeight: '44px',
        maxWidth: '44px',
    },

    visa_fontawesome: {
        marginRight: '6%',
        color: '#202276',
        width: '45px',
        height: '45px',
        maxHeight: '45px',
        maxWidth: '45px',
    },
    master_card_fontawesome: {
        marginRight: '6%',
        color: '#FF5F01',
        width: '45px',
        height: '45px',
        maxHeight: '45px',
        maxWidth: '45px',
    },
    paypal_fontawesome: {
        marginRight: '6%',
        color: '#059CDE',
        width: '45px',
        height: '45px',
        maxHeight: '45px',
        maxWidth: '45px',
    },
}

export default Footer;