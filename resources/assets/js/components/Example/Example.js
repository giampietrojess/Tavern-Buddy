import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './Example.css';


export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s1"></div>
                    <div className="col s11">
                        <img className="responsive-img" src={require('./images/TB-Logo-Better.png')} />
                    </div>
                    
                </div>    
                <div className="row valign-wrapper">
                   
                    <div className="col s12 valign-wrapper">   
                        <p className="tagline">A Dungeons and Dragons 5th Edition Character Manager for the New Adventurer!</p>
                    </div>     
                  
                </div> 
                <div className="row valign-wrapper">
                    <div className="col s12 center">
                        <Button href="/register" className="fpButton" variant="raised">
                        <Icon>arrow_forward</Icon>Create Account
                        </Button>
                        <Button href="/login" className="fpButton" variant="raised">
                        <Icon>arrow_forward</Icon> Login Here
                        </Button>
                    </div>
                
                </div>
                    
            </div>
                    
            
            
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
