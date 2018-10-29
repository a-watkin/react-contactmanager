import React, { Component } from "react";

export default class Test extends Component {
  // part of the component class
  //   where you would normally make API calls
  componentDidMount() {
    console.log("component did mount");
  }

  // deprechiated
  //   runs before mounting
  componentWillMount() {
    console.log("component did mount");
  }

  // deprechiated
  componentWillUpdate() {
    console.log("runs when state changes for the component");
  }

  componentDidlUpdate() {
    console.log("runs when state changes for the component");
  }

  // deprechiated, bascially all the wills are being deprecated because of lack of async
  // to use you have to put UNSAFE_ before them
  componentWillReceiveProps(nextProps, nextState) {
    console.log("manipulate props before use");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // you must return something with this method
    return null;
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
