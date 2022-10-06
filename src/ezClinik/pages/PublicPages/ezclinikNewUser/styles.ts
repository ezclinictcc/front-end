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
  overflow: hidden;

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

interface IStyPageName {
  readonly secondStep: boolean;
}

export const StyPageName = styled.div<IStyPageName>`
  display: flex;
  align-items: ${(props) => props.secondStep ? 'flex-start' : 'center'};
  text-align: center;
  height: ${(props) => props.secondStep ? 'calc(30% - 60px)' : 'calc(30% - 10px)'};
  font-size: 48px;
  font-weight: 600;
  color: rgb(0, 185, 156);

  & > span {
    margin-top: ${(props) => props.secondStep ? '0px' : '8px'}
  }

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
        margin-bottom: 20px;
    }
`;

export const StyLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(0, 185, 156);
`;

export const StyTransition = styled.div`
  width: 100%;
  top: 0;
  min-height: 10px;
  background: rgba(0, 185, 156, 0.4);
  position: relative;

  @media(max-width: 480px) {
    top: 20px;
  }
`;

interface IStyCurrentTransition {
  readonly step: number;
}

export const StyCurrentTransition = styled.div<IStyCurrentTransition>`
  position: absolute;
  width: 50%;
  min-height: 10px;
  background-color: rgb(0, 185, 156);
  left: ${(props) => props.step === 1 ? '0%' : '50%'};
  transition: left 1s;
`

interface IStyContentWrapper {
  readonly step: number;
}

export const StyContentWrapperFirst = styled.div<IStyContentWrapper>`
  left: ${(props) => props.step === 1 ? '0%' : '100%'};
  transition: left 1s;
  position: relative;
  display: ${(props) => props.step === 1 ? 'flex' : 'none'};
  flex-direction: column;
  height: 100%;
  width: 80%;
`;

export const StyContentWrapperSecond = styled.div<IStyContentWrapper>`
  left: ${(props) => props.step === 2 ? '0%' : '-100%'};
  transition: left 1s;
  position: relative;
  display: ${(props) => props.step === 2 ? 'flex' : 'none'};
  flex-direction: column;
  height: 100%;
  width: 80%;
`;

export const StyBackStep = styled.div`
  width: 100%;
  height: 18px;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 40px;
  
  & > div {
    width: fit-content;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const StyCentralize = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 22px;

  & > div {
    :not(:last-of-type) {
      margin-right: 20px;
    }
  }
`;

export const StyButtonSubmit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const StySpinnerContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;