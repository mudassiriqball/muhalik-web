// export default AuthenticationService;
import { reactLocalStorage } from 'reactjs-localstorage';
// import { useRouter } from 'next/router'
// import Router from 'next/router'

import * as decode from 'jwt-decode'
import Router from 'next/router'

const AuthenticationService = () => (
    <div></div>
)

export async function saveTokenToStorage(token) {
    await reactLocalStorage.set('token', token);
}

export function getDecodedTokenFromStorage() {
    try {
        const token = reactLocalStorage.get('token');
        const decodedToken = decode(token);
        return decodedToken.data;
    } catch (error) {
        return null;
    }
}

export function getTokenFromStorage() {
    return reactLocalStorage.get('token');
}

export function removeTokenFromStorage() {
    try {
        reactLocalStorage.remove('token');
        return true
    } catch (error) {
        console.log("error:", error)
        return false
    }
}

export function chectAuth(rolee) {
    try {
        const token = reactLocalStorage.get('token');
        const decodedToken = decode(token);
        if (decodedToken.data.role == 'admin') {
            return decodedToken.data.fullName;
        } else if (decodedToken.data.role !== rolee) {
            Router.replace('/index')
        } else {
            return decodedToken.data.fullName;
        }
    } catch (error) {
        Router.replace('/index')
    }
}

export default AuthenticationService;