import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
    return (
        <div>
            <h1>Display!</h1>
            <span className="balls">
                Balls: {props.balls}
            </span>
            <span className="strikes">
                Strikes: {props.strikes}
            </span>
        </div>
    );
};

Display.propTypes = {
    balls: PropTypes.number.isRequired,
    strikes: PropTypes.number.isRequired
}

export default Display;
