import React, { Component } from 'react';
import Timestamp from './Timestamp';

class Message extends Component {

  // Define if display is as local(left) or remote(right) message:
  isRemote = () => {
    if (this.props.sender === 'Estragon') {
      return 'remote chat-entry';
    }
    return 'local chat-entry';
  }

  render() {

    const sender = this.props.sender;
    const body = this.props.body;
    const time = <Timestamp time={this.props.time}/>

    return(
      <article className={this.isRemote()}>
      <h3 className="entry-name "> {sender}</h3>
      <div>
      <div className="entry-body entry-bubble"> {body} <br /><p className="entry-time">{time}</p></div>

      </div>
      </article>
    );
  }
}

export default Message;
