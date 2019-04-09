import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
    return (
        <>
            <span className="balls">
                Balls: {props.balls}
            </span>
            <span className="strikes">
                Strikes: {props.strikes}
            </span>
        </>
    );
};

Display.propTypes = {
    balls: PropTypes.number.isRequired,
    strikes: PropTypes.number.isRequired
}

export default Display;
