import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './Example.css';


export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col md 10">
                        <img className="img-fluid" src={require('./images/TB-Logo-Better.png')} />
                    </div>
                    
                </div>    
                <div className="row justify-content-center">
                   
                    <div className="col md 12 justify-content-center">   
                        <p className="tagline">A Dungeons and Dragons 5th Edition Character Manager for the New Adventurer!</p>
                    </div>     
                  
                </div> 
                <div className="row justify-content-center">
                    <div className="col md 12 center">
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
