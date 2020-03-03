import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';

class AuthenticationService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }
    saveTokenToStorage(token) {
        reactLocalStorage.set('token', token);
    }

    async getTokenFromStorage() {
        return await reactLocalStorage.get('token');
    }

    async logout() {
        reactLocalStorage.clear();
    }
    
    render() {
        return (null);
    }
}

export default AuthenticationService;