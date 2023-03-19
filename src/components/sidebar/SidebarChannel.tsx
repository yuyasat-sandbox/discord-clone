import { DocumentData } from 'firebase/firestore';
import React from 'react'
import { setChannelInfo } from '../../app/features/channelSlice';
import { useAppDispatch } from '../../app/hooks';
import './SidebarChannel.scss';

type Props = {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="sidebarChannel" onClick={() =>
      dispatch(
        setChannelInfo({
          channelId: id,
          channelName: channel.channel.channelName,
        })
      )
    }>
      <h4><span className="sidbarChannelHash">#</span>{channel.channel.channelName}</h4>
    </div>
  )
}

export default SidebarChannel