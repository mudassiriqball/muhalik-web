
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }

let GlobalStyleSheet = {
    // primry_color: '#563D7C',
    primry_color: '#28A745',

    admin_primry_color: '#373948',
    primary_text_color: 'white',

    // Body color
    // body_color: '#F1F1F1',
    body_color: '#F2F3F7',
    // body_color: '#F0F0F0',

    // Fontsize for all the labels of any form control (input, textbox etc):
    form_label_fontsize: '13px',
    card_header_fontsize: '14px',
    card_header_background: 'lightgray',

    react_select_styles: {
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
