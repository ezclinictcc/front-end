import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 40%);
  width: 80%;
  height: 60%;

  /* @media(max-width: 1200px) {
    height: 180px;
  }
  @media(max-width: 1024px) {
    height: 170px;
  }*/
  @media(max-width: 768px) {
    height: 600px;
  }
  @media(max-width: 480px) {
    height: 515px;
    box-shadow: none;
  } 
`;

export const StyPageName = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 30%;
  font-size: 48px;
  font-weight: 600;
  color: rgb(0, 185, 156);

  @media(max-width: 480px) {
    font-size: 32px;
  } 
`;

export const StyInputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  flex-direction: column;
`;

export const StyButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  flex-flow: wrap;

& > div:last-of-type {
  margin-left: 8px;
}
`;

export const StyButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  flex-direction: column;
    & > div {
        margin-bottom: 30px;
    }
`;

export const StyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(0, 185, 156);
`;

export const StyCodeDisplay = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  flex-direction: column;
    & > div {
        margin-bottom: 30px;
    }
`;