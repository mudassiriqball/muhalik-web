import React from 'react'
import axios from 'axios'
import { Row, Col, Card, Nav, Table, Form, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faSlidersH, faPersonBooth, faBan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row';
import CardAccordion from '../../../card-accordion'
import ConfirmModal from '../../../confirm-modal'
import AlertModal from '../../../alert-modal'
import MuhalikConfig from '../../../../../sdk/muhalik.config'


class Vendors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewVendor: false,
            isNewVendor: false,

            approveConfirmModal: false,
            discardConfirmModal: false,
            restrictConfirmModal: false,
            unrestrictConfirmModal: false,

            showAlertModal: false,
            alertMessage: '',

            vendors_list: [],
            new_vendors_list: [],
            restricted_vendors_list: [],

            single_vendor: {},
            token: null,
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const array = [];
        nextProps.vendors_list.forEach((element, index) => {
            if (element.status != 'disapproved' && element.status != 'restricted') {
                array.push(element)
            }
        })
        this.setState({
            vendors_list: array,
            new_vendors_list: nextProps.new_vendors_list,
            restricted_vendors_list: nextProps.restricted_vendors_list,
            token: nextProps.token
        });
    }


    async handleApprove() {
        console.log('handleApprove: _id =', this.state.single_vendor._id)
        this.setState({ approveConfirmModal: false })
        const url = MuhalikConfig.PATH + `/api/users/status/${this.state.single_vendor._id}`;
        let data = [];
        const currentComponent = this
        data = {
            status: 'approved'
        }
        await axios.put(url, data, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            let copyArray_1 = Object.assign([], currentComponent.state.new_vendors_list);
            let copyArray_2 = Object.assign([], currentComponent.state.vendors_list);

            currentComponent.state.new_vendors_list.forEach((element, index) => {
                if (element._id == currentComponent.state.single_vendor._id) {
                    element.status = 'approved'
                    copyArray_1.splice(index, 1)
                    copyArray_2.push(element)
                }
            })
            currentComponent.setState({
                new_vendors_list: copyArray_1,
                vendors_list: copyArray_2,
                showAlertModal: true,
                alertMessage: 'User Approved Successfully',
            })
        }).catch(function (error) {
            alert('User Approve Failed: ', error.response.data.message);
            console.log('User Approve Failed:', error)
        });
    }
    async handleDiscard() {
        console.log('handleDiscard: _id =', this.state.single_vendor._id)
        this.setState({ discardConfirmModal: false })
        const url = MuhalikConfig.PATH + `/api/users/${this.state.single_vendor._id}`;
        const currentComponent = this
        await axios.delete(url, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            let copyArray = Object.assign([], currentComponent.state.new_vendors_list);
            currentComponent.state.new_vendors_list.forEach((element, index) => {
                if (element._id == currentComponent.state.single_vendor._id) {
                    copyArray.splice(index, 1)
                }
            })
            currentComponent.setState({
                new_vendors_list: copyArray,
                showAlertModal: true,
                alertMessage: 'User Discarded Successfully',
            })
        }).catch(function (error) {
            alert('User Discard Failed: ', error.response.data.message);
            console.log('User Discard Failed:', error)
        });
    }

    async handleRestrict() {
        console.log('handleRestrict: _id =', this.state.single_vendor._id)
        this.setState({ restrictConfirmModal: false })
        const url = MuhalikConfig.PATH + `/api/users/status/${this.state.single_vendor._id}`;
        let data = [];
        const currentComponent = this
        data = {
            status: 'restricted'
        }
        await axios.put(url, data, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            let copyArray_1 = Object.assign([], currentComponent.state.vendors_list);
            let copyArray_2 = Object.assign([], currentComponent.state.restricted_vendors_list);

            currentComponent.state.vendors_list.forEach((element, index) => {
                if (element._id == currentComponent.state.single_vendor._id) {
                    element.status = 'restricted'
                    copyArray_1.splice(index, 1)
                    copyArray_2.push(element)
                }
            })
            currentComponent.setState({
                vendors_list: copyArray_1,
                restricted_vendors_list: copyArray_2,
                showAlertModal: true,
                alertMessage: 'User Restricted Successfully',
            })
        }).catch(function (error) {
            alert('User Restrict Failed: ', error.response.data.message);
            console.log('User Restrict Failed:', error)
        });
    }
    async handleUnrestrict() {
        console.log('handleUnrestrict: _id =', this.state.single_vendor._id)
        this.setState({ unrestrictConfirmModal: false })
        const url = MuhalikConfig.PATH + `/api/users/status/${this.state.single_vendor._id}`;
        let data = [];
        const currentComponent = this
        data = {
            status: 'approved'
        }
        await axios.put(url, data, {
            headers: { 'authorization': this.state.token }
        }).then(function (response) {
            let copyArray_1 = Object.assign([], currentComponent.state.restricted_vendors_list);
            let copyArray_2 = Object.assign([], currentComponent.state.vendors_list);

            currentComponent.state.restricted_vendors_list.forEach((element, index) => {
                if (element._id == currentComponent.state.single_vendor._id) {
                    element.status = 'approved'
                    copyArray_1.splice(index, 1)
                    copyArray_2.push(element)
                }
            })
            currentComponent.setState({
                restricted_vendors_list: copyArray_1,
                vendors_list: copyArray_2,
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
                {/* Approve New-Vendor Confirm Modal */}
                <ConfirmModal
                    onHide={() => this.setState({ approveConfirmModal: false })}
                    show={this.state.approveConfirmModal}
                    title={'Approve New Vendor?'}
                    iconname={faTrash}
                    color={'green'}
                    _id={this.state.single_vendor._id}
                    name={this.state.single_vendor.full_name}
                    confirm={this.handleApprove.bind(this)}
                />
                {/* Discard New-Vendor Confirm Modal */}
                <ConfirmModal
                    onHide={() => this.setState({ discardConfirmModal: false })}
                    show={this.state.discardConfirmModal}
                    title={'Discard New Vendor?'}
                    iconname={faTrash}
                    color={'red'}
                    _id={this.state.single_vendor._id}
                    name={this.state.single_vendor.full_name}
                    confirm={this.handleDiscard.bind(this)}
                />
                {/* Restrict/Block Vendor Confirm Modal */}
                <ConfirmModal
                    onHide={() => this.setState({ restrictConfirmModal: false })}
                    show={this.state.restrictConfirmModal}
                    title={'Restrict/Block Vendor?'}
                    iconname={faBan}
                    color={'red'}
                    _id={this.state.single_vendor._id}
                    name={this.state.single_vendor.full_name}
                    confirm={this.handleRestrict.bind(this)}
                />
                {/* Unrestrict/Unblock Vendor Confirm Modal */}
                <ConfirmModal
                    onHide={() => this.setState({ unrestrictConfirmModal: false })}
                    show={this.state.unrestrictConfirmModal}
                    title={'Unrestrict/Unblock Vendor?'}
                    iconname={faCheckCircle}
                    color={'blue'}
                    _id={this.state.single_vendor._id}
                    name={this.state.single_vendor.full_name}
                    confirm={this.handleUnrestrict.bind(this)}
                />
                {!this.state.isViewVendor ?
                    <div >
                        <TitleRow icon={faUsers} title={' Admin Dashboard / Vendors'} />
                        <Row className='Card'>
                            <Col lg={4} md={4} sm={12} xs={12} className='p-0 m-0'>
                                <div className="hover">
                                    <Card style={{ background: 'lightgreen' }} >
                                        <Card.Header className='card_header'>New Vendors</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text className='card_text'>
                                                        {this.state.new_vendors_list.length || '-'}
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text className='card_text'>
                                                        <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12} className='p-0 m-0'>
                                <div className="hover">
                                    <Card style={{ background: 'lightblue' }} >
                                        <Card.Header className='card_header'>All Vendors</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text className='card_text'>
                                                        {this.state.vendors_list.length || '-'}
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text className='card_text'>
                                                        <FontAwesomeIcon icon={faUserPlus} style={styles.fontawesome} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12} className='p-0 m-0'>
                                <div className="hover">
                                    <Card style={{ background: 'orange' }} >
                                        <Card.Header className='card_header'> Restriced Vendors </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text className='card_text'>
                                                        {this.state.restricted_vendors_list.length || '0'}
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text className='card_text'>
                                                        <FontAwesomeIcon icon={faBan} style={styles.fontawesome} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>

                        <VendorTable
                            header={'All Vendors'}
                            list={this.state.vendors_list}
                            rank={true}
                            setView={(index) => this.setState({
                                isViewVendor: true,
                                isNewVendor: false,
                                single_vendor: this.state.vendors_list[index],
                            })}
                            setRestrict={(index) => this.setState({
                                restrictConfirmModal: true,
                                single_vendor: this.state.vendors_list[index]
                            })} />

                        <VendorTable
                            header={'New Vendors'}
                            list={this.state.new_vendors_list}
                            rank={false}
                            setView={(index) => this.setState({
                                isViewVendor: true,
                                isNewVendor: true,
                                single_vendor: this.state.new_vendors_list[index],
                            })}

                            setApprove={(index) => this.setState({ approveConfirmModal: true, single_vendor: this.state.new_vendors_list[index] })}
                            setDiscard={(index) => this.setState({ discardConfirmModal: true, single_vendor: this.state.new_vendors_list[index] })}
                        />
                        <VendorTable
                            header={'Restricted Vendors'}
                            list={this.state.restricted_vendors_list}
                            rank={true}
                            setView={(index) => this.setState({
                                isViewVendor: true,
                                isNewVendor: false,
                                single_vendor: this.state.restricted_vendors_list[index],
                            })}
                            setUnrestrict={(index) => this.setState({ unrestrictConfirmModal: true, single_vendor: this.state.restricted_vendors_list[index] })}
                        />
                    </div>
                    :
                    <>
                        <TitleRow icon={faPersonBooth} title={`Admin Dashboard / Vendors / ${this.state.single_vendor.full_name}`} />
                        <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
                            <Button size='sm' variant='outline-primary' className="mr-auto m-2" onClick={() => this.setState({ isViewVendor: false })}> Back </Button>
                            {this.state.isNewVendor ?
                                <>
                                    <Button size='sm' variant='outline-success' className='m-2' onClick={() => this.setState({ approveConfirmModal: true })}> Approve </Button>
                                    <Button size='sm' variant='outline-danger' className='m-2' onClick={() => this.setState({ discardConfirmModal: true })}> Discard </Button>
                                </>
                                :
                                <>
                                    {this.state.single_vendor.status != 'restricted' ?
                                        <Button size='sm' variant='outline-danger' className='m-2' onClick={() => this.setState({ restrictConfirmModal: true })}> Restrict </Button>
                                        :
                                        <Button size='sm' variant='outline-success' className='m-2' onClick={() => this.setState({ unrestrictConfirmModal: true })}> Unrestrict </Button>
                                    }
                                </>
                            }
                        </Form.Row>
                        <Card className='Card'>
                            <Card.Body>
                                <Row>
                                    <p className='p'><span>Personal Info</span></p>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>ID</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor._id} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Mobile</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.mobile} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Email</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.email || '-'} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.full_name} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Country</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.countary} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>City</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.city} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>

                                    <p className='p' style={{ marginTop: '50px' }}><span>Shop Info</span></p>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Shop Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.shop_name} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Shop Category</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.shop_category} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={6} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Date</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.entery_date} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={12} md={12} sm={12} xs={12}>
                                        <Form.Label className='form_label'>Shop Address</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.shop_address} onChange={() => null} />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>
                    </>
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
                            .vendors .hover:hover {
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

function VendorTable(props) {
    return (
        <div className='vendor_table'>
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
                            <th>Countary</th>
                            <th>City</th>
                            <th>Shop Name</th>
                            <th>Shop Location</th>
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
                                    <Nav.Link onClick={() => props.setView(index)} > View </Nav.Link>
                                    {props.rank ?
                                        <>
                                            {element.status == 'restricted' ?
                                                <Nav.Link onClick={() => props.setUnrestrict(index)}>Unrestrict</Nav.Link>
                                                :
                                                <Nav.Link onClick={() => props.setRestrict(index)}>Restrict</Nav.Link>
                                            }
                                        </>
                                        :
                                        <>
                                            <Nav.Link onClick={() => props.setApprove(index)}>Approve</Nav.Link>
                                            <Nav.Link onClick={() => props.setDiscard(index)}>Discard</Nav.Link>
                                        </>
                                    }
                                </td>
                                <td align="center" >{element.mobile}</td>
                                <td align="center" >{element.full_name}</td>
                                <td align="center" >{element.countary}</td>
                                <td align="center" >{element.city}</td>
                                <td align="center" >{element.shop_name}</td>
                                <td align="center" >{element.shop_address}</td>
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
                    .vendor_table th {
                        text-align: center;
                        font-size: 14px;
                    }
                    .vendor_table .td {
                        display: flex;
                        flex-direction: row;
                        // align-items: center;
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                    .vendor_table td {
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

export default Vendors;