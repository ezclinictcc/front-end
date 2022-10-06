import styled from 'styled-components';

export const StyContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: rgb(0, 185, 156);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 750px;

  @media(max-width: 768px) {
    min-height: 160px;
    height: 160px;
    width: 100%;
  }
  @media(max-width: 480px) {
    min-height: 150px;
    height: 150px;
    width: 100%;
  }
`;

export const StyWrapper = styled.div`

`;

export const StyLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyMessage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media(max-width: 768px) {
    height: 0px;
    width: 0px;
    opacity: 0;
    display: none;
  }

  span {
    font-size: 24px;
    width: 80%;
    margin-top: 50px;
    font-weight: 600;
    text-align: left;
  }
`

export const StyLogoName = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: rgb(30, 41, 59);
`;

export const StyLabelText = styled.span`
  color: rgb(30, 41, 59);
  font-weight: 600;
  font-size: 16px;
`;

export const StyTextAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;