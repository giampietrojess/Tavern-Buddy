import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example/Example.js';
import Character from './components/Character.js';
import Navi from './components/NavBar/Navi.js';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Navi />
                
                <Router>
                    <div>
                    
            
                        <Route path="/" exact component={Example}/>
                        <Route path="/character" exact component={Character}/>
                        
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
