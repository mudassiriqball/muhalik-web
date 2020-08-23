import GlobalStyleSheet from '../../../styleSheet';
import { Row, Col, Button, Card, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCcVisa, faCcMastercard, faCcPaypal,
    faFacebook, faInstagram, faTwitter, faWhatsapp, faSnapchat
} from '@fortawesome/free-brands-svg-icons'

import translate from '../../../i18n/translate'
import Router from 'next/router';
import Link from 'next/link';

const Footer = (props) => (
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
                    <div className='social_media' >
                        <Link href=''>
                            <a onClick={() => { window.open('https://www.facebook.com/100541481714856?referrer', "_blank") }} ><FontAwesomeIcon icon={faFacebook} style={styles.fb_fontawesome} /></a>
                        </Link>
                        <Link href=''>
                            <a onClick={() => { window.open('https://instagram.com/_mahaalk_?igshid=tdrpxj409274', "_blank") }}><FontAwesomeIcon icon={faInstagram} style={styles.instagram_fontawesome} /></a>
                        </Link>
                        <Link href=''>
                            <a onClick={() => { window.open('https://twitter.com/_mahaalk_?s=09', "_blank") }} ><FontAwesomeIcon icon={faTwitter} style={styles.twitter_fontawesome} /></a>
                        </Link>
                        <Link href=''>
                            <a onClick={() => { window.open('https://wa.me/966580512078', "_blank") }} ><FontAwesomeIcon icon={faWhatsapp} style={styles.whatsapp_fontawesome} /></a>
                        </Link>
                        <Link href=''>
                            <a onClick={() => { window.open('https://www.snapchat.com/add/muhalik2020', "_blank") }}><FontAwesomeIcon icon={faSnapchat} style={styles.snapchat_fontawesome} /></a>
                        </Link>
                    </div>
                </Col>
                {/* <Col className='justify-content-center'>
                    <h5>{translate('payment_methods')}</h5>
                    <div className='social_media'>
                        <a><FontAwesomeIcon icon={faCcVisa} style={styles.visa_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faCcMastercard} style={styles.master_card_fontawesome} /></a>
                        <a><FontAwesomeIcon icon={faCcPaypal} style={styles.paypal_fontawesome} /></a>
                    </div>
                </Col> */}
            </Row>
            <Row noGutters style={{ padding: '4% 6%' }}>
                <div className='mr-auto d-flex flex-column'>
                    <Link href='/services'>
                        <a className='list_header'>{translate('services')}</a>
                    </Link>
                    <Link href='/help'>
                        <a className='list_text'>{translate('need_help')}</a>
                    </Link>
                    <Link href='/contact-us'>
                        <a className='list_text'>{translate('contact_us')}</a>
                    </Link>
                    <Link href='/submit-issue'>
                        <a className='list_text'>{translate('submit_issue')}</a>
                    </Link>
                </div>
                <div className='mr-auto  d-flex flex-column'>
                    <Link href='/about-us'>
                        <a className='list_header'>{translate('about_us')}</a>
                    </Link>
                    <Link href='/about-us'>
                        <a className='list_text'>{translate('know_about_us')}</a>
                    </Link>
                </div>

                <div className='mr-auto d-flex flex-column'>
                    <Link href='/terms-and-conditions'>
                        <a className='list_header'>{translate('terms_conditions')}</a>
                    </Link>
                    <Link href='/privacy-statement'>
                        <a className='list_text'>{translate('privacy_statement')}</a>
                    </Link>
                </div>
                {props.role == '' || props.role == 'customer' &&
                    <div className='d-flex flex-column'>
                        <Link href='/vendor-signup'>
                            <a className='list_header'>{translate('sell_on_mahaalk')}</a>
                        </Link>
                        <Link href='/learn-more'>
                            <a className='list_text'>{translate('learn_more')}</a>
                        </Link>
                    </div>
                }
            </Row>
            <hr />
            <Row noGutters style={{ padding: '1% 6%' }}>
                {props.categories_list && props.categories_list.map((element, index) =>
                    <Col key={index} lg={3} md={4} sm={6} xs={12} style={{ paddingBottom: '4%' }}>
                        <Link href='/products/category/[category]' as={`/products/category/${element.value}`}>
                            <a className='list_header category_header'>{element.value}</a>
                        </Link>
                        {props.sub_categories_list && props.sub_categories_list.map((e, i) =>
                            element._id == e.category_id ?
                                <div key={i}>
                                    <Link href='/products/category/[category]/[sub_category]' as={`/products/category/${element.value}/${e.value}`} >
                                        <a className='list_text'>{e.value}</a>
                                    </Link>
                                </div>
                                :
                                null
                        )}
                    </Col>
                )}
                <hr />
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
                cursor: pointer;
                paddding: 3% 5%;
            }
            .customer_footer .list_header:hover {
                color: #4d4dff;
            }
            .customer_footer .list_text {
                background: none;
                color: ${GlobalStyleSheet.primary_text_color};
                font-size: ${GlobalStyleSheet.form_label_fontsize};
                margin: 3% 5%;
                white-space: nowrap;
                cursor: pointer;
            }
            .customer_footer .list_text:hover {
                color: #4d4dff;
            }
            .customer_footer  p {
                color: white;
                font-size: ${GlobalStyleSheet.form_label_fontsize}
            }
            .customer_footer .social_media {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #e3edf7;
                border-radius: 5px
            }
            .customer_footer  h5{
                color: #e3edf7;
            }
            .customer_footer  .social_media a {
                display: flex;
                background: #e3edf7;
                border-radius: 5px;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                padding: 1%;
                margin: 2%;
                box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.30), -6px -6px 10px -1px rgba(255,255,255,0.70);
                border: 1px solid rgba(0,0,0,0);
                transition: transform 0.5s;
                cusror: pointer;

            }
            .customer_footer .social_media a:hover{
                box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                            inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                            -0.5px -0.5px 0px rgba(255,255,255,1),
                            0.5px 0.5px 0px rgba(0,0,0,0.15),
                            0px 12px 10px -10px rgba(0,0,0,0.05);
                border: 1px solid rgba(0,0,0,0.01);
                transition: translateY(2px);
            }



            .category_header {
                display: flex;
                background: #e3edf7;
                border-radius: 5px;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                padding: 1%;
                margin: 3%;
                box-shadow: inset 6px 6px 10px -1px rgba(255,255,255,0.20), inset -6px -6px 10px -1px rgba(0,0,0,0.30);
                border: 1px solid rgba(0,0,0,0);
                transition: transform 0.5s;
                cusror: pointer;

            }
            .category_header:hover{
                box-shadow: inset 6px 6px 10px -1px rgba(0,0,0,0.30), inset -6px -6px 10px -1px rgba(255,255,255,0.20);
                border: 1px solid rgba(0,0,0,0.0);
                transition: translateY(2px);
            }
            
            @media (max-width: 768px) {
                .customer_footer  .width {
                    max-width: 0px;
                    display: none
                }
            }
        `}</style>
    </div >
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