import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import { I18Provider, LOCALES } from '../i18n'
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState(LOCALES.ENGLISH)
  const [currLang, setCurrLang] = useState('')

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (lang == null || lang == 'en') {
      setLocale(LOCALES.ENGLISH)
      setCurrLang('en')
    } else {
      setLocale(LOCALES.ARABIC)
      setCurrLang('ar')
    }
  }, [])

  function handleChangeLang(lang) {
    if (lang == 'en') {
      setLocale(LOCALES.ENGLISH)
      localStorage.setItem('lang', 'en')
    } else {
      setLocale(LOCALES.ARABIC)
      localStorage.setItem('lang', 'ar')
    }
  }
  return <I18Provider locale={locale}>
    <Component currLang={currLang} changeLang={(lang) => handleChangeLang(lang)} {...pageProps} />
  </I18Provider>
}


// import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-multi-carousel/lib/styles.css";
// import { Provider } from 'react-redux'
// import store from '../redux/store'

// import '../styles.css'

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Provider store={store}>
//     <Component {...pageProps} />
//   </Provider>
// }

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

// export default MyApp