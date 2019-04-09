import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

afterEach(cleanup);

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(<App />);
  });

  it('checks if the strike button works', () => {
    const { getByText } = render(<App />);
    const displayStrikes = getByText('Strikes: 0', {selector: 'span.strikes'});
    const strikeButton = getByText(/strike/i, {selector: 'button.strike'});
    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    fireEvent.click(strikeButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 1');
  });

  it('checks if the ball button works', () => {
    const { getByText } = render(<App />);
    const displayBalls = getByText('Balls: 0', {selector: 'span.balls'});
    const ballButton = getByText(/ball/i, {selector: 'button.ball'});
    expect(displayBalls.textContent).toEqual('Balls: 0');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 1');
  });

  it('checks if the foul button works', () => {
    const { getByText } = render(<App />);
    const displayStrikes = getByText('Strikes: 0', {selector: 'span.strikes'});
    const foulButton = getByText(/foul/i, {selector: 'button.foul'});
    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    fireEvent.click(foulButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 1');
  });

  it('checks if the hit button works', () => {
    const { getByText } = render(<App />);
    const displayStrikes = getByText('Strikes: 0', {selector: 'span.strikes'});
    const displayBalls = getByText('Balls: 0', {selector: 'span.balls'});
    
    const strikeButton = getByText(/strike/i, {selector: 'button.strike'});
    const ballButton = getByText(/ball/i, {selector: 'button.ball'});

    const hitButton = getByText(/hit/i, {selector: 'button.hit'});
    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    expect(displayBalls.textContent).toEqual('Balls: 0');

    fireEvent.click(strikeButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 1');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 1');
    fireEvent.click(hitButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    expect(displayBalls.textContent).toEqual('Balls: 0');
  });

  it('checks the default state on load', () => {
    const { getByText } = render(<App />);
    getByText('Balls: 0', {selector: 'span.balls'});
    getByText('Strikes: 0', {selector: 'span.strikes'});
  });

  it('resets balls and strikes when player reaches 3 strikes', () => {
    const { getByText } = render(<App />);
    const displayStrikes = getByText('Strikes: 0', {selector: 'span.strikes'});
    const strikeButton = getByText(/strike/i, {selector: 'button.strike'});
    const ballButton = getByText(/ball/i, {selector: 'button.ball'});
    const displayBalls = getByText('Balls: 0', {selector: 'span.balls'});

    expect(displayBalls.textContent).toEqual('Balls: 0');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 1');

    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    fireEvent.click(strikeButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 1');
    fireEvent.click(strikeButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 2');
    fireEvent.click(strikeButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    expect(displayBalls.textContent).toEqual('Balls: 0');
  });

  it('resets balls and strikes when player reaches 4 balls', () => {
    const { getByText } = render(<App />);
    const displayStrikes = getByText('Strikes: 0', {selector: 'span.strikes'});
    const strikeButton = getByText(/strike/i, {selector: 'button.strike'});
    const ballButton = getByText(/ball/i, {selector: 'button.ball'});
    const displayBalls = getByText('Balls: 0', {selector: 'span.balls'});

    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    fireEvent.click(strikeButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 1');

    expect(displayBalls.textContent).toEqual('Balls: 0');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 1');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 2');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 3');
    fireEvent.click(ballButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    expect(displayBalls.textContent).toEqual('Balls: 0');
  });

  it('does not change strikes count on 2 strikes via foul', () => {
    const { getByText } = render(<App />);
    const displayStrikes = getByText('Strikes: 0', {selector: 'span.strikes'});
    const ballButton = getByText(/ball/i, {selector: 'button.ball'});
    const foulButton = getByText(/foul/i, {selector: 'button.foul'});
    const displayBalls = getByText('Balls: 0', {selector: 'span.balls'});

    
    expect(displayBalls.textContent).toEqual('Balls: 0');
    fireEvent.click(ballButton);
    expect(displayBalls.textContent).toEqual('Balls: 1');

    expect(displayStrikes.textContent).toEqual('Strikes: 0');
    fireEvent.click(foulButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 1');
    fireEvent.click(foulButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 2');
    fireEvent.click(foulButton);
    expect(displayStrikes.textContent).toEqual('Strikes: 2');
  });
});

describe('<Dashboard />', () => {
  it('renders the all the required buttons', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/strike/i, {selector: 'button.strike'});
    getByText(/ball/i, {selector: 'button.ball'});
    getByText(/foul/i, {selector: 'button.foul'});
    getByText(/hit/i, {selector: 'button.hit'});
  });

  it('renders the strike button correctly', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/strike/i, {selector: 'button.strike'});
  });

  it('renders the ball button correctly', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/ball/i, {selector: 'button.ball'});
  });

  it('renders the foul button correctly', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/foul/i, {selector: 'button.foul'});
  });

  it('renders the hit button correctly', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/hit/i, {selector: 'button.hit'});
  });
});

describe('<Display />', () => {
  it('renders the all the required divs', () => {
    const { getByText } = render(<Display balls={2} strikes={2} />);
    getByText(/Balls: 2/i, {selector: 'span.balls'});
    getByText(/Strikes: 2/i, {selector: 'span.strikes'});
  });

  it('renders the strikes span correctly', () => {
    const { getByText } = render(<Display balls={0} strikes={2} />);
    getByText(/Strikes: 2/i, {selector: 'span.strikes'});
  });

  it('renders the balls span correctly', () => {
    const { getByText } = render(<Display balls={1} strikes={0} />);
    getByText(/Balls: 1/i, {selector: 'span.balls'});
  });
});