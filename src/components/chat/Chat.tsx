import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import React, { useEffect, useState } from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';

export interface Message {
  timestamp: Timestamp;
  message: string,
  user: {
    uid: string,
    photo: string,
    email: string,
    displayName: string,
  }
}

const Chat = () => {
  const [inputText, setInputText] = useState<string>("")
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user
    })
    setInputText("")
  }

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage message={message} key={index} />
        ))}
      </div>
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input
            type="text"
            placeholder="#Udemyへメッセージを送信"
            value={inputText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          />
          <button type="submit"
            className="chatInputButton"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}
          >
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