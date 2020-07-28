import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import Router from 'next/router'
import MuhalikConfig from '../sdk/muhalik.config'

import { I18Provider, LOCALES } from '../i18n'
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState(LOCALES.ENGLISH)
  const [currLang, setCurrLang] = useState('en')

  useEffect(() => {
    const lang = localStorage.getItem('lang')
    if (lang == 'ar') {
      setLocale(LOCALES.ARABIC)
      setCurrLang('ar')
    }

    window.addEventListener('popstate', (event) => handleUrlChange(event), false);
    return () => {
      window.removeEventListener('popstate', (event) => handleUrlChange(event), false);
    }


  }, [])
  function handleUrlChange() {
    // if (window.location.href === `${MuhalikConfig.PATH}  /user/profile?manage-account` || window.location.href === `${MuhalikConfig.PATH}  /user/profile?my-profile` ||
    //   window.location.href === `${MuhalikConfig.PATH}  /user/profile?change-profile-picture` || `${MuhalikConfig.PATH}  /user/profile?shop-address` ||
    //   window.location.href === `${MuhalikConfig.PATH}  /user/profile?my-address` ||
    //   window.location.href === `${MuhalikConfig.PATH}  /user/profile?orders` || window.location.href === `${MuhalikConfig.PATH}  /user/profile?pending-orders` ||
    //   window.location.href === `${MuhalikConfig.PATH}  /user/profile?delivered-orders` || window.location.href === `${MuhalikConfig.PATH}  /user/profile?cancelled-orders` ||
    //   window.location.href === `${MuhalikConfig.PATH}  /user/profile?returned-orders`
    // ) {
    //   Router.push('/user/profile')
    // }

    // if (window.location.href === MuhalikConfig.PATH + '/user/account' || window.location.href === MuhalikConfig.PATH + '/user/account?my-profile' ||
    //   window.location.href === MuhalikConfig.PATH + '/user/account?change-profile-picture' || MuhalikConfig.PATH + '/user/account?shop-address' ||
    //   window.location.href === MuhalikConfig.PATH + ' /user/account?my-address' ||
    //   window.location.href === MuhalikConfig.PATH + '/user/account?orders' || window.location.href === MuhalikConfig.PATH + '/user/account?pending-orders' ||
    //   window.location.href === MuhalikConfig.PATH + '/user/account?delivered-orders' || window.location.href === MuhalikConfig.PATH + '/user/account?cancelled-orders' ||
    //   window.location.href === MuhalikConfig.PATH + '/user/account?returned-orders'
    // ) {
    //   Router.push('/user/account')
    // }
  }

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
// {/* naseem, 787 , 0301 6067875, 8.30 */ }


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