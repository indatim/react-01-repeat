import React from "react";
import {
  StatisticsContainer,
  StatisticsLabel,
  StatisticsList,
  StatisticsPercentage,
  StatisticsTitle,
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => (
  <StatisticsContainer>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}

    <StatisticsList>
      {stats.map((item) => (
        <li style={{ backgroundColor: getRandomHexColor() }} key={item.id}>
          <StatisticsLabel>{item.label}</StatisticsLabel>
          <StatisticsPercentage>{item.percentage}</StatisticsPercentage>
        </li>
      ))}
    </StatisticsList>
  </StatisticsContainer>
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
