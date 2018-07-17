import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home.js';
import Character from '../Character/Character.js';
// import Navi from '../NavBar/Navi.js';
// import CharacterSheet from './CharacterSheet/CharacterSheet.js';


const Main = () => (
    <main>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="character" exact component={Character}/>
        </Switch>
    </main>
)

export default Main