import styled from 'styled-components';

export const StyContainerDay = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border: 0.1px solid gray;
  color: gray;

  :hover {
    background: rgba(0, 185, 156, 0.4);
  }

  .weekendDay {
    color: rgb(190,190,190);
    /* pointer-events: none; */
    cursor: not-allowed;
    background: rgb(240,240,240) !important;
  }

  .currentDay {
    background: rgba(255,255,0, 0.2)
  }

  .disabled {
    color: rgb(190,190,190);
    pointer-events: none;
    cursor: not-allowed;
    background: rgb(240,240,240) !important;
  }

  .selected {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1px solid rgba(0, 185, 156, 0.4);
    background: rgba(0, 185, 156, 0.4);
    color: gray;
  }
`;

export const StyDay = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 75px;

  span {
    -webkit-touch-callout: none; /* iPhone OS, Safari */
    -webkit-user-select: none; /* Chrome, Safari 3 */
    -khtml-user-select: none; /* Safari 2 */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none;
  }
`;

export const StyRow = styled.div`
  display: flex;
  width: 100%;
`;

export const StyDays = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
