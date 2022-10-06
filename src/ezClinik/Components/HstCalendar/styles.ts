import styled, { css } from 'styled-components';

interface IStyContainer {
  readonly height: number;
}

interface IStyContainerCalendar {
  readonly height: number;
}

interface IStyContainerInput {
  readonly isOpen: boolean;
  readonly disable: boolean;
  readonly hasError: boolean;
  readonly height: number;
}

export const StyContainer = styled.div<IStyContainer>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > span:last-of-type {
    color: red;
    width: max-content;
  }
`;

interface ILabelContainer {
  readonly hasError: boolean;
  readonly disable: boolean;
}

export const StyLabelContainer = styled.div<ILabelContainer>`
  width: 100%;
  height: fit-content;
  margin-bottom: 5px;
  span {
    color: ${(props) =>
    props.hasError
      ? 'red'
      : props.disable
        ? 'black'
        : 'black'};
    -webkit-touch-callout: none; /* iPhone OS, Safari */
    -webkit-user-select: none; /* Chrome, Safari 3 */
    -khtml-user-select: none; /* Safari 2 */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none;
  }
`;

export const StyContainerInput = styled.div<IStyContainerInput>`
  display: flex;
  align-items: center;
  background: #fff;
  display: flex;
  width: 80%;
  min-height: 15px;
  max-height: 35px;
  height: ${(props) => `${props.height}px`};
  border-radius: 2px;
  padding: 0px 10px;
  border: 1px solid
    ${(props) => (props.hasError ? 'red' : 'transparent')};
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => props.disable && 'none'};
  ${(props) =>
    props.hasError
      ? 'red'
      : 'gray'};
  ${(props) =>
    props.isOpen &&
    css<IStyContainerInput>`
      border: 1px solid gray;
      transition: 0.3s;
    `};
`;

interface IStyInput {
  readonly fontSize: number;
  readonly disable: boolean;
}
export const StyInput = styled.input<IStyInput>`
  border: 0;
  background: none;
  width: 85%;
  height: 100%;
  pointer-events: ${(props) => props.disable && 'none'};
  font-size: ${(props) => `${props.fontSize}rem`};
  color: ${(props) => props.disable
      ? 'gray'
      : 'gray'};
  ::placeholder {
    color: gray;
  }
`;

export const StyContainerCalendar = styled.div<IStyContainerCalendar>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.1);
  z-index: 10;
  cursor: default;
`;
