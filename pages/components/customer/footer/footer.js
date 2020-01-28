import GlobalStyleSheet from '../../../../styleSheet';
const primry_color = GlobalStyleSheet.primry_color;
const primary_text_color = GlobalStyleSheet.primary_text_color;

export const FooterStyleSheet = {
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

const Footer = () => (
    <div>
        <div style={FooterStyleSheet.footer}>
            <p className="text-center" style={FooterStyleSheet.fooeter_text}>
                Copyright@ 2020
                    <span style={{ fontSize: 'medium', fontWeight: 'bold', }}> Muhalik </span>
                - Online Shopping Website
            </p>
        </div>
    </div>
)

export default Footer;