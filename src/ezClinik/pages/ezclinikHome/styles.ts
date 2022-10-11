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
`;

export const StyTitle = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: space-between;
  flex-flow: wrap;
`

export const StyBody = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyPermissionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyPermissionText = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin: 20px 10px;
  border-bottom: 1px solid #000; 
`

export const StyPermissionBody = styled.div`
  margin: 20px 10px;
`

export const StyPermissionType = styled.div`
  margin-bottom: 60px;
`

export const StyPermissionInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;

  & > span {
    margin-bottom: 10px;
    display: list-item;
  }
`