import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  // part of the component class
  //   where you would normally make API calls
  componentDidMount() {
    console.log("component did mount");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json =>
        this.setState({
          title: json.title,
          body: json.body
        })
      );
  }

  // deprechiated
  //   runs before mounting
  //   componentWillMount() {
  //     console.log("component did mount");
  //   }

  //   // deprechiated
  //   componentWillUpdate() {
  //     console.log("runs when state changes for the component");
  //   }

  //   componentDidlUpdate() {
  //     console.log("runs when state changes for the component");
  //   }

  //   // deprechiated, bascially all the wills are being deprecated because of lack of async
  //   // to use you have to put UNSAFE_ before them
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("manipulate props before use");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     // you must return something with this method
  //     return null;
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
