import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';

const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  console.log(channelName);

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>
        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat