import styled, { css } from 'styled-components';

export const StyContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const StyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyTableContainer = styled.table`
  width: 100%;
  margin-bottom: 10px;
  border: solid 1px #000;
  border-collapse: separate;
  border-spacing: 0 0.1px;
`;

interface ITableHader {
  readonly customWidth: string[];
  readonly isHeader: boolean;
}

export const StyTableHeader = styled.th<ITableHader>`
  height: 50px;
  background: gray;

  & > span {
    font-weight: 600;
    color: #000;
  }
  padding: 0px 10px;

  ${props => handleTableHader(props.customWidth, props.isHeader)}

  :not(:last-of-type) {
    border-right: solid 1px
      #000;
  }
`;

export const StyTableTd = styled.td<ITableHader>`
  height: 35px;
  padding: 0px 10px;
  color: gray;
  
  ${props => handleTableHader(props.customWidth, props.isHeader)}
  
  :not(:last-of-type) {
    border-right: solid 1px
      #000;
  }
`;

export const StyTableRow = styled.tr`
  text-align: start;
`;

function handleTableHader(customWidth: string[], isHeader: boolean) {
  let styles = '';
  for (let i = 0; i < customWidth.length; i += 1) {
    styles += `
    :nth-child(${i + 1}) {
      ${isHeader  && `width: ${customWidth[i]};`}
      text-align: start;
    }
  `;
  }
  return css `${styles}`;
}
