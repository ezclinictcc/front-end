import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IStyInput {
  readonly error?: boolean;
}

export const StyInput = styled.input<IStyInput>`
    display: flex;
    text-align: center;
    font-size: 34px;
    width: 50px;
    height: 50px;
    margin: 5px;
    border-color: ${(props) => props.error ? 'red' : 'rgb(118, 118, 118)'};
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }

  @media(max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 28px;
  }
  @media(max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 22px;
  } 
`;

export const StyErrorWrapper = styled.div`
  width: max-content;
  color: red;
  margin-left: 5px;

  & > span {
    position: absolute;
  }
`;