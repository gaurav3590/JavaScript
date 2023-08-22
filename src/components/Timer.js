import React, { useEffect, useState } from 'react';

export class TimerC extends React.Component {
  constructor(props) {
    super(props);
    console.log(">>constructor");
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  UNSAFE_componentWillMount() {
    console.log(">>UNSAFE_componentWillMount");
  }

  componentDidMount() {
    console.log(">>componentDidMount");
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log(">>componentWillUnmount");
    clearInterval(this.interval);
  }

  stop = () => {
    clearInterval(this.interval);
  }

  reset = () => {
    this.setState({ seconds: 0 });
  }

  start = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds} <br /><br />
        <button onClick={this.stop}> Stop</button>&nbsp;
        <button onClick={this.reset}> Reset to 0</button>&nbsp;
        <button onClick={this.start}> Start</button>
      </div>
    );
  }
}

export function TimerF() {
  var [count, setCount] = useState(0);
  var [CInterval, setCInterval] = useState(0);

  useEffect(() => {

    var interval = setInterval(() => tick(), 1000);
    setCInterval(interval);
    return () => {
      clearInterval(interval);
    }
  }, [])
  let stopTimer = () => {
    clearInterval(CInterval);

  }

  let resetTimer = () => {
    setCInterval({ seconds: 0 });
  }

  let startTimer = () => {
    this.interval = setInterval(() => tick(), 1000);

  }

  let tick = () => {
    setCount(prevState => (prevState + 1));
  }

  return (
    <div>
      TimerF Seconds: {count} <br /><br />
      <button onClick={stopTimer}> Stop</button>&nbsp;
      <button onClick={resetTimer}> Reset to 0</button>&nbsp;
      <button onClick={startTimer}> Start</button>
    </div>
  );
}