import styled, { css } from "styled-components";

export const StyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

interface StyInputWrapper {
    readonly width: string;
}

export const StyInputWrapper = styled.div<StyInputWrapper>`
    width: ${(props) => props.width || '100%'};
    height: 100%;
`;

interface IStyInput {
    readonly disabled?: boolean;
}

export const StyInput = styled.input<IStyInput>`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-position: 14px 12px;
    background-repeat: no-repeat;
    color: ${(props) => props.disabled ? 'rgb(170, 170, 170)' : 'rgb(66, 65, 65)'};
    font-size: 16px;
    padding: 12px 20px 12px 10px;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => props.disabled && 'not-allowed'};

    :focus{
        outline: none;
    }
`;

export const StyIconAlign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    margin: 5px 0px;
    border-left: 1px solid rgb(200, 200, 200);
    cursor: pointer;
`;

interface IStyText{
    readonly disabled?: boolean;
}

export const StyText = styled.div<IStyText>`
    margin-bottom: 5px;
    color: ${(props) => props.disabled ? 'rgb(170, 170, 170)' : 'rgb(66, 65, 65)'};
    font-weight: 600;
`;

export const StyFilterContent = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
`;

interface IStyWrapper {
    readonly error?: string;
}

export const StyWrapper = styled.div<IStyWrapper>`
    display: flex;
    height: 40px;
    border: 1px solid ${(props) => props.error ? 'red' : '#ccc'};
    background-color: #fff;
    border-radius: 5px;
`;

export const StyErrorWrapper = styled.div`
  position: absolute;
  width: max-content;
  color: rgb(255, 0, 0);
`;