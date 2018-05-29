import React, { Component } from 'react';
import Timestamp from './Timestamp';

class Message extends Component {
  render() {
    const sender = this.props.sender;
    const body = this.props.body;
    const time = <Timestamp time={this.props.time}/>

    return(
      <article className="chat-entry local">
      <h3 className="entry-name "> {sender}</h3>
      <div>
      <div className="entry-body entry-bubble"> {body} <br /><p className="entry-time">{time}</p></div>

      </div>
      </article>
    );
  }
}

export default Message;
