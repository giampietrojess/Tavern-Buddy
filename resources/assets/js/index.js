import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example/Example.js';
import Character from './components/Character.js';
<<<<<<< HEAD
import Navi from './components/NavBar/Navi.js';

=======
import CharacterSheet from './components/CharacterSheet.js';
>>>>>>> bd727fdd2fa31dd2b3a7dbd02f1b39274592c5fb
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
<<<<<<< HEAD
                        
=======
                        <Route path="/character/:id" exact render={props => <CharacterSheet{...props} /> }/>
>>>>>>> bd727fdd2fa31dd2b3a7dbd02f1b39274592c5fb
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
