import React from 'react';

class Board extends React.Component {
    render(){
        return (
            <div className="board">
                <h2>Board</h2>
                {Object.keys(this.props.matches).map(key =>
                    <EditMatchForm
                        key={key}
                        index={key}
                        match={this.props.matches[key]}
                        updateFish={this.props.updateMatch}
                    />
                )}
                <button onClick={this.props.loadSampelMatches}>Load Sample Match</button>
            </div>
        );
    }
}

export default Board;