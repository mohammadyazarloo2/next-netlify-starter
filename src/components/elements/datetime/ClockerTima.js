import React from "react";
import Link from 'next/link'

class ClockerTima extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    // this.state.date = new Date(); - wrong way
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <>
          <h3 dir="ltr">{this.state.date.toLocaleTimeString()} </h3>
      </>
    );
  }
}

export default ClockerTima;
