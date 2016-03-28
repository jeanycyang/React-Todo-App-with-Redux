import React, { Component } from 'react';

export default class InputArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Type something..." />
        <button><i className="fa fa-plus"></i></button>
      </div>
    );
  }
};