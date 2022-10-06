import styled from 'styled-components';

interface ISelectContainer {
  readonly isOpen: boolean;
  readonly focused: boolean;
}

export const StySelectContainer = styled.div<ISelectContainer>`
  font-size: 1.34rem;
  position: relative;
`;

export const StySelectWrapper = styled.div`
  cursor: pointer;
  height: 30px;
  width: 100px;
  min-width: max-content;
  background-color: #EBEBEB;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  align-self: center;
`;

export const StySelectLabel = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-left: 8px;
  align-self: center;
  user-select: none;
  font-size: 16px;
`;

export const StySelectImg = styled.div`
  display: flex;
  svg {
    height: inherit;
    align-items: center;
  }
`;

export const StySelectExpanded = styled.div`
  background-color: #EBEBEB;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.1);
`;

export const StySelectLabelExpanded = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  height: 25px;
  padding-left: 8px;
  align-self: center;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  border-bottom: 1px solid #000;
  :first-of-type {
    border-radius: 5px 5px 0px 0px;
  }
  :last-of-type {
    border-radius: 0px 0px 5px 5px;
  }
`;
