import React, { Component } from 'react';
import './App.css';

class MessageItem extends Component {
  render() {
    return (
      <div className="App">
        { this.props.message }
      </div>
    );
  }
}

export default MessageItem;
