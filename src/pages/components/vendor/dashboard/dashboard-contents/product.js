import { Row, Tabs, Tab, Card } from 'react-bootstrap';
import Products from './product-contents/products';
import AddProducts from './product-contents/add-products';
import GlobalStyleSheet from '../../../../../styleSheet';

const Product = () => {
    return (
        <div>
            <Tabs defaultActiveKey="overall" transition={false} id="reports_tab" justify fill style={styles.tabs}>
                <Tab eventKey="overall" title="All Products" style={{color: 'red'}}>
                    <Products></Products>
                </Tab>
                <Tab eventKey="addNew" title="Add New">
                    <AddProducts></AddProducts>
                </Tab>
                <Tab eventKey="categories" title="Categories">
                    <AddProducts></AddProducts>
                </Tab>
                <Tab eventKey="attributes" title="Attributes">
                    <AddProducts></AddProducts>
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