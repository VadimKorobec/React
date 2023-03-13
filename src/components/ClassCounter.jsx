import React from 'react';

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: (this.state += 1) });
  }

  decrement() {}
  render() {
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    );
  }
}
