import React, { Component } from 'react';
import ReactDOM from '../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import Button from '@material-ui/core/Button';


export default class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    
                    
                </div>
            </div>
        );
    }
}

if (document.getElementById('navbar')) {
    ReactDOM.render(<NavBar />, document.getElementById('navbar'));
}
