import { Row, Tabs, Tab } from 'react-bootstrap';

import WeeklyReports from './report-contents/weekly-reports'
import MonthlyReports from './report-contents/monthly-reports'
import YearlyReports from './report-contents/yearly-reports'
import OverallReports from './report-contents/overall-reports'

const Reports = () => {
    return (
        <div style={{ width: '100%', margin: '2%'}}>
            <Tabs defaultActiveKey="overall" transition={false} id="reports_tab" justify fill>
                <Tab eventKey="overall" title="Overall">
                    <OverallReports></OverallReports>
                </Tab>
                <Tab eventKey="yearly" title="Yearly">
                    <YearlyReports></YearlyReports>
                </Tab>
                <Tab eventKey="monthly" title="Monthly">
                    <MonthlyReports></MonthlyReports>
                </Tab>
                <Tab eventKey="weekly" title="Weekly">
                    <WeeklyReports></WeeklyReports>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Reports;