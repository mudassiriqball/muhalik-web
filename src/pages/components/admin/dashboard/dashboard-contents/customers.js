import React from 'react'
import axios from 'axios'
import { Row, Col, Card, Nav, Table, Form, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faSlidersH, faPersonBooth, faBan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row';
import CardAccordion from '../../../card_accordion'
import ConfirmModal from '../../../confirm-modal'
import AlertModal from '../../../alert-modal'
import MuhalikConfig from '../../../../../sdk/muhalik.config'


class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewVendor: false,
            isNewVendor: false,

            restrictConfirmModal: false,
            unrestrictConfirmModal: false,

            showAlertModal: false,
            alertMessage: '',

            customers_list: [],
            restricted_customers_list: [],

            single_customer: {},
            token: null,
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const array = [];
        nextProps.customers_list.forEach((element, index) => {
            if (element.status != 'restricted') {
                array.push(element)
            }
        })
        this.setState({
            customers_list: array,
            restricted_customers_list: nextProps.restricted_customers_list,
            token: nextProps.token
        });
    }

    async handleRestrict() {
        console.log('handleRestrict: _id =', this.state.single_customer._id)
        this.setState({ restrictConfirmModal: false })
        const url = MuhalikConfig.PATH + `/api/users/status/${this.state.single_customer._id}`;
        let data = [];
        const currentComponent = this
        data = {
            status: 'restricted'
        }
        await axios.put(url, data, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            let copyArray_1 = Object.assign([], currentComponent.state.customers_list);
            let copyArray_2 = Object.assign([], currentComponent.state.restricted_customers_list);

            currentComponent.state.customers_list.forEach((element, index) => {
                if (element._id == currentComponent.state.single_customer._id) {
                    element.status = 'restricted'
                    copyArray_1.splice(index, 1)
                    copyArray_2.push(element)
                }
            })
            currentComponent.setState({
                customers_list: copyArray_1,
                restricted_customers_list: copyArray_2,
                showAlertModal: true,
                alertMessage: 'User Restricted Successfully',
            })
        }).catch(function (error) {
            alert('User Restrict Failed: ', error.response.data.message);
            console.log('User Restrict Failed:', error)
        });
    }

    async handleUnrestrict() {
        this.setState({ unrestrictConfirmModal: false })
        const url = MuhalikConfig.PATH + `/api/users/status/${this.state.single_customer._id}`;
        let data = [];
        const currentComponent = this
        data = {
            status: 'approved'
        }
        await axios.put(url, data, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            let copyArray_1 = Object.assign([], currentComponent.state.restricted_customers_list);
            let copyArray_2 = Object.assign([], currentComponent.state.customers_list);

            currentComponent.state.restricted_customers_list.forEach((element, index) => {
                if (element._id == currentComponent.state.single_customer._id) {
                    element.status = 'approved'
                    copyArray_1.splice(index, 1)
                    copyArray_2.push(element)
                }
            })
            currentComponent.setState({
                restricted_customers_list: copyArray_1,
                customers_list: copyArray_2,
                showAlertModal: true,
                alertMessage: 'User Unrestricted Successfully',
            })
        }).catch(function (error) {
            alert('User Unrestrict Failed: ', error.response.data.message);
            console.log('User Unrestrict Failed:', error)
        });
    }

    render() {
        return (
            <div className='vendors'>
                <AlertModal
                    onHide={(e) => this.setState({ showAlertModal: false })}
                    show={this.state.showAlertModal}
                    header={'Success'}
                    message={this.state.alertMessage}
                    iconname={faThumbsUp}
                    color={'green'}
                />

                {/* Restrict/Block Customer Confirm Modal */}
                <ConfirmModal
                    onHide={() => this.setState({ restrictConfirmModal: false })}
                    show={this.state.restrictConfirmModal}
                    title={'Restrict/Block Customer?'}
                    iconname={faBan}
                    color={'red'}
                    _id={this.state.single_customer._id}
                    name={this.state.single_customer.full_name}
                    confirm={this.handleRestrict.bind(this)}
                />
                {/* Unrestrict/Unblock Customer Confirm Modal */}
                <ConfirmModal
                    onHide={() => this.setState({ unrestrictConfirmModal: false })}
                    show={this.state.unrestrictConfirmModal}
                    title={'Unrestrict/Unblock Customer?'}
                    iconname={faCheckCircle}
                    color={'blue'}
                    _id={this.state.single_customer._id}
                    name={this.state.single_customer.full_name}
                    confirm={this.handleUnrestrict.bind(this)}
                />
                {!this.state.isViewVendor ?
                    <div >
                        <TitleRow icon={faUsers} title={' Admin Dashboard / Customers'} />
                        <Row className='Card'>
                            <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                                <div className="hover">
                                    <Card style={{ background: 'lightblue' }} >
                                        <Card.Header className='card_header'>All Customers</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text className='card_header'>
                                                        {this.state.customers_list.length || '-'}
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text className='card_header'>
                                                        <FontAwesomeIcon icon={faUserPlus} style={styles.fontawesome} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                                <div className="hover">
                                    <Card style={{ background: 'orange' }} >
                                        <Card.Header className='card_header'> Restriced Customers </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text className='card_header'>
                                                        {this.state.single_customer.length || '0'}
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text className='card_header'>
                                                        <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                        <CustomerTable
                            header={'All Customers'}
                            list={this.state.customers_list}
                            rank={true}
                            setView={(index) => this.setState({
                                isViewVendor: true,
                                isNewVendor: false,
                                single_customer: this.state.customers_list[index],
                            })}
                            setRestrict={(index) => this.setState({
                                restrictConfirmModal: true,
                                single_customer: this.state.customers_list[index]
                            })}
                        />
                        <CustomerTable
                            header={'Restricted Customers'}
                            list={this.state.restricted_customers_list}
                            rank={true}
                            setView={(index) => this.setState({
                                isViewVendor: true,
                                isNewVendor: false,
                                single_customer: this.state.restricted_customers_list[index],
                            })}
                            setUnrestrict={(index) => this.setState({ unrestrictConfirmModal: true, single_customer: this.state.restricted_customers_list[index] })}
                        />
                    </div>
                    :
                    <div>
                        <TitleRow icon={faPersonBooth} title={`Admin Dashboard / Customers / ${this.state.single_customer.full_name}`} />
                        <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
                            <Button size='sm' variant='outline-primary' className="mr-auto m-2" onClick={() => this.setState({ isViewVendor: false })}> Back </Button>
                            {this.state.single_customer.status != 'restricted' ?
                                <Button size='sm' variant='outline-danger' className='m-2' onClick={() => this.setState({ restrictConfirmModal: true })}> Restrict </Button>
                                :
                                <Button size='sm' variant='outline-success' className='m-2' onClick={() => this.setState({ unrestrictConfirmModal: true })}> Unrestrict </Button>
                            }
                        </Form.Row>
                        <Card className='Card'>
                            <Card.Body>
                                <Row>
                                    <p className='p'><span>Personal Info</span></p>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>ID</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer._id} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Mobile</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.mobile} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Email</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.email || '-'} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.full_name} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Country</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.countary} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>City</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.city} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Gender</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.gender} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Date</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.entery_date} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                        <Form.Label className='form_label'>Address</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_customer.address} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                }
                <style type="text/css">
                    {`
                        .vendors .Card{
                            margin: 2%;
                        }
                        .vendors .p {
                            width: 100%;
                            text-align: center;
                            border-bottom: 1px solid lightgray;
                            line-height: 0.1em;
                            margin: 20px 20px;
                        }

                        .vendors .p span {
                            font-size: 13px;
                            color: gray;
                            background: white;
                            padding:0 10px;
                        }
                        .vendors .form_label{
                            color: gray;
                            font-size: ${GlobalStyleSheet.form_label_fontsize};
                        }
                        .vendors .hover {
                            margin: 5px 15px
                        }
                        .vendors .hover:hover {
                            margin: 0px 10px;
                            cursor: pointer
                        }

                        .vendors .card_header {
                            font-size: ${GlobalStyleSheet.card_header_fontsize};
                            border: none;
                        }
                        .vendors .card_text {
                            color: ${GlobalStyleSheet.admin_primry_color};
                            font-size: 17px;
                        }
                        @media (max-width: 767px) {
                            .vendors. hover:hover {
                                margin: 0px 10px 10px 10px ;
                                cursor: pointer
                            }
                        }
                    `}
                </style>
            </div>
        )
    }
}

