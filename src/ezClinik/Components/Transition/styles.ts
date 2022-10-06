import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgb(0,185,156);
  animation: fade 2.5s;

  @keyframes fade {
    0% {
      left: -100%;
      opacity: 0;
    }
    50% {
      left: 0%;
      opacity: 1;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }
`;

export const StyLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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