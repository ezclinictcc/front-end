import styled from 'styled-components';

interface IStyContainer{
    readonly width?: number;
    readonly height?: number;
  }

export const StyContainer = styled.div<IStyContainer>`
  display: flex;
  height: ${(props) => props.height ? `${props.height}px` : '100%'};
  width: ${(props) => props.width ? `${props.width}px` : '100%'};
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 185, 156, 1), rgba(0, 185, 156, 0.1));
  flex-direction: column;

  & > span:first-of-type {
      font-size: 192px;
      font-weight: 600;
  }
  & > span:nth-child(2) {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 50px;
  }
  & > span:last-of-type {
    display: flex;
    margin-bottom: 20px;
    text-align: center;
  }
`;