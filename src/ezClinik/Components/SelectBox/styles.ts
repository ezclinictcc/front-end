import styled, { css } from "styled-components";

interface IStyContainer {
    readonly hasMargin?: boolean;
    readonly width?: string;
}

export const StyContainer = styled.div<IStyContainer>`
    width: ${(props) => props.width || '280px'};
    display: flex;
    flex-direction: column;
    margin: ${(props) => props.hasMargin ? '20px' : '0px'};
`;

export const StyInputWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

interface IStyFakeSelect {
    readonly openOptions: boolean;
    readonly error: any;
}

export const StyFakeSelect = styled.div<IStyFakeSelect>`
    display: flex;
    height: 40px;
    width: 100%;
    box-shadow: ${(props) => props.openOptions && 'rgb(0 0 0 / 10%) 0px 4px 7px 2px'};
    border: ${(props) => props.error ? '1px solid rgb(255, 0, 0)' : props.openOptions ? '1px solid rgb(51, 114, 214)' : '1px solid #ccc'};
    border-radius: ${(props) => props.openOptions ? '5px 5px 0px 0px' : '5px'};
    color: rgb(66, 65, 65);
    cursor: pointer;
    padding-left: 5px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
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
`;

export const StyText = styled.div`
    margin-bottom: 5px;
    color: rgb(66, 65, 65);
    font-weight: 600;
`;

interface IStyOptionContainer {
    readonly openOptions: boolean;
    readonly width?: string;
}

export const StyOptionContainer = styled.div<IStyOptionContainer>`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '280px'};
    min-height: fit-content;
    max-height: 200px;
    border-radius: ${(props) => props.openOptions ? '0px 0px 5px 5px' : '0px'};;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 7px 2px;
    z-index: 10;
    background-color: #fff;
    overflow: auto;
`;

interface IStyOption {
    readonly isSelected: boolean;
    readonly hiddenText?: boolean;
    readonly isSelectedDisable?: boolean;
}

export const StyOption = styled.button<IStyOption>`
    /* min-height: 35px; */
    display: flex;
    padding: 8px 0px 8px 5px;
    align-items: center;
    border: none;
    background-color: ${(props) => props.isSelected ? 'rgba(0,96,177,0.2)' : '#fff'};
    color: rgb(66, 65, 65);
    border-bottom: 0.1px solid rgb(240, 240, 240);
    width: 100%;
    font-size: 16px;
    text-align: start;
    :hover {
        background-color: ${(props) => !props.isSelected && 'rgba(0,96,177,0.2)'};
        cursor: ${(props) => props.isSelected ? 'default' : 'pointer'};
    }
    :focus{
        border: 1px solid rgba(0,96,177);
        outline: none;
    }

    ${({ hiddenText }) =>
    hiddenText &&
      css`
        white-space: nowrap;
        overflow-x: clip;
    `
  }
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
    margin: 10px;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 40%);
    background-color: #fff;
`;

export const StySelectValue = styled.span`
    align-items: center;
    text-align: start;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const StyResetButton = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: rgba(0,96,177,0.2);
        border-radius: 50%
    }
`;

export const StyResetWrapper = styled.div`
    display: flex;
    align-item: center;
`;

export const StyErrorWrapper = styled.div`
  position: absolute;
  width: max-content;
  color: rgb(255, 0, 0);
`;

export const StyCheckBoxContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 0px 8px 5px;
    position: relative;
    /* border-bottom: 0.1px solid rgb(240, 240, 240); */
      & > span {
        margin-left: 5px;
        font-size: 16px;
        text-align: start;
        color: rgb(66, 65, 65);
    }

    :hover {
        background-color: rgba(0,96,177,0.2);
    }
`;

export const StyCheckBox = styled.input<IStyOption>`
    min-width: 15px;
    min-height: 15px;
    cursor: ${(props) => props.isSelectedDisable ? 'not-allowed' : 'pointer'};
`;

interface IStySequence {
    readonly checked?: boolean;
}

export const StySequence = styled.div<IStySequence>`
    display: flex;
    position: absolute;
    width: 1px;
    height: calc(50% - 7.5px);
    left: 12px;
    bottom: 0;
    /* margin-top: 34px; */
    background-color: ${(props) => props.checked ? 'blue' : '#ccc'};
`;

export const StySequenceTop = styled.div<IStySequence>`
    display: flex;
    position: absolute;
    width: 1px;
    height: calc(50% - 7.5px);
    left: 12px;
    top: 0;
    /* margin-top: 34px; */
    background-color: ${(props) => props.checked ? 'blue' : '#ccc'};
`;