import styled from 'styled-components';

export interface IsStyContainer {
  readonly disable: boolean;
  readonly height: string;
  readonly width?: string;
  readonly borderRadius?: string;
}

export const StyContainer = styled.div<IsStyContainer>`
  max-width: auto;
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height|| '35px'};
  border-radius: 2px;
  background: rgb(0, 185, 156);
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '2px'};
  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    border-radius: 2px;
    background: transparent;
    font-size: 16px;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : '2px'};
    color: #fff;
    padding: 0px 20px;
  }
  :hover {
      background: rgba(0, 185, 156, 0.8);
    }
`;