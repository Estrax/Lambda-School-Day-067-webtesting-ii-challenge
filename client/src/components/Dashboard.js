import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = props => {
    return (
        <>
            <button className="ball" onClick={props.handleBall}>
                Ball
            </button>
            <button className="strike" onClick={props.handleStrike}>
                Strike
            </button>
            <button className="foul" onClick={props.handleFoul}>
                Foul
            </button>
            <button className="hit" onClick={props.handleHit}>
                Hit
            </button>
        </>
    );
};

Dashboard.propTypes = {
    handleBall: PropTypes.func,
    handleStrike: PropTypes.func,
    handleFoul: PropTypes.func,
    handleHit: PropTypes.func
}

export default Dashboard;
