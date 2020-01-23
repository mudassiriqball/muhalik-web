import StyleSheet from '../global-styles/styleSheet';
const primry_color = StyleSheet.primry_color;
const primary_text_color = StyleSheet.primary_text_color;
const ComponentStyleSheet = {

    // Styles for footer.js
    footer: {
        background: `${primry_color}`,
    },


    // Styles for navbar.js
    brand: {
        color: `${primry_color}`,
        fontSize: 'larger',
        fontWeight: 'bolder'
    },
    form: {
        border: `2px solid ${primry_color}`,
        width: '60%',
        borderRadius: '25px',
        padding: '0px 5px'
    }
};

export default ComponentStyleSheet;