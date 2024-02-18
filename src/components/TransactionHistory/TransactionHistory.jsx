import React from 'react'
import {DataRow,
  HeadTableColumn,
  DataColumn,
  HeadTableRow,
  TransactionsTable,
  TransactionsNameColumn,
} from "./TransactionsHistory.styled";

export const TransactionHistory = ({items}) => {
  return (
    <TransactionsTable>
      <HeadTableRow>
        <HeadTableColumn>
          <TransactionsNameColumn>Type</TransactionsNameColumn>
          <TransactionsNameColumn>Amount</TransactionsNameColumn>
          <TransactionsNameColumn>Currency</TransactionsNameColumn>
        </HeadTableColumn>
      </HeadTableRow>

      <tbody>
        {items.map((item) => (
          <DataRow key={item.id}>
            <DataColumn>{item.type}</DataColumn>
            <DataColumn>{item.amount}</DataColumn>
            <DataColumn>{item.currency}</DataColumn>
          </DataRow>
        ))}
      </tbody>
    </TransactionsTable>
  );
}