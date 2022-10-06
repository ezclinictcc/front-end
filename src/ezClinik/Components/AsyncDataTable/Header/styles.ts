import styled, {css} from 'styled-components';

export const StyContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #EBEBEB;
`;

interface IStyPaginationHeader {
  readonly position: string;
}

export const StyPaginationHeader = styled.div<IStyPaginationHeader>`
  width: 100%;
  display: flex;
  height: 100%;
  color: #000;
  border-right: solid 1px rgba(165, 165, 165);
  border-left: solid 1px rgba(165, 165, 165);
  font-size: 0.85rem;
  & > :first-of-type {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > span {
      padding-left: 2vw;
    }
  }
  & > :nth-child(2) {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > :last-of-type {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > span {
      padding-right: 2vw;
    }
  }

  ${(props) =>
    props.position === 'top' ?
    css`
    border-top: solid 1px rgba(165, 165, 165);
    `
    :
    css`
    border-bottom: solid 1px rgba(165, 165, 165);
    `
  }
`;
