import GlobalStyleSheet from '../../../../styleSheet';

const Footer = () => (
    <div>
        <div className="footer">
            <p className="fooeter_text text-center">
                Copyright@ 2020
                    <span> Muhalik </span>
                - Online Shopping Website
            </p>
        </div>
        <style jsx>{`
            .footer {
                background: ${GlobalStyleSheet.primry_color};
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
            }
            .fooeter_text {
                margin: 10px;
                font-size: smaller;
                color: ${GlobalStyleSheet.primary_text_color};
            }
            span {
                font-weight: bold;
            }
        `}</style>
    </div>
)

export default Footer;