
let GlobalStyleSheet = {

    primry_light_color: '#a540a2',
    primry_color: '#592357',
    primry_hover_color: '#491d48',

    primry_text_color: 'white',
    primary_text_light_color: '#cccccc',

    admin_primry_color: '#4e5065',
    primary_text_color: 'white',

    body_color: '#F2F3F7',

    error_color: '#DC3545',

    // Fontsize for all the labels of any form control (input, textbox etc):
    form_label_fontsize: '13px',
    card_header_fontsize: '14px',
    card_header_background: 'lightgray',

    react_select_styles: {
        menuPortal: base => ({ ...base, zIndex: 9999 }),
        menu: provided => ({ ...provided, zIndex: 9999 }),
        control: (base) => ({
            ...base,
            fontSize: '13px',
        }),
        dropdownIndicator: (base) => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: '13px',
        }),
        clearIndicator: (base) => ({
            ...base,
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: '13px',
        }),
        option: provided => ({
            ...provided,
            fontSize: '13px',
            display: 'absolute',
            zIndex: '1000',
        }),
    },
}

export default GlobalStyleSheet;
