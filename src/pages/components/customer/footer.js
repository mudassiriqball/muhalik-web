import GlobalStyleSheet from '../../../styleSheet';
import { Row, Col, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCcVisa, faCcMastercard, faCcPaypal,
    faFacebook, faInstagram, faTwitter, faWhatsapp, faSnapchat
} from '@fortawesome/free-brands-svg-icons'

import translate from '../../../i18n/translate'


const Footer = () => (
    <div className='customer_footer'>
        <div style={styles.footer}>
            <p className="text-center">
                {translate('copyright')}
                <span style={{ fontSize: 'medium', fontWeight: 'bold', }}> {translate('mahaalk')} </span>
                - {translate('online_shopping_site')}
            </p>
            <Row style={styles.card} className='justify-content-center'>
                <Col className='justify-content-center'>
                    <h5>{translate('follow_us')}</h5>
                    <div className='social-media' >
                        <a><FontAwesomeIcon icon={faFacebook} onClick={() => { window.open('https://www.facebook.com/MUHALIK2020 ', "_blank") }} style={styles.fb_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faInstagram} onClick={() => { window.open('https://instagram.com/muhalik2020?igshid=sno76rv9kp60 ', "_blank") }} style={styles.instagram_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faTwitter} onClick={() => { window.open('https://twitter.com/muhalik2020?s=09 ', "_blank") }} style={styles.twitter_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faWhatsapp} onClick={() => { window.open('https://www.snapchat.com/add/muhalik2020', "_blank") }} style={styles.whatsapp_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faSnapchat} onClick={() => { window.open('https://www.snapchat.com/add/muhalik2020', "_blank") }} style={styles.snapchat_fontawesome} /></a>
                    </div>
                </Col>
                {/* <Col className='justify-content-center'>
                    <h5>{translate('payment_methods')}</h5>
                    <div className='social-media'>
                        <a><FontAwesomeIcon icon={faCcVisa} style={styles.visa_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faCcMastercard} style={styles.master_card_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faCcPaypal} style={styles.paypal_fontawesome} /></a>
                    </div>
                </Col> */}
            </Row>
            <Row noGutters style={{ padding: '4% 6%' }}>
                <div className='mr-auto'>
                    <div className='list_header'>{translate('services')}</div>
                    <div className='list_text'>{translate('need_help')}</div>
                    <div className='list_text'>{translate('contact_us')}</div>
                    <div className='list_text'>{translate('submit_issue')}</div>
                </div>
                <div className='mr-auto'>
                    <div className='list_header'>{translate('about_us')}</div>
                    <div className='list_text'>{translate('know_about_us')}</div>
                    <div className='list_text'>{translate('mahaalk_team')}</div>
                </div>

                <div className='mr-auto'>
                    <div className='list_header'>{translate('terms_conditions')}</div>
                </div>
                <div>
                    <div className='list_header'>{translate('sell_on_mahaalk')}</div>
                    <div className='list_text'>{translate('be_part_mahaalk')}</div>
                    <div className='list_text'>{translate('learn_more')}</div>
                </div>
            </Row>

        </div>
        <style jsx>{`
            .customer_footer {
            }
            .customer_footer .list_header {
                background: none;
                font-weight: bold;
                white-space: nowrap;
                color: ${GlobalStyleSheet.primary_text_color};
                font-size: 18px;
                margin-bottom: 8%;
            }
            .customer_footer .list_text {
                background: none;
                color: ${GlobalStyleSheet.primary_text_color};
                font-size: ${GlobalStyleSheet.form_label_fontsize};
                margin: 3% 0%;
                white-space: nowrap;
            }
            .customer_footer  p {
                color: white;
                font-size: ${GlobalStyleSheet.form_label_fontsize}
            }
            .customer_footer .social-media {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #e3edf7;
                border-radius: 5px
            }
            .customer_footer  h5{
                color: #e3edf7;
            }
            .customer_footer  a{
                display: flex;
                background: #e3edf7;
                border-radius: 5px;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                padding: 1%;
                margin: 2%;
                box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.30), -6px -6px 10px -1px rgba(255,255,255,0.30);
                border: 1px solid rgba(0,0,0,0);
                transition: transform 0.5s;

            }
            .customer_footer  a:hover{
                box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                            inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                            -0.5px -0.5px 0px rgba(255,255,255,1),
                            0.5px 0.5px 0px rgba(0,0,0,0.15),
                            0px 12px 10px -10px rgba(0,0,0,0.05);
                border: 1px solid rgba(0,0,0,0.01);
                transition: translateY(2px);
            }
            @media (max-width: 768px) {
                .customer_footer  .width {
                    max-width: 0px;
                    display: none
                }
            }
        `}</style>
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