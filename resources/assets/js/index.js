import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example/Example.js';
import Character from './components/Character.js';
import Navi from './components/NavBar/Navi.js';
import CharacterSheet from './components/CharacterSheet.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class Index extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <CssBaseline />
     
   
                <Navi />
                <div className="container">
                    
                    
                    <Router>
                        <div>
                        
                        {/* <Link to="/character">Character Sheet</Link> */}
                            <Route path="/" exact component={Example}/>
                            <Route path="/character" exact component={Character}/>
                            <Route path="/character/:id" exact render={props => <CharacterSheet{...props}/>}/>
                        </div>
                    </Router>
                </div>
                </React.Fragment>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
