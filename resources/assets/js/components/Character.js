import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Character extends Component {

    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentWillMount() {
        axios.get('/api/character').then(response => {
            this.setState({
                characters: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col md 12">
                        
                            <div className="card">
                                <div className="card-header">Character Sheet</div>

                                <div className="card-body">
                                    Character Data
                                    {this.state.characters.map(character => <li>{character.name}</li>)}
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Character />, document.getElementById('example'));
}
