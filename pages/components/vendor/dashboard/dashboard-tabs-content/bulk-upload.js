import React from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faDownload } from '@fortawesome/free-solid-svg-icons';
import axios, { post } from 'axios';
import GlobalStyleSheet from '../../../../../styleSheet'

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
    fileUpload(file) {
        const url = 'http://localhost:3000/api/products/bulk';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
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
                <Row style={styles.row}>
                    <h6 className="mr-auto">Products Bulk Upload</h6>
                    <Link href="/index"><a>Home</a></Link>
                </Row>

                <Row style={styles.row}>
                    <Card style={styles.card}>
                        <Card.Header style={{ background: 'skyblue' }}>Download Templete</Card.Header>
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
                        <Card.Header style={{ background: 'skyblue' }}>Upload File</Card.Header>
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