import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    
                    
                </div>
            </div>
        );
    }
}

if (document.getElementById('navbar')) {
    ReactDOM.render(<NavBar />, document.getElementById('navbar'));
}
