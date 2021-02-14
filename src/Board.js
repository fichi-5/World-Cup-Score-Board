import React from 'react';

class Board extends React.Component {

    handleClick (match) {
        this.props.finishMatch(match);
    };

    render(){
        return (
            <div className="board">
                <h2>Matches in game</h2>
                {Object.keys(this.props.matches).map((key) => (
                    
                    this.props.matches[key].status == 'Started' &&
                    <p key={key}>
                        {this.props.matches[key].home_team} {this.props.matches[key].result_home_team} - {this.props.matches[key].result_away_team} {this.props.matches[key].away_team}
                        <button key="button{key}" onClick={e => {this.handleClick(this.props.matches[key])}} className="cross-finish-match">X</button>
                    </p>
                    )
                )}
            </div>
        );
    }
}

export default Board;