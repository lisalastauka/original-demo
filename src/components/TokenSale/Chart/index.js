import React from 'react';
import { Chart } from './styled';

export default ({percentage = 30}) => (
  <Chart>
    <svg viewBox="-5 0 44 44" className="circular-chart">
      <path className="circle-bg"
        d="M18 5.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path className="circle"
        strokeDasharray={`${percentage}, 100`}
        d="M18 5.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="23.35" className="percentage">{percentage}%</text>
    </svg>
  </Chart>
);
