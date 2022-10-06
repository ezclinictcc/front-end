import styled from 'styled-components';

export const StyContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 750px;

  @media(max-width: 768px) {
    min-height: 768px;
  }
  @media(max-width: 480px) {
    min-height: 480px;
  }
`;

export const StyWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;