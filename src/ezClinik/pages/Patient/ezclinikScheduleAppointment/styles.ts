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

export const StyFilters = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;

  & > div:last-of-type {
    margin-left: 50px;
  }
`;

export const StyButtons = styled.div`
    display: flex;
`