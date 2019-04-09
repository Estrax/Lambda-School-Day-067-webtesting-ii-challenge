import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
    return (
        <>
            <span className="inning">
                Current inning: {props.inning}
            </span>

            <div className="inningData">
                <span className="outs">Outs: {props.inningData.outs}</span>
                <span className="runs">Runs: {props.inningData.runs}</span>
                <span className="errors">Errors: {props.inningData.errors}</span>
            </div>

            <div className="basesOccupied">
                Bases occupied:
                <span className="base1">Base 1: {props.basesOccupied.base1.toString()}</span>
                <span className="base2">Base 2: {props.basesOccupied.base2.toString()}</span>
                <span className="base3">Base 3: {props.basesOccupied.base3.toString()}</span>
                <span className="base4">Base 4: {props.basesOccupied.base4.toString()}</span>
            </div>

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
    strikes: PropTypes.number.isRequired,
    inning: PropTypes.number.isRequired,
    inningData: PropTypes.shape({
        outs: PropTypes.number.isRequired,
        runs: PropTypes.number.isRequired,
        errors: PropTypes.number.isRequired,
    }).isRequired,
    basesOccupied: PropTypes.shape({
        base1: PropTypes.bool.isRequired,
        base2: PropTypes.bool.isRequired,
        base3: PropTypes.bool.isRequired,
        base4: PropTypes.bool.isRequired
    }).isRequired
}

export default Display;