import React from 'react';

class AddMatchForm extends React.Component {
    home_teamRef = React.createRef();
    away_teamRef = React.createRef();

    createMatch = (event) => {
        event.preventDefault();
        const match = {
            home_team: this.home_teamRef.current.value,
            away_team: this.away_teamRef.current.value,
            result_home_team: 0,
            result_away_team: 0,
            status: 'started'
        };

        this.props.addMatch(match);
        // refresh the form
        event.currentTarget.reset();
    };

    render(){
        return (
            <form className="match-edit" onSubmit={ this.createMatch }>
                <input name="home_team" ref={this.home_teamRef} type="text" placeholder="Home Team" />
                <input name="away_team" ref={this.away_teamRef} type="text" placeholder="Away Team" />

                <button type="submit">+ Add Match</button>
            </form>
        );
    }
}

export default AddMatchForm;