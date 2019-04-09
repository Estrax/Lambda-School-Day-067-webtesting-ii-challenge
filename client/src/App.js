import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            balls: 0,
        };

        this.handleBall = this.handleBall.bind(this);
        this.handleFoul = this.handleFoul.bind(this);
        this.handleStrike = this.handleStrike.bind(this);
        this.handleHit = this.handleHit.bind(this);
        this.resetCounters = this.resetCounters.bind(this);
    }

    handleBall(){
        if(this.state.balls === 3){
            this.resetCounters();
        }else{
            this.setState({
                ...this.state,
                balls: (++this.state.balls)
            })
        }
    }

    handleFoul(){
        this.setState({
            ...this.state,
            strikes: this.state.strikes === 2 ? 2 : ++this.state.strikes
        });
    }

    handleStrike(){
        if(this.state.strikes === 2){
            this.resetCounters();
        }else{
            this.setState({
                ...this.state,
                strikes: ++this.state.strikes
            })
        }
    }

    handleHit(){
        this.resetCounters();
    }

    resetCounters(){
        this.setState({
            strikes: 0,
            balls: 0
        });
    }

    render() {
        return (
            <div className="App">
                <Display
                    balls={this.state.balls}
                    strikes={this.state.strikes}
                />

                <Dashboard
                    handleBall={this.handleBall}
                    handleFoul={this.handleFoul}
                    handleStrike={this.handleStrike}
                    handleHit={this.handleHit}
                />
            </div>
        );
    }
}

export default App;
