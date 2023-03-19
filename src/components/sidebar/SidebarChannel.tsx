import { DocumentData } from 'firebase/firestore';
import React from 'react'
import './SidebarChannel.scss';

type Props = {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;
  return (
    <div className="sidebarChannel">
      <h4><span className="sidbarChannelHash">#</span>{channel.channel.channelName}</h4>
    </div>
  )
}

export default SidebarChannel