// // export default AuthenticationService;
// import * as decode from 'jwt-decode'
// import Router from 'next/router'

// const AuthenticationService = () => (
//     <div></div>
// )

// export async function saveTokenToStorage(token) {
//     await localStorage.setItem('token', token)
// }

// export function getDecodedTokenFromStorage() {
//     const token = localStorage.getItem('token')
//     if (token) {
//         const decodedToken = decode(token);
//         return decodedToken.data;
//     }
//     return null
// }

// export function getTokenFromStorage() {
//     return localStorage.getItem('token');
// }

// export function removeTokenFromStorage(index_page) {
//     localStorage.removeItem('token')
//     if (index_page) {
//         Router.reload('/')
//     } else {
//         Router.replace('/')
//     }
//     return
// }


// export function checkTokenExpAuth() {
//     const token = localStorage.getItem('token')
//     if (token != null) {
//         const decodedToken = decode(token);
//         if (decodedToken.exp < Date.now() / 1000) {
//             localStorage.removeItem('token')
//             Router.reload('/')
//         } else {
//             return decodedToken.data;
//         }
//     } else
//         return null;
// }

// export function checkAuth(current_role) {
//     const token = localStorage.getItem('token')
//     if (token == null) {
//         if (current_role == '/login' || current_role == '/signup' || current_role == '/vendor-signup') {
//             Router.replace(current_role)
//         } else
//             Router.replace('/')
//     } else {
//         const decodedToken = decode(token);
//         if (decodedToken.exp < Date.now() / 1000) {
//             localStorage.removeItem('token')
//             Router.push('/')
//         } else if (decodedToken.data.role == current_role) {
//             console.log('fuck')
//             return decodedToken.data;
//         } else if (current_role == '/vendor-signup' && decodedToken.data.role == 'customer') {
//             Router.replace(current_role)
//         } else {
//             Router.replace('/')
//         }
//     }
// }

// export default AuthenticationService;

// export default AuthenticationService;
import * as decode from 'jwt-decode'
import Router from 'next/router'

const AuthenticationService = () => (
    <div></div>
)

export async function saveTokenToStorage(token) {
    await localStorage.setItem('token', token)
}

export function getDecodedTokenFromStorage() {
    const token = localStorage.getItem('token')
    if (token) {
        const decodedToken = decode(token);
        return decodedToken.data;
    }
    return null
}

export function getTokenFromStorage() {
    return localStorage.getItem('token');
}

export async function removeTokenFromStorage() {
    try {
        await localStorage.removeItem('token')
        return true
    } catch (err) {
        return false
    }
}


export function checkTokenExpAuth() {
    const token = localStorage.getItem('token')
    if (token != null) {
        const decodedToken = decode(token);
        if (decodedToken.exp < Date.now() / 1000) {
            localStorage.removeItem('token')
            Router.push('/')
            Router.reload('/')
        } else {
            return decodedToken.data;
        }
    } else
        return;
}

export function checkAuth(current_role) {
    const token = localStorage.getItem('token')
    if (token == null) {
        if (current_role == '/login' || current_role == '/signup' || current_role == '/vendor-signup') {
            Router.replace(current_role)
        } else
            Router.replace('/')
    } else {
        const decodedToken = decode(token);
        if (decodedToken.exp < Date.now() / 1000) {
            localStorage.removeItem('token')
            Router.push('/')
        } else if (decodedToken.data.role == current_role) {
            return decodedToken.data;
        } else if (current_role == '/vendor-signup' && decodedToken.data.role == 'customer') {
            Router.replace(current_role)
        } else {
            Router.replace('/')
        }
    }
}

export default AuthenticationService;