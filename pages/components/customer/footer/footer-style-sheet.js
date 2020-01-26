import StyleSheet from '../../../global-styles/styleSheet';
const primry_color = StyleSheet.primry_color;
const primary_text_color = StyleSheet.primary_text_color;
const FooterStyleSheet = {
    footer: {
        background: `${primry_color}`,
        position: 'absolute',
        left: "0",
        bottom: '0',
        right: '0',
    },
    fooeter_text: {
        margin: '10px',
        fontSize: 'smaller',
        color: `${primary_text_color}`
    },
}

export default FooterStyleSheet;
