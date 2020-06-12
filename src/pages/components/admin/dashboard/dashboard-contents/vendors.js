import React from 'react'

import { Row, Col, Card, Nav, Table, Form, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUserPlus, faSlidersH, faPersonBooth, faBan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import GlobalStyleSheet from '../../../../../styleSheet'
import TitleRow from '../../../title-row';
import CardAccordion from '../../../card_accordion'
import ConfirmModal from '../../../confirm-modal'
import AlertModal from '../../../alert-modal'

class Vendor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewVendor: false,
            isNewVendor: false,

            showConfirmModal: false,
            confirmModalMessage: '',
            iconname: null,

            showAlertModal: false,
            alertMessage: '',

            vendors_list: [],
            new_vendors_list: [],
            restricted_vendors_list: [],

            single_vendor: {},
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            vendors_list: nextProps.vendors_list,
            new_vendors_list: nextProps.new_vendors_list,
            restricted_vendors_list: nextProps.restricted_vendors_list,
            token: nextProps.token
        });
    }

    render() {
        return (
            <>
                <AlertModal
                    onHide={(e) => this.setState({ showAlertModal: false })}
                    show={this.state.showAlertModal}
                    header={'Success'}
                    message={this.state.alertMessage}
                    iconname={faThumbsUp}
                    color={'green'}
                />
                <ConfirmModal
                    onHide={() => this.setState({ showConfirmModal: false })}
                    show={this.state.showConfirmModal}
                    title={this.state.confirmModalMessage}
                    iconname={this.state.iconname}
                    // _id={this.state.delete_field_id}
                    // name={this.state.delete_field_name}
                    // confirm={this.state.isFieldDelete ? this.handleDeleteFieldClick.bind(this) : this.handleDeleteFieldRequestClick.bind(this)}
                    confirm={() => this.setState({ showConfirmModal: false, showAlertModal: true, alertMessage: 'mubarakh ho' })}
                />
                {!this.state.isViewVendor ?
                    <div >
                        <TitleRow icon={faUsers} title={' Admin Dashboard / Vendors'} />
                        <Row style={styles.row}>
                            <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                                <div className="hover">
                                    <Card style={{ background: 'lightgreen' }} >
                                        <Card.Header style={styles.card_header}>New Vendors</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text style={styles.card_text}>
                                                        1234
                                        </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text style={styles.card_text}>
                                                        <FontAwesomeIcon icon={faUsers} style={styles.fontawesome} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12} style={styles.col}>
                                <div className="hover">
                                    <Card style={{ background: 'lightblue' }} >
                                        <Card.Header style={styles.card_header}>All Vendors</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text style={styles.card_text}>
                                                        1234
                                        </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text style={styles.card_text}>
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
                                        <Card.Header style={styles.card_header}> Restriced Vendors </Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col>
                                                    <Card.Text style={styles.card_text}>
                                                        1234
                                        </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text style={styles.card_text}>
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
                            setRestrict={() => this.setState({
                                showConfirmModal: true,
                                confirmModalMessage: 'Restrict Vendor?',
                                iconname: faBan
                            })}
                        />
                        <VendorTable
                            header={'New Vendors'}
                            list={this.state.new_vendors_list}
                            rank={false}
                            setView={(index) => this.setState({
                                isViewVendor: true,
                                isNewVendor: true,
                                single_vendor: this.state.new_vendors_list[index],
                            })}
                            setApprove={() => this.setState({ showAlertModal: true, alertMessage: 'Vendor Sucessfully Approved' })}
                            setDiscard={() => this.setState({
                                showConfirmModal: true,
                                confirmModalMessage: 'Discard Vendor?',
                                iconname: faTrash
                            })}
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
                            setRestrict={() => this.setState({
                                showConfirmModal: true,
                                confirmModalMessage: 'Restrict Vendor?',
                                iconname: faBan
                            })}
                        />
                    </div>
                    :
                    <>
                        <TitleRow icon={faPersonBooth} title={' Admin Dashboard / Vendors / Mr.X'} />
                        <Form.Row style={{ margin: ' 0% 2%', display: 'flex', alignItems: 'center' }} >
                            <Button size='sm' variant='outline-primary' className="mr-auto m-2" onClick={() => this.setState({ isViewVendor: false })}> Back </Button>
                            {this.state.isNewVendor ?
                                <>
                                    <Button size='sm' variant='outline-success' className='m-2'
                                        onClick={() => this.setState({ showAlertModal: true, alertMessage: 'Vendor Successfully Approved?' })}
                                    > Approve </Button>
                                    <Button size='sm' variant='outline-danger' className='m-2'
                                        onClick={() => this.setState({
                                            showConfirmModal: true,
                                            confirmModalMessage: 'Discard Vendor?',
                                            iconname: faTrash
                                        })}
                                    > Discard </Button>
                                </>
                                :
                                <Button size='sm' variant='outline-danger' className='m-2'
                                    onClick={() => this.setState({
                                        showConfirmModal: true,
                                        confirmModalMessage: 'Restrict Vendor?',
                                        iconname: faBan
                                    })}
                                > Restrict </Button>

                            }
                        </Form.Row>
                        <Card>
                            <Card.Body>
                                <Row clasName='Row'>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>ID</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor._id} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.full_name} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Mobile</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.mobile} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Email</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.email || '-'} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Country</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.countary} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>City</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.city} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>


                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Shop Name</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.shop_name} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Shop Category</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.shop_category} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Shop Address</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.shop_address} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} lg={4} md={4} sm={6} xs={12}>
                                        <Form.Label className='form_label'>Date</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" size="sm" value={this.state.single_vendor.entery_date} disabled={true} />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>
                    </>
                }
                <style type="text/css">
                    {`
                        .Row{
                            margin: 2%;
                        }
                        .form_label{
                            color: gray;
                            font-size: ${GlobalStyleSheet.form_label_fontsize};
                        }
                        .hover {
                            margin: 5px 15px
                        }
                        .hover:hover {
                            margin: 0px 10px;
                            cursor: pointer
                        }
                        @media (max-width: 767px) {
                            .Row{
                                margin: 0%;
                                padding: 5%
                            }
                        }
                    `}
                </style>
            </>
        )
    }
}

