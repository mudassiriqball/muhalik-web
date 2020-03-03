import React from 'react'
import fetch from 'isomorphic-unfetch'

import { Row, Col, Card, Tabs, Tab, Button } from 'react-bootstrap'
// american-sign-language-interpreting
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'

class Inventory extends React.Component {
    // static async getInitialProps(ctx) {
    //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
    //     const json = await res.json()
    //     return { stars: 10 }
    // }

    render() {
        return (
            <div>
                <Row>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <p>Fuck</p>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <p>Fuck</p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            <p>Fuck</p>
                        </Tab>
                    </Tabs>
                </Row>
                <style jsx>
                    {`
                    
                    `}
                </style>
            </div>
        )
    }
}

const styles = {
    row: {
        margin: '2%',
        padding: '0px'
    },
}

export default Inventory;