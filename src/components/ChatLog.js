import React, { Component } from 'react';
import Message from './Message.js';

class ChatLog extends Component {
  render() {
    console.log(this.props)
    const messages = this.props.messages;

    const messageComponents = messages.map((message) => {
      return(
        <Message
        key={message.timeStamp}
        sender={message.sender}
        body={message.body}
        time={message.timeStamp}
        />
      );
    });

    return(
      <article className="chat-log">
      {messageComponents}
      </article>
    );
  }
}

export default ChatLog;


// const time = <Timestamp time={Date.now()}/>
