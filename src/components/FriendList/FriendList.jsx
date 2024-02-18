
import { FriendListItem } from "components/FriendList/FriendListItem";
import React from "react";
import { FriendItemList, FriendListContainer } from "./FriendList.styled";

export const FriendList = ({friends}) => {
  return <FriendListContainer>
    <FriendItemList>
      {friends.map(friend =><FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}></FriendListItem>)}
   </FriendItemList>
  </FriendListContainer>;
};
