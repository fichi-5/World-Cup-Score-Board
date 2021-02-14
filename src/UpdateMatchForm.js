import React from 'react';

class UpdateMatchForm extends React.Component {
    handleChange = event => {
        const updatedMatch = {
            ...this.props.match,
            [event.currentTarget.name]: parseInt(event.currentTarget.value)
        };
        this.props.updateMatch(this.props.index, updatedMatch);
    };

    render(){
        return (
            <div className='line-match' key={this.props.match.index}>
                <div className="match-title">
                    <label>{this.props.match.home_team} - {this.props.match.away_team}</label>
                </div>
                <div className="scores-view">
                    <input name="result_home_team" onChange={this.handleChange} type="text" value={this.props.match.result_home_team}/>
                    <input name="result_away_team" onChange={this.handleChange} type="text" value={this.props.match.result_away_team}/>
                </div>
            </div>
        );
    }
}

export default UpdateMatchForm;