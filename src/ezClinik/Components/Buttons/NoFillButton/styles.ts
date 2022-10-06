import styled, {css} from "styled-components";

interface IStyButton {
  readonly borderColor: string;
  readonly disable: boolean;
  readonly height: string;
  readonly width?: string;
  readonly borderRadius?: string;
  readonly hasBorder?: boolean;
}

export const StyButton = styled.button<IStyButton>`
  ${(props) =>
    props.hasBorder ?
    css<IStyButton>`
    border: 1px solid ${({ borderColor }) => borderColor};
    `
    :
    css`
    border: none;
    `
  }
  display: flex;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '2px'};
    width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height|| '35px'};
  padding: 5px;
  background: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgb(0,185,156, 0.2);
  }

  button {
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  }

  & > svg {
    margin-right: 5px;
  }
`;

interface IStyText {
  readonly color?: string;
  readonly size?: string;
}

export const StyText = styled.span<IStyText>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color}
`;
