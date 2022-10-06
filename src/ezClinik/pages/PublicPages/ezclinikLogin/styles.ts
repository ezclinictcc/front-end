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
    height: 70%;
  }
  @media(max-width: 1024px) {
    height: 80%;
  } */
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
  justify-content: flex-start;
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

export const StyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(0, 185, 156);
`;

export const StyButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div:first-of-type {
    margin-right: 55px;
  }

  @media(max-width: 768px) {
    flex-flow: column;
    & > div:first-of-type {
    margin-right: 0;
    margin-bottom: 10px;
  }
  }
`;

export const StyInputWrapper = styled.div`
  & > div:first-of-type {
    margin-bottom: 30px;
  }
  & > div:last-of-type {
    margin-bottom: 40px;
  }
  @media(max-width: 480px) {
    & > div:last-of-type {
    margin-bottom: 30px;
  }
`