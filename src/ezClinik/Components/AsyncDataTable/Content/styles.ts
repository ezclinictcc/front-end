import styled, { css } from 'styled-components';

export const StyContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const StyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyTableContainer = styled.table`
  width: 100%;
  border-top: solid 1px rgba(165, 165, 165);
  border-left: solid 1px rgba(165, 165, 165);
  border-right: solid 1px rgba(165, 165, 165);
  border-collapse: separate;
  border-spacing: 0 0.1px;
`;

interface ITableHader {
  readonly customWidth: string[];
  readonly isHeader: boolean;
}

export const StyTableHeader = styled.th<ITableHader>`
  height: 50px;
  background: #EBEBEB;
  cursor: pointer;
  border-bottom: 1px solid rgba(165, 165, 165);

  & > span {
    font-weight: 600;
    color: #000;
  }
  padding: 0px 10px;

  ${props => handleTableHader(props.customWidth, props.isHeader)}

  :not(:last-of-type) {
    border-right: solid 1px
    rgba(165, 165, 165);
  }
`;

export const StyTableTd = styled.td<ITableHader>`
  height: 35px;
  /* padding: 0px 10px; */
  color: gray;
  cursor: pointer;
  
  ${props => handleTableHader(props.customWidth, props.isHeader)}
  
  :not(:last-of-type) {
    border-right: solid 1px
      rgba(165, 165, 165);
  }
`;

interface StyTableRow {
  readonly background?: boolean;
}

export const StyTableRow = styled.tr<StyTableRow>`
  text-align: start;
  background: ${(props) => props.background ? 'rgba(210, 210, 210);' : 'transparent'};
  :hover {
    background-color: rgba(0,96,177,0.2)!important;
  }
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

interface IStyTdWrapper {
  readonly disable?: boolean;
}

export const StyTdWrapper = styled.div<IStyTdWrapper>`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(165, 165, 165);
  background: ${(props) => props.disable && 'rgba(235,235,235,0.4)'};
  padding: 10px 10px;

  & > svg {
    margin-left: 10px;
  }
`;

export const StyCentralizeHeaderName = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  /* width: max-content; */
`;

export const StyNoData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid rgba(165, 165, 165);
`;

export const StyLoadingContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  border: 1px solid rgba(165, 165, 165);
  padding: 40px 0px;
`;

export const StyCheckBoxAll = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EBEBEB;
  height: 50px;
  border-bottom: 1px solid rgba(165, 165, 165);
  cursor: pointer;
  min-width: 45px;
`;

export const StyCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(235, 235, 235, 0.2);
  height: 100%;
  border-bottom: 1px solid rgba(165, 165, 165);
  cursor: pointer;
`;

interface IStyFilterBox {
  readonly openFilter: boolean;
  readonly filterHeight: number;
}

export const StyFilterBox = styled.div<IStyFilterBox>`
  opacity: ${(props) => props.openFilter ? 1 : 0};
  height: ${(props) => props.openFilter && props.filterHeight !== 0 ? `${props.filterHeight}px` : '0px'};
  width: 100%;
  transition: 0.25s;

  & > div {
    display: ${(props) => props.openFilter ? 'flex' : 'none'};
    width: 100%;
  }
`;

export const StyWrapper = styled.div`
  display: flex;
`;