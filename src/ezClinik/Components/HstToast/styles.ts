import styled from 'styled-components';

export const StyContainer = styled.div`
  width: fit-content;
  height: 0px;
  background: red;
  position: absolute;
  z-index: 500;
  right: 0px;
`;

export const StyToastWrapper = styled.div`
  width: 480px;
  height: 0px;
  background: yellow;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

interface IStyToast {
  readonly duration: number;
  readonly background: string;
}
export const StyToast = styled.div<IStyToast>`
  width: 470px;
  height: 65px;
  background: ${(props) => props.background};
  margin: 5px;
  position: relative;
  right: 50;
  visibility: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  -webkit-animation: ${(props) => `fadein 1s, fadeout 0.5s ${props.duration}s`};
  animation: ${(props) => `fadein 1s, fadeout 0.5s ${props.duration}s`};
  animation-iteration-count: initial;
  animation-fill-mode: forwards;
  animation-timing-function: ease;

  @keyframes fadein {
    from {
      visibility: visible;
      right: -375px;
      opacity: 0;
    }
    to {
      visibility: visible;
      right: 0px;
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      visibility: visible;
      right: 0px;
      opacity: 1;
    }
    to {
      visibility: visible;
      right: -375px;
      opacity: 0;
    }
  }
`;

export const StyIconWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > span {
    color: #fff;
    word-break: break-word;
  }
`;
