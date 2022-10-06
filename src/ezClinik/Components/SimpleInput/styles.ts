import styled, { css } from "styled-components";

export const StyContainer = styled.div`
    width: fit-content;
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

export const StyInput = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-position: 14px 12px;
    background-repeat: no-repeat;
    color: rgb(66, 65, 65);
    font-size: 16px;
    padding: 12px 20px 12px 10px;
    border: none;

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

export const StyText = styled.div`
    margin-bottom: 5px;
    color: rgb(66, 65, 65);
`;

export const StyFilterContent = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: #fff;
`;

export const StyWrapper = styled.div`
    display: flex;
    height: 40px;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 40%);
    background-color: #fff;
`;