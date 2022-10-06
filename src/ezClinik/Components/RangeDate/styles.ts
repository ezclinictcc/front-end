import styled from 'styled-components';

export const StyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    border: 1px solid gray;

    & > span {
        display: flex;
        width: 100%;
        justify-content: center;
    }
`;

export const StyContent = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
`;

export const StyConfirm = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    height: 240px;

    & > span {
        text-decoration: underline;
    }
`;

export const StyTimerContainer = styled.div`
    display: flex;
    flex-direection: row;
    flex-flow: wrap;
    margin-top: 20px;
    
    & > span {
        margin-top: 20px;
        margin-right: 20px;
    }
`;

export const StyButtonConfirm = styled.div`
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #000;
    flex-direction: row-reverse;
`;