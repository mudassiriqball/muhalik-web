import StyleSheet from '../../../global-styles/styleSheet';

const primry_color = StyleSheet.primry_color;
const primary_text_color = StyleSheet.primary_text_color;

const ToolbarStyleSheet = {
    background: {
        background: `${primry_color}`,
    },
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
}

export default ToolbarStyleSheet;