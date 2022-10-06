import styled from 'styled-components';

export interface IsStyContainer {
  readonly disable: boolean;
  readonly fitText: boolean;
  readonly height?: string;
  readonly size?: number;
  readonly width?: string;
}

export const StyContainer = styled.div<IsStyContainer>`
  min-width: fit-content;
  max-width: auto;
  width: fit-content;
  height: fit-content;
  background: transparent;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    background: none;
    color: rgb(0, 185, 156);
    font-size: 16px;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};

    :hover {
      text-decoration: ${(props) => !props.disable && 'underline'};
    }
  }
`;

export const StyLoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
