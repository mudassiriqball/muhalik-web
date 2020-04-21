import React, { Component } from 'react';
import { Row, Table, Form, Button, Nav } from 'react-bootstrap'
import axios from 'axios'
import MuhalikConfig from '../../../../../../sdk/muhalik.config'
import GlobalStyleSheet from '../../../../../../styleSheet'
import ViewProduct from './all-products-contents/view-product'
import Link from 'next/link'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';


class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsArray: [],
            viewProduct: false,
            data: {},
        }
    }
    // Getting Product Categories from DB
    async componentDidMount() {
        const url = MuhalikConfig.PATH + '/api/products/';
        try {
            const response = await axios.get(url);
            console.log('data:', response.data.data.docs)
            this.setState({ productsArray: response.data.data.docs })
        } catch (error) {
            console.log('Data Fetching Eror:', error);
        }
    }

    handleViewProduct(index) {
        // let dataa;
        // Simple Product
        // if (i == -1) {
        this.setState({ data: this.state.productsArray[index], viewProduct: true })

        // } else { // Variable Product
        // dataa = Object.assign([], this.state.productsArray[index])
        // dataa.product_variations = dataa.product_variations[i];
        //     this.setState({ data: this.state.productsArray[index], viewProduct: true })
        // }
        // console.log('datadata:', data)
        // Router.push({
        //     pathname: '/view-product',
        //     query: { data: data },
        // }, '/vendor/view-product?' + data.product_name);
    }

    render() {
        return (
            <>
                {this.state.viewProduct ?
                    <ViewProduct
                        data={this.state.data}
                        back={() => this.setState({ viewProduct: false, data: {} })}
                    />
                    :
                    <>
                        <Row style={styles.title_row} noGutters>
                            <FontAwesomeIcon icon={faPlus} style={styles.title_fontawesome} />
                            <div className="mr-auto" style={styles.title}> All Products</div>
                        </Row>
                        <Row noGutters style={{ margin: '2%', background: 'white' }}>
                            <Table responsive bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>
                                            <Form.Check type="checkbox" />
                                        </th>
                                        <th style={{ textAlign: 'center' }}>Name</th>
                                        <th style={{ textAlign: 'center' }}>SKU</th>
                                        <th style={{ textAlign: 'center' }}>Stock</th>
                                        <th style={{ textAlign: 'center' }}>Price</th>
                                        <th style={{ textAlign: 'center' }}>Categories</th>
                                        <th style={{ textAlign: 'center' }}>Tags</th>
                                        <th style={{ textAlign: 'center' }}>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.productsArray && this.state.productsArray.map((element, index) =>
                                        _.isEqual(element.product_type, "simple-product") ?
                                            <tr key={index}>
                                                <td align="center" style={styles.label}><Form.Check type="checkbox" /></td>
                                                <td className="td">
                                                    {element.product_name}
                                                    <div className="mr-auto"></div>
                                                    <Nav.Link style={styles.nav_link} onClick={() => this.handleViewProduct(index)}> View </Nav.Link>
                                                    <Nav.Link style={styles.nav_link}>Edit</Nav.Link>
                                                    <Nav.Link style={styles.nav_link}>Delete</Nav.Link>
                                                </td>
                                                <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
                                                <td align="center" style={styles.label}>{element.product_in_stock}</td>
                                                <td align="center" style={styles.label}>{element.product_price}</td>
                                                <td align="center" style={styles.label}>
                                                    {element.product_category && element.product_category.map(e =>
                                                        e.value + ','
                                                    )}
                                                </td>
                                                <td align="center" style={styles.label}>
                                                    {_.isEmpty(element.product_tags) ? '-' :
                                                        element.product_tags.map(e =>
                                                            e.value + ','
                                                        )
                                                    }
                                                </td>
                                                <td align="center" style={styles.label}>
                                                    {_.isEmpty(element.product_entry_date) ? '-' : element.product_entry_date}
                                                </td>
                                            </tr>
                                            :
                                            <>
                                                <tr>
                                                    <td align="center" style={styles.label}>
                                                        <Form.Check type="checkbox" />
                                                    </td>
                                                    <td className="td">
                                                        {element.product_name}
                                                        <div className="mr-auto"></div>
                                                        <Nav.Link style={styles.nav_link} onClick={() => this.handleViewProduct(index)}>View</Nav.Link>
                                                        <Nav.Link style={styles.nav_link}>Edit</Nav.Link>
                                                        <Nav.Link style={styles.nav_link}>Delete</Nav.Link>
                                                    </td>
                                                    <td align="center" style={styles.label}>{element.sku ? element.sku : '-'}</td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_variations.map(e =>
                                                            e.item[e.item.length - 2].value + ','
                                                        )}
                                                    </td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_variations.map(e =>
                                                            e.item[e.item.length - 3].value + ','
                                                        )}
                                                    </td>
                                                    <td align="center" style={styles.label}>
                                                        {element.product_category && element.product_category.map(e =>
                                                            e.value + ','
                                                        )}
                                                    </td>
                                                    <td align="center" style={styles.label}>
                                                        {_.isEmpty(element.product_tags) ? '-' :
                                                            element.product_tags.map(e =>
                                                                e.value + ','
                                                            )
                                                        }</td>
                                                    <td align="center" style={styles.label}>
                                                        {_.isEmpty(element.product_entry_date) ? '-' : element.product_entry_date}
                                                    </td>
                                                </tr>
                                            </>
                                    )}
                                </tbody>
                            </Table>
                        </Row >
                    </>
                }
                <style jsx>
                    {`
                        .td {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            font-size: ${GlobalStyleSheet.form_label_fontsize};
                        }
                    `}
                </style>
            </>
        );
    }
}

const styles = {
    title_row: {
        borderBottom: '1px solid gray',
        padding: '0.7% 4%',
        display: 'flex',
        alignItems: 'center'
    },
    title_fontawesome: {
        color: 'gray',
        marginRight: '3%',
        width: '20px',
        height: '20px',
        maxHeight: '20px',
        maxWidth: '20px',
    },
    title: {
        color: 'gray'
    },
    label: {
        fontSize: `${GlobalStyleSheet.form_label_fontsize}`
    },
    nav_link: {
        paddingLeft: '10px',
        paddingRight: '5px',
    },
}
export default AllProducts;