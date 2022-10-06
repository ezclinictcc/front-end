import styled, { css } from 'styled-components';

export const StyColumnPerPage = styled.div`
  select {
    cursor: pointer;
    border: none;
    height: 26px;
  }
`;

export const StyPageCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyPageCounter = styled.ul`
  display: flex;
  & > * {
    width: 30px;
    min-width: fit-content;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.3vw;
    text-decoration: none;
    list-style-type: none;
    border: 1px solid #000;
    border-radius: 5px; 
    background-color: #EBEBEB;

    :hover {
    background-color: rgb(0,185,156);
  }
  } 

  & > div:not() {
  background-color: #EBEBEB;
  }
`;

export const StyExistPages = styled.li`
  background-color: transparent;
  cursor: default;
  border: unset;
  user-select: none;
`;

interface IPageNumber {
  readonly selected?: any;
  readonly onClick: any;
}

export const StyPageNumber = styled.li<IPageNumber>`
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.selected &&
    css`
      background: rgb(0,185,156)!important;
      color: #fff;
    `}

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    :hover {
      background: ${(props) =>
    props.selected
      ? 'rgb(0,185,156)'
      : 'red'};
    }
  }
`;

export const StyNext = styled.li`
  border-radius: 5px;
  cursor: pointer;
  font-family: monospace;
  font-weight: 500;
  font-size: large;
  user-select: none;
  :hover {
    background: rgb(0,185,156);
  }
`;
export const StyNextDisabled = styled.li`
  font-family: monospace;
  font-weight: 500;
  font-size: large;
  user-select: none;
  background: #B3B3B3;
  color: #fff;
  cursor: not-allowed;
`;

export const StyPrev = styled.li`
  border-radius: 5px;
  cursor: pointer;
  font-family: monospace;
  font-weight: 500;
  font-size: large;
  user-select: none;
  :hover {
    background: rgb(0,185,156);
  }
`;

export const StyPrevDisabled = styled.div`
  font-family: monospace;
  font-weight: 500;
  font-size: large;
  user-select: none;
  background: #B3B3B3;
  color: #000;
  cursor: not-allowed;
`;

interface IArrowType {
  readonly disable: boolean;
}

export const StyArrowPrevRight = styled.div<IArrowType>`
  width: 11px;
  height: 11px;
  border-top: solid 1px ${(props) =>
    props.disable
      ? '#000'
      : '#000'
  };
  border-right: solid 1px ${(props) =>
    props.disable
      ? '#000'
      : '#000'
  };
  transform: rotate(45deg);
  margin-right: 6px;
`;

export const StyArrowPrevLeft = styled.div<IArrowType>`
  width: 11px;
  height: 11px;
  border-top: solid 1px ${(props) =>
    props.disable
      ? '#000'
      : '#000'
  };
  border-left: solid 1px ${(props) =>
    props.disable
      ? '#000'
      : '#000'
  };
  transform: rotate(315deg);
  margin-left: 6px;
`;
