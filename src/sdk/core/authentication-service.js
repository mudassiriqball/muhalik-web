// export default AuthenticationService;
import { reactLocalStorage } from 'reactjs-localstorage';
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

export function removeTokenFromStorage(index_page) {
    try {
        reactLocalStorage.remove('token');
        if (index_page) {
            Router.reload()
        } else {
            Router.replace('/index')
        }
        return
    } catch (error) {
        console.log("error:", error)
        alert('Logout Failed')
        return null
    }
}




export function checkAuth(rolee) {
    try {
        const token = reactLocalStorage.get('token');
        const decodedToken = decode(token);
        if (decodedToken.data.role == rolee) {
            console.log('good')
            return decodedToken.data;
        } else {
            console.log('ddd')
            Router.replace('/index')
        }
    } catch (error) {
        if (rolee == '/login' || rolee == '/signup' || rolee == '/vendor-signup') {
            Router.replace(rolee)
        } else {
            Router.replace('/index')
        }
    }
}

export default AuthenticationService;