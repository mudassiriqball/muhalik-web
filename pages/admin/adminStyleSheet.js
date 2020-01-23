import StyleSheet from '../global-styles/styleSheet';

const primry_color = StyleSheet.primry_color;
const primary_text_color = StyleSheet.primary_text_color;

const AdminStyleSheet = {
    background: {
        background: `${primry_color}`,
    },

    // Styles for the dashboard.js
    search_bar: {
        width: '75%',
        flex: '7',
        border: `2px solid ${primry_color}`,
        // borderBottom: `2px solid ${primry_color}`,
        margin: '2px 2.5px 1px 1.2px',
    },
    search_btn: {
        background: `${primry_color}`,
        flex: '1',
        border: 'none',
        color: 'white',
        width: '20%',
        float: 'right',
        borderRadius: 'none',
    },
    border: {
        border: '1px solid white',
        background: `${primry_color}`,
        color: 'white',
        borderRadius: '4px'
    },
    link_color: {
        color: `${primary_text_color}`,
    },
}

export default AdminStyleSheet;