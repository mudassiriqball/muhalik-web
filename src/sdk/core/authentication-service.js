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
    // const decodedToken = decode(token);

    // if (decodedToken.data.role == 'customer') {
    //     Router.push('/index')
    // } else if (decodedToken.data.role == 'vendor') {
    //     Router.push('/vendor')
    // } else if (decodedToken.data.role == 'admin') {
    //     Router.push('/admin')
    // } else {
    //     Router.push('/index')
    // }
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

export function getUncodededTokenFromStorage() {
    return reactLocalStorage.get('token');
}

export function removeTokenFromStorage() {
    try{
    reactLocalStorage.remove('token');
    Router.push('/index');
    }catch(error){
        console.log("error:", error)
    }
}

export function chectAuth(rolee) {
    try {
        const token = reactLocalStorage.get('token');
        const decodedToken = decode(token);
        if (decodedToken.data.role !== rolee) {
            Router.push('/index')
        } else {
            return decodedToken.data.fullName;
        }
    } catch (error) {
        return null;
    }
}

export default AuthenticationService;