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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyAppointmentsInfo = styled.div`
  width: 30%;
  display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 100%;
    border: 1px solid gray;
    align-items: center;
    & > span {
        display: flex;
        width: 100%;
        justify-content: center;
    }
`;

export const StyContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & > div {
    margin: 0px;
    width: 100%;
    height: fit-content;
    text-align: center;
  }
`