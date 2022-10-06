import styled from 'styled-components';

export const StyContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 12px rgb(0 0 0 / 40%);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 400;
`;

export const StyMenuItems = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
`;

interface IStyMenuButton {
  readonly currentPage: boolean;
}

export const StyMenuButton = styled.button<IStyMenuButton>`
  height: 100%;
  min-width: fit-content;
  padding: 0px 40px 0px 40px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  color: rgb(0, 0, 0);
  font-weight: 600;
  font-size: 20px;
  background-color: ${(props) => props.currentPage ? 'rgba(0, 185, 156, 0.2)' : 'transparent'};
  border: none;
  cursor: ${(props) => props.currentPage ? 'default' : 'pointer'};

  :hover {
    background-color: rgba(0, 185, 156, 0.2);
  }
`;