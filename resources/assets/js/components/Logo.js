import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Logo extends Component {
    render() {
        return (       
           
                <img className="img-fluid" src={require('./images/TB-Logo-Better.png')} />
                
        );
    }
}

if (document.getElementById('logo')) {
    ReactDOM.render(<Logo />, document.getElementById('logo'));
}
