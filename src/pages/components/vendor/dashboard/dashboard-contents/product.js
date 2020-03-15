import { Row, Tabs, Tab, Card } from 'react-bootstrap';
import AllProducts from './product-contents/all-products';
import AddNew from './product-contents/add-new';
import GlobalStyleSheet from '../../../../../styleSheet';

const Product = () => {
    return (
        <div>
            <Tabs defaultActiveKey="overall" transition={false} id="reports_tab" justify fill style={styles.tabs}>
                <Tab eventKey="overall" title="All Products" style={{color: 'red'}}>
                    <AllProducts></AllProducts>
                </Tab>
                <Tab eventKey="addNew" title="Add New">
                    <AddNew></AddNew>
                </Tab>
                <Tab eventKey="categories" title="Categories">
                    <AddNew></AddNew>
                </Tab>
                <Tab eventKey="attributes" title="Attributes">
                    <AddNew></AddNew>
                </Tab>
            </Tabs>
        </div>
    );
}

const styles = {
    tabs: { 
        margin: '1% 1.5% 0% 1.5%',
        padding: '0.5% 0% 0% 0%',
        background: `${GlobalStyleSheet.body_color}`,
        color: 'yellow',
        // borderTop: '2px solid white',
        // borderBottom: 'none',
    }
}
export default Product;