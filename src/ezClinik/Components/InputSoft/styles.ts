/* eslint-disable indent */
import styled from 'styled-components';

interface IStyContainer {
  readonly width: string;
}

export const StyContainer = styled.div<IStyContainer>`
  display: flex;
  flex-direction: column;
  width: ${(props) => `${props.width}`};

  @media(max-width: 480px) {
    width: 100%;
  } 
`;

interface IStyContainerInput {
  readonly disabled: boolean;
  readonly hasError: boolean;
  readonly fontSize: number;
  readonly height: number;
  readonly hasIcon: boolean;
}

export const StyContainerInput = styled.div<IStyContainerInput>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => `${props.height}`};
  background-color: #fff;


  & > input {
    font-size: ${(props) => `${props.fontSize}px`};
    padding-left: 5px;
    outline: none;
    border-style: none;
    background: none;
    padding-right:5px;
    padding-left:${props => props.hasIcon? '35px' : '5px'};
    border: ${(props) =>
      props.hasError
        ? `solid 1px red`
        : `solid 1px #000`};
    border-radius: 1px;
    transition: 0.3s;
    height: ${(props) => `${props.height}px`};
    color: ${(props) =>
      props.disabled
        ? '#000'
        : '#000'};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
    :focus {
      border: ${(props) =>
        props.hasError
          ? `solid 1px red`
          : `solid 1px #000`};
    }

    ::placeholder {
      color: rgb(169, 169, 169);
    }
  }
`;

interface IStyLabel {
  readonly hasError: boolean;
  readonly disable: boolean;
}

export const StyLabel = styled.div<IStyLabel>`
  width: max-content;
  transition: 0.3s;
  cursor: default;
  span {
    transition: 0.3s;
    cursor: default;
    display: flex;
    justify-content: flex-start;
    color: ${(props) =>
      props.hasError
        ? 'red'
        : props.disable
        ? '#000'
        : '#000'};
    cursor: ${(props) => props.disable ? `not-allowed` : 'default'};
    margin-bottom: 5px;
  }
`;

export const StyErrorWrapper = styled.div`
  width: max-content;
  color: red;

  & > span {
    position: absolute;
  }
`;

interface IStyIconBoxWrapper {
  readonly height: number;
}

export const StyIconBoxWrapper = styled.div<IStyIconBoxWrapper>`
    display:flex;
    width: 35px;
    height: ${(props) => `${props.height}px`};
    position: absolute;
    align-self:flex-start;
    align-items: center;
    justify-content: center;
`;