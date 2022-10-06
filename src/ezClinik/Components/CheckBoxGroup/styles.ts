import styled from 'styled-components';

export const StyContainer = styled.div`
`;

export const StyErrorWrapper = styled.div`
    position: absolute;
    width: max-content;
    color: rgb(255,0,0);
`;

export const StyTitle = styled.div`
  margin-bottom: 5px;
  color: rgb(66,65,65);
  font-weight: 600;
`;

export const StyWrapper = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  width: 200px;
  justify-content: space-between;
  & > div {
      display: flex;
      width: 100%;
    & > span:last-of-type {
    color: rgb(66,65,65);
    margin-left: 5px;
  }
  } 
`;