function CustomerTable(props) {
    return (
        <div className='customer_table'>
            <CardAccordion title={props.header}>
                <Table responsive bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                <Form.Check type="checkbox" />
                            </th>
                            <th>ID</th>
                            <th>Mobile</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Countary</th>
                            <th>City</th>
                            <th>Address</th>
                            {props.rank ?
                                <th>Rank</th>
                                : null
                            }
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.list && props.list.map((element, index) =>
                            <tr key={index}>
                                <td align="center" >
                                    <Form.Check type="checkbox" />
                                </td>
                                <td className="td">
                                    {element._id}
                                    <div className="mr-auto"></div>
                                    <Nav.Link style={styles.nav_link} onClick={() => props.setView(index)} > View </Nav.Link>
                                    {element.status == 'restricted' ?
                                        <Nav.Link style={styles.nav_link} onClick={() => props.setUnrestrict(index)}>Unrestrict</Nav.Link>
                                        :
                                        <Nav.Link style={styles.nav_link} onClick={() => props.setRestrict(index)}>Restrict</Nav.Link>
                                    }
                                </td>
                                <td align="center" >{element.mobile}</td>
                                <td align="center" >{element.full_name}</td>
                                <td align="center" >{element.gender}</td>
                                <td align="center" >{element.countary}</td>
                                <td align="center" >{element.city}</td>
                                <td align="center" >{element.address}</td>
                                {props.rank ?
                                    <td align="center" >{element.rank || '-'}</td>
                                    : null
                                }
                                <td align="center" >{element.entry_date}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </CardAccordion>
            <style jsx>
                {`
                    .customer_table th {
                        text-align: center;
                        font-size: 14px;
                    }
                    .customer_table .td {
                        display: flex;
                        flex-direction: row;
                        // align-items: center;
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                    .customer_table td {
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                `}
            </style>
        </div>
    )
}

const styles = {
    fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        width: '30px',
        height: '30px',
        maxHeight: '30px',
        maxWidth: '30px',
        float: 'right'
    },
    accordin_fontawesome: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        marginRight: '10%',
        width: '15px',
        height: '15px',
        maxHeight: '15px',
        maxWidth: '15px',
    },
}

export default Customers;