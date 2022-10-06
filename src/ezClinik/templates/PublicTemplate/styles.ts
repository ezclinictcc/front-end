import styled from 'styled-components';

interface IStyContainer {
    readonly width: number;
    readonly height: number;
}

export const StyContainer = styled.div<IStyContainer>`
  display: flex;
  flex-direction: row;
  height: ${(props) => `${props.height}px`};
  width: 100%;
  background-color: rgb(0, 185, 156);

  @media(max-width: 768px) {
    flex-direction: column;
  }
  @media(max-width: 480px) {
    flex-direction: column;
  }
`;