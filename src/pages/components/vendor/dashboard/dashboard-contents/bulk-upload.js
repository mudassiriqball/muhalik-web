import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faDownload } from '@fortawesome/free-solid-svg-icons';
import axios, { post } from 'axios';
import GlobalStyleSheet from '../../../../../styleSheet'
import MuhalikConfig from '../../../../../sdk/muhalik.config';
import TitleRow from '../../../title-row';

class BulkUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    async fileUpload(file) {
        const url = MuhalikConfig.PATH + '/api/products/bulk-upload';
        const form = new FormData();
        form.append('file', file)

        axios.post(url, form, {
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });

        return "fuck";


        // const form = new FormData()
        // form.append('username', 'malcoded')
        // form.append('file', file)
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'multipart/form-data' },
        //     body: form,
        // })
        // return response;


        // const response = await axios.post(
        //     url,
        //     { example: 'data' },
        //     { headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"  } }
        //   )

        return response;

        // const form = new FormData();
        // form.set('username', 'malcoded');
        // form.append('file', file);
        // return axios.post(url, file, {
        //     headers: { 'Content-Type': 'multipart/form-data' },
        // })

        // const formData = new FormData();
        // formData.append('file', file)
        // const config = {
        //     headers: {
        //         "Access-Control-Allow-Origin": "*"
        //     }
        // }
        // return post(url, formData, {
        //     headers: {
        //         'Access-Control-Allow-Origin': true,
        //     }
        // });
    }

    downloadBulkUploadTemplete = () => {
        fetch('/excel.xlsx')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'muhalik bulk-upload templete.xlsx';
                    a.click();
                });
            });
    }
    render() {
        return (
            <div >
                <TitleRow icon={faUpload} title={' Vendor Dashboard / All Products'} />

                <Row style={styles.row}>
                    <Card style={styles.card}>
                        <Card.Header style={styles.card_header}>Download Templete</Card.Header>
                        <Card.Body>
                            <Button variant="primary" size="md" active onClick={this.downloadBulkUploadTemplete}>
                                <FontAwesomeIcon icon={faDownload} style={styles.fontawesome} />
                                Download
                            </Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row style={styles.row}>
                    <Card style={styles.card}>
                        <Card.Header style={styles.card_header}>Upload File</Card.Header>
                        <Card.Body>
                            <form onSubmit={this.onFormSubmit}>
                                <div style={styles.browseBtnDiv}>
                                    <input type="file" onChange={this.onChange} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <Button variant="primary" size="md" active type="submit">
                                        <FontAwesomeIcon icon={faUpload} style={styles.fontawesome} />
                                        Upload
                                    </Button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        )
    }
}

const styles = {
    row: {
        margin: '2%',
        padding: '0px'
    },
    card: {
        width: '100%'
    },
    card_header: {
        fontSize: `${GlobalStyleSheet.card_header_fontsize}`,
        background: `${GlobalStyleSheet.card_header_background}`,
    },
    browseBtnDiv: {
        width: '100%',
        padding: '0px 0px 10px 0px'
    },
    fontawesome: {
        color: 'white',
        marginRight: '10px',
        width: '14px',
        height: '14px',
        maxHeight: '14px',
        maxWidth: '14px',
    },
}

export default BulkUpload;