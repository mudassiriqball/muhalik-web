import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Row noGutters>
                    <Col className='m-2'>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={{ background: 'none', border: 'none' }}>
                                <div>New Arrival</div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-2'>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={{ background: 'none', border: 'none' }}>
                                <div>New Arrival</div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row noGutters>
                    <Col className='m-2'>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={{ background: 'none', border: 'none' }}>
                                <div>Recomended For You</div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row noGutters>
                    <Col className='m-2'>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={{ background: 'none', border: 'none' }}>
                                <div>New Arrival</div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-2'>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={{ background: 'none', border: 'none' }}>
                                <div>New Arrival</div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row noGutters>
                    <Col className='m-2'>
                        <Card style={{ border: 'none' }}>
                            <Card.Header style={{ background: 'none', border: 'none' }}>
                                <div>Recomended For You</div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                    <Col style={styles.col}>
                                        {1}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

const styles = {
    col: {
        background: 'lightgray',
        padding: '10%',
        margin: '0% 1%',
    },
}
export default Products;