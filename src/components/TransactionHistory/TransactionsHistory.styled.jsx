import styled from "styled-components";

export const TransactionsTable = styled.table`
  margin: 10vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px;
  border-radius: 0.5rem;
`;

export const HeadTableRow = styled.thead`
  font-size: 1.5rem;
  text-align: center;
`;

export const HeadTableColumn = styled.tr`
  width: 33%;
  padding: 1rem 5rem;
  background-color: #34c9e0;
  color: #ffffff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;

  &:last-child {
    border-radius: 0 0.5rem 0 0;
  }
  &:first-child {
    border-radius: 0 0.5rem 0 0;
  }
`;

export const TransactionsNameColumn = styled.td`
  width: 27%;

  &:first-child {
    border-radius: 0.5rem 0 0 0;
  }
  &:last-child {
    border-radius: 0 0.5rem 0 0;
  }
`;

export const DataRow = styled.tr`
  width: 40%;
  color: #8a8b8e;
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;

  &:nth-child(even) {
    background-color: #bebebe;
  }
`;

export const DataColumn = styled.td`
  text-align: center;
`;
