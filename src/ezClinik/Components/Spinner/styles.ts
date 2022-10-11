import styled from "styled-components";

interface IStyContainerProps {
  readonly size: number;
  readonly color?: string;
}
export const StyContainer = styled.div<IStyContainerProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border: 3px solid transparent;
  border-left-color: rgb(0,185,156);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyPageCircleContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 2000;
  background: transparent;
`;

export const StyPageWrapperContainer = styled.div<IStyContainerProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: relative;
`;

export const StyTwoSpinContainer = styled.div<IStyContainerProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border: 5px solid transparent;
  border-left-color: ${(props) => props.color ? props.color : 'rgb(0,185,156)'};
  border-right-color: ${(props) => props.color ? props.color : 'rgb(0,185,156)'};
  border-radius: 50%;
  position: absolute;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyOneSpinContainer = styled.div<IStyContainerProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border: 5px solid transparent;
  border-top-color: ${(props) => props.color ? props.color : 'rgb(0,185,156)'};
  position: absolute;
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
