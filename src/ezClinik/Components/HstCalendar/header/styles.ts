import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  span {
    color: gray;
    font-weight: 600;
    -webkit-touch-callout: none; /* iPhone OS, Safari */
    -webkit-user-select: none; /* Chrome, Safari 3 */
    -khtml-user-select: none; /* Safari 2 */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none;
  }
`;

export const StyButtonChevron = styled.div`
  width: 30px;
  height: 30px;
  border: 0.5px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0px 30px;

  :hover {
    background-color: rgba(0, 185, 156, 0.4);
  }
`;

export const StyArrowPrevLeft = styled.div`
  width: 6px;
  height: 6px;
  border-top: solid 1px gray;
  border-left: solid 1px gray;
  transform: rotate(315deg);
  margin-right: -2px;
`;

export const StyArrowPrevRight = styled.div`
  width: 6px;
  height: 6px;
  border-top: solid 1px gray;
  border-left: solid 1px gray;
  transform: rotate(135deg);
  margin-right: 2px;
`;