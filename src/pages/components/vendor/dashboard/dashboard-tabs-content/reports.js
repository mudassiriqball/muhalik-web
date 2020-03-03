import { Tabs, Tab } from 'react-bootstrap';

const Reports = () => {
    return (
        <div style={{width: '100%', background: 'yellow'}}>
            <Tabs defaultActiveKey="daily" transition={false} id="reports_tab" style={{padding: '0px', margin: '0px', width: '100%'}}>
                <Tab eventKey="daily" title="Daily Reports">
                    <p>Daily Reports</p>
                </Tab>
                <Tab eventKey="weekly" title="Weekly Reports">
                    <p>Weekly Reports</p>
                </Tab>
                <Tab eventKey="monthly" title="Monthly Reports">
                    <p>Monthly Reports</p>
                </Tab>
                <Tab eventKey="yearly" title="Yearly Reports">
                    <p>Yearly Reports</p>
                </Tab>
                <Tab eventKey="overall" title="Overall Reports">
                    <p>Overall Reports</p>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Reports;