import React from "react";

import { Profile } from "./Profile/Profile";

import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json'

import { FriendList } from "./FriendList/FriendList";
import friends from './FriendList/friends.json'

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"


const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload" stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
