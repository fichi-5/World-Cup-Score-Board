import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import Header from './Header';
//import Board from './Board';
//import base from '../base';

function startGame(){
	console.log("startGame");
}

function finishGame(){
	console.log("finishGame");
}

function updateScore(){
	console.log("updateScore");
}

function viewSummary(){
	console.log("viewSummary");
}

class App extends React.Component {
    render(){
        return (
            <div>
            	<Header tagline="Scores Board"/>
	            <div className="menu_table">
					<button onClick={startGame}>Start Game</button>
					<button onClick={finishGame}>Finish Game</button>
					<button onClick={updateScore}>Update Score</button>
					<button onClick={viewSummary}>View Summary</button>
	            </div>
            </div>
        );
    }
}

export default App;