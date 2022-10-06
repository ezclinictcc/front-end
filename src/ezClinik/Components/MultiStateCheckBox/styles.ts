import styled, { css } from 'styled-components';

interface IStyCheckBoxWrapper {
  disable: boolean;
}
export const StyCheckBoxWrapper = styled.span<IStyCheckBoxWrapper>`
    display: flex;
    align-items: center;
  cursor: pointer;
  ${({ disable }) =>
    disable &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
