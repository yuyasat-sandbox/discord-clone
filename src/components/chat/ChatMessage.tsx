import { Avatar } from '@mui/material';
import React from 'react'
import './ChatMessage.scss';

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Yuyasat
          <span className="messageTimestamp">2022/12/18</span>
          <p>メッセージ本文</p>
        </h4>

      </div>
    </div>
  )
}

export default ChatMessage