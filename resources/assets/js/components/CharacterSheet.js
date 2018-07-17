import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



export default class CharacterSheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        axios.get("/api/character/" + this.props.match.params.id).then(response => {
            this.setState({
                post : response.data[0]
            });
        }).catch(error => console.log(error));
    }
    render() {
        console.log(this.props);
        return (
            <h1>{this.state.post.name}</h1>
        );


        // if(this.state.post) {
        //     return (
        //         <div>
        //             <h1>Character Name: {this.state.post.name} </h1>
        //             <h3>Race: {this.state.post.race} </h3>
        //             <h3>Class: {this.state.post.class} </h3>
        //         </div>
        //     );
        // } else {
        //     return null;
        // }

    }
}
