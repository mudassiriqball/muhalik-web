
// export const GlobalStyleSheet = {
//     // primry_color: '#563D7C',
//     primry_color: '#28A745',
//     primary_text_color: 'white',
// }

const GlobalStyleSheet = {
    // primry_color: '#563D7C',
    primry_color: '#28A745',

    admin_primry_color: '#373948',
    primary_text_color: 'white',

    // Body color
    body_color: '#DDE1E3',
    // body_color: '#F0F0F0',

    // Fontsize for all the labels of any form control (input, textbox etc):
    form_label_fontsize: '13px',
}

export default GlobalStyleSheet;









// const express = require('express');
// const next = require('next');

// const PORT = process.env.PORT || 3000
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare()
// .then(() => {
//   const server = express();
//   server.get('/api/sh', (req, res) => {
//     return res.end("good job");
//   })

//   server.get("*", (req, res) => {
//     return handle(req, res);
//   })

//   server.listen(PORT, err => {
//     if(err) throw err;
//     console.log(`> ready on port ${PORT}`);
//   })
// })
// .catch(ex => {
//   console.error(ex.stack);
// })