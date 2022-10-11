import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const StyHeader = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  height: 50px;
  width: 100%;
  margin-bottom: 50px;
`;

export const StyTitle = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: space-between;
`

export const StyBody = styled.div`
width: 100%;
  height: 100%;
`;

export const StyCentralize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 22px;

  & > div {
    :not(:last-of-type) {
      margin-bottom: 30px;
    }
  }
`;

export const StyButtonSubmit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  padding-top: 30px;
  border-top: 1px solid #000;

  & >button:first-of-type {
    margin-right: 20px;
  }
`;

export const StyInfoAccess = styled.div`
  width: 50%;
  & > span {
    display: flex;
    margin-bottom: 40px;
    border-bottom: 1px solid #000;
    width: 50%;
  }
`;

export const StyInfoAddress = styled.div`
  width: 50%;
  & > span {
    display: flex;
    margin-bottom: 40px;
    border-bottom: 1px solid #000;
    width: 50%;
  }
`;