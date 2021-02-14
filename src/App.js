import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import Modal from './Modal';
import Header from './Header';
import AddMatchForm from './AddMatchForm';
import UpdateMatchForm from './UpdateMatchForm';
import Board from './Board';
import Summary from './Summary';

class App extends React.Component {
    state = {
        matches: {},
    	show_modal_add_match: false,
    	show_modal_finish_match: false,
    	show_modal_update_match:false,
    	show_modal_summary:false
    };

  	showModal = e => {
  		switch (e){
  			case 'add_match':
	  			this.setState({
			    	show_modal_add_match: !this.state.show_modal_add_match
			    });
			    break;
			case 'finish_match':
				this.setState({
			    	show_modal_finish_match: !this.state.show_modal_finish_match
			    });
			    break;
			case 'update_match' : 
				this.setState({
			    	show_modal_update_match: !this.state.show_modal_update_match
			    });
			    break;
			case 'summary' : 
				this.setState({
			    	show_modal_summary: !this.state.show_modal_summary
			    });
			    break;
			default :
				this.setState({
			    	show_modal_add_match: false,
			    	show_modal_finish_match: false,
			    	show_modal_update_match: false,
			    	show_modal_summary: false
			    });
			    break;
  		}
	  };

	onClose = e => {
	    this.props.onClose && this.props.onClose(e);
  	};

    addMatch = match => {
        const matches = {...this.state.matches};
        let found = false;
        Object.keys(this.state.matches).map((item, i) => 
        	{
	            if (this.state.matches[item].home_team == match.home_team && this.state.matches[item].away_team == match.away_team){
	                found = true;
	            }
        	}
        )
        if (!found){
	        matches[`match${Date.now()}`] = match;
	        this.setState({ matches });
    	} else {
    		alert("This match exists");
    	}
    };

    finishMatch = (match) => {
        const matches = {...this.state.matches };
        match.status = "Finished";
        this.setState( {matches} );
    };

    updateMatch = (key, updatedMatch) => {
        const matches = {...this.state.matches };
        updatedMatch.total_goals = updatedMatch.result_home_team + updatedMatch.result_away_team;
        matches[key] = updatedMatch;
        this.setState( {matches} );
    };

    countMatches(){
    	const matches = this.state.matches;
    	return Object.keys(matches).length;
    }

    render(){
        return (
            <div className='wrapper_div'>
            	<Header tagline="World Cup Score Board"/>
            	<div className='table_scores'>
	                {
	                	this.countMatches() > 0
	                		?
		                	Object.keys(this.state.matches).map((item, i) => (
		                		<div className='line-match' key={i}>
		                			<span className="input-label">
		                			{this.state.matches[item].home_team} {this.state.matches[item].result_home_team} - {this.state.matches[item].result_away_team} {this.state.matches[item].away_team}
		                			</span>
		                		</div>
		                	))
		                	:
		                	'Insert a match'
	                }
            	</div>

	            <div className="menu_table col-md-12">
		            <button onClick={e => {this.showModal('add_match');}}> { !this.state.show_modal_add_match ? 'Add match' : 'Close Add match'} </button>
		            <Modal onClose={this.showModal} show_modal={this.state.show_modal_add_match}>
						<AddMatchForm addMatch={this.addMatch} />
					</Modal>
				</div>

	            <div className="menu_table col-md-12">
		            <button onClick={e => {this.showModal('finish_match');}}> { !this.state.show_modal_finish_match ? 'Finish match' : 'Close Finish match'} </button>
		            <Modal onClose={this.showModal} show_modal={this.state.show_modal_finish_match}>
						<Board matches={this.state.matches} finishMatch={this.finishMatch}/>
					</Modal>
				</div>

	            <div className="menu_table col-md-12">
		            <button onClick={e => {this.showModal('update_match');}}> { !this.state.show_modal_update_match ? 'Update scores' : 'Close Update scores'} </button>
		            <Modal onClose={this.showModal} show_modal={this.state.show_modal_update_match}>
		                {Object.keys(this.state.matches).map(key =>
	                		this.state.matches[key].status != "Finished" &&
		                    <UpdateMatchForm
		                        key={key}
		                        index={key}
		                        match={this.state.matches[key]}
		                        updateMatch={this.updateMatch}
		                    />
		                )}
					</Modal>
				</div>

	            <div className="menu_table col-md-12">
		            <button onClick={e => {this.showModal('summary');}}> { !this.state.show_modal_summary ? 'Summary' : 'Close Summary'} </button>
		            <Modal onClose={this.showModal} show_modal={this.state.show_modal_summary}>
						<Summary matches={this.state.matches}/>
					</Modal>
				</div>
            </div>
        );
    }
}

export default App;