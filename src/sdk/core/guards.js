import Router from 'next/router'
import { getTokenFromStorage } from './authentication-service';
import React, { Component } from 'react';
// async function  Guards () {

// }
class Guards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        const token =  getTokenFromStorage();
        console.log('hjk',token)
        if(token.role !== 'admin'){
            Router.push('/index');
        }else {
            return;
        }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Guards;