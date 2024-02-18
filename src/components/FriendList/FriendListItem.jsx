import React from 'react'
import { FriendAvatar, FriendItem, FriendName, FriendStatus } from './FriendList.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}