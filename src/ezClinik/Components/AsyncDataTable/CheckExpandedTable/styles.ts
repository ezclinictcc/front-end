import styled from 'styled-components';

interface ICheckOptionsContainer {
  readonly checkOpen: boolean;
}

export const StyCheckOptionsContainer = styled.div<ICheckOptionsContainer>`
  width: 100%;
  height: 55px;
  border-left: 1px solid rgba(165, 165, 165);
  border-right: 1px solid rgba(165, 165, 165);
  border-bottom: 1px solid rgba(165, 165, 165);
  display: flex;
  bottom: 0;
  flex-direction: inline;
  color: #000;
  background: transparent;
  position: sticky !important;
  margin-top: 0;
  box-shadow: 0px -1px 8px rgba(0,0,0,0.1);
`;

export const StyCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  padding-left: 17px;
  pointer-events: none;

  & > span {
    margin-left: 10px;
    #000;
  }
`;

export const StyButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
  padding-right: 17px;
`;
