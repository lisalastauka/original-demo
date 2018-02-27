import styled from 'styled-components';

export const Chart = styled.div`
  justify-content: space-around ;
  .circular-chart {
    display: block;
    width: 100%;
    margin: 10px auto;
    max-height: 400px;
  }

  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 9;
  }

  .circle {
    fill: none;
    stroke-width: 7;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart .circle {
    stroke: ${props => props.theme.colors.purple};
  }

  .percentage {
    fill: ${props => props.theme.colors.violet};
    font-size: 8px;
    font-family: ${props => props.theme.fonts.roboto.medium};
    text-anchor: middle;
  }
`;
