import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col md 12">
                        
                            <img className="img-fluid" src={require('./images/TB-Logo-Better.png')} />
                            
                            A Dungeons and Dragons 5th Edition Character Manager for the New Adventurer!
                           
                            
                            <div className="col md 6">
                                <Button variant="raised" color="primary">
                                    Create Account
                                </Button>
                            </div>
                            <div className="col md 6">
                                <Button variant="raised" color="primary">
                                    Login
                                </Button>
                            </div>
                        
                        {/* <div className="card">
                            <div className="card-header">Example A Component</div>

                            <div className="card-body">
                                I'm an example component yes!
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