function VendorTable(props) {
    return (
        <>

            <CardAccordion title={props.header}>
                <Table responsive bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                <Form.Check type="checkbox" />
                            </th>
                            <th>ID</th>
                            <th>Name</th>
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
                                    <Nav.Link style={styles.nav_link} onClick={() => props.setView(index)} > View </Nav.Link>
                                    {props.rank ?
                                        <Nav.Link style={styles.nav_link} onClick={props.setRestrict}>Restrict</Nav.Link>
                                        :
                                        <>
                                            <Nav.Link style={styles.nav_link} onClick={props.setApprove}>Approve</Nav.Link>
                                            <Nav.Link style={styles.nav_link} onClick={props.setDiscard}>Discard</Nav.Link>
                                        </>
                                    }
                                </td>
                                <td align="center" >{element.fullName}</td>
                                <td align="center" >{element.shop_name}</td>
                                <td align="center" >{element.shopAddress}</td>
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
                    th {
                        text-align: center;
                        font-size: 14px;
                    }
                    .td {
                        display: flex;
                        flex-direction: row;
                        // align-items: center;
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                    td {
                        font-size: ${GlobalStyleSheet.form_label_fontsize};
                    }
                `}
            </style>
        </>
    )
}


function ViewVendor(props) {
    return (
        <>


        </>
    )
}

const styles = {
    row: {
        margin: '2%',
        padding: '0px'
    },
    nav_link: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '10px',
        paddingRight: '5px',
    },
    col: {
        padding: '0px',
        margin: '0px'
    },
    card: {
        width: '100%',
        marginBottom: '2%',
        border: '1px solid lightgray'
    },
    card_header: {
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        border: 'none',
    },
    table_card_header: {
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
        border: 'none',
    },
    card_text: {
        color: `${GlobalStyleSheet.admin_primry_color}`,
        fontSize: '20px',
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
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

export default Vendor;