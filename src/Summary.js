import React from 'react';

class Summary extends React.Component {
    
    render(){
        const ordered_matches = [];
        let num_matches = Object.keys(this.props.matches).length;
        Object.keys(this.props.matches).map((key, i) => (
                ordered_matches[num_matches-1] = this.props.matches[key],
                num_matches--
            )
        )
        const sorted = ordered_matches.sort((a, b) => b['total_goals'] - a['total_goals']);

        return (
            <div className="summary">
                {
                    sorted.map((item, i) => (
                        <div ref={'sorted'+i}>
                            {item.home_team} {item.result_home_team} - {item.away_team} {item.result_away_team}
                        </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default Summary;