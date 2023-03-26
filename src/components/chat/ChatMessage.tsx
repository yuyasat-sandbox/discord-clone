import { Avatar } from '@mui/material';
import React from 'react'
import './ChatMessage.scss';
import { Message } from "./Chat";

type Props = {
  message: Message
}
const ChatMessage = (props: Props) => {
  const { message } = props;
  return (
    <div className="message">
      <Avatar src={message.user?.photo} />
      <div className="messageInfo">
        <h4>
          {message.user?.displayName}
          <span className="messageTimestamp">
            {new Date(message.timestamp?.toDate()).toLocaleString()}
          </span>
          <p>{message.message}</p>
        </h4>
      </div>
    </div>
  )
}

export default ChatMessage