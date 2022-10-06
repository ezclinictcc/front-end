import styled from 'styled-components';

export const StyContainer = styled.div`
  height: 110px;
  width: 100%;
  background-color: rgb(0, 185, 156);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyLabelText = styled.span`
  margin-left: 10px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 24px;
`;

export const StyUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  button {
    background: transparent;
    border: none;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    transition: 0.3s ease-out;

    & > svg {
      margin-left: 5px;
      margin-top: 3px;
    }

    :hover {
      background-color: rgba(0, 201, 158);
    }
  }
`;