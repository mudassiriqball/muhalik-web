import FooterStyleSheet from './footer-style-sheet';

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