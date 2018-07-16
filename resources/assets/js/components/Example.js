import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col md 12">
                        
                            <img className="img-fluid" src={require('./images/TB-Logo-Better.png')} />
                        
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
