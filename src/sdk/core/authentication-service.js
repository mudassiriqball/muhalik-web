// import React, { Component } from 'react';
// import {reactLocalStorage} from 'reactjs-localstorage';

// class AuthenticationService extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             token: ''
//         }
//     }
//     saveTokenToStorage(token) {
//         reactLocalStorage.set('token', token);
//     }

//     async getTokenFromStorage() {
//         return await reactLocalStorage.get('token');
//     }

//     async logout() {
//         reactLocalStorage.clear();
//     }

//     render() {
//         return (null);
//     }
// }

// export default AuthenticationService;
import { reactLocalStorage } from 'reactjs-localstorage';
// import { useRouter } from 'next/router'
// import Router from 'next/router'

import * as decode from 'jwt-decode'
import Router from 'next/router'

const AuthenticationService = () => (
    <div></div>
)

export function saveTokenToStorage(token) {
    reactLocalStorage.set('token', token);
    const decodedToken = decode(token);

    if (decodedToken.data.role == 'customer') {
        Router.push('/index')
    } else if (decodedToken.data.role == 'vendor') {
        Router.push('/vendor')
    } else if (decodedToken.data.role == 'admin') {
        Router.push('/admin')
    } else {
        Router.push('/index')
    }
}

export function getTokenFromStorage() {
    try {
        const token = reactLocalStorage.get('token');
        const decodedToken = decode(token);
        return decodedToken.data;
    } catch (error) {
        return null;
    }
}

export default AuthenticationService;