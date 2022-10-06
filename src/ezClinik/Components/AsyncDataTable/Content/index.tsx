import React, { useEffect, useState } from "react";
import CheckboxIndeterminateIcon from "../../../assets/icons/CheckBoxIndeterminateIcon";
import CheckboxOffIcon from "../../../assets/icons/CheckBoxOffIcon";
import CheckboxOnIcon from "../../../assets/icons/CheckBoxOnIcon";
import PadLockIcon from "../../../assets/icons/PadLockIcon";
import SelectArrowDown from "../../../assets/icons/SelectArrowDown";
import SelectArrowUp from "../../../assets/icons/SelectArrowUp";
import { Sizes } from "../../../ts/enum/componentSize";
import CircleSpinner from "../../Spinner";
import CheckExpandedTable from "../CheckExpandedTable";
import { IBundles } from "../interface";
import {
  StyContent,
  StyTableContainer,
  StyTableRow,
  StyTableHeader,
  StyTableTd,
  StyTdWrapper,
  StyCentralizeHeaderName,
  StyNoData,
  StyLoadingContent,
  StyCheckBoxAll,
  StyCheckBox,
  StyFilterBox,
  StyWrapper,
} from "./styles";

interface IProps {
  id: string;
  rowKey: string;
  headers: string[];
  columns: string[];
  customWidth?: string[];
  dataShow: any[];
  data: any[];
  handleOrdenate?: Function;
  initialOrdenate?: string;
  loading: boolean;
  onRowClick?: Function;
  onChange?: Function;
  onChangeId?: Function;
  buttonsActions?: Function;
  reloadTable?: boolean;
  bundles: IBundles;
  disableKey?: string;
  disableKeyValue?: string;
}

/**
 * @description TableContent
 * @param {string} id Element id.
 * @param {string[]} headers Id's array with bundles columns.
 * @param {string[]} columns It's array with prop name than contain in data object.
 * @param {string[]} customWidth This param makes the column width customizable.
 * @param {any[]} dataShow Object with dataShow of table.
 */

const TableContent: React.FC<IProps> = ({
  id,
  rowKey,
  headers = [],
  columns = [],
  customWidth = ["25%", "25%", "25%", "25%"],
  dataShow,
  data,
  handleOrdenate = () => null,
  initialOrdenate = "",
  loading = false,
  onRowClick = () => null,
  onChangeId = () => null,
  onChange = () => null,
  buttonsActions,
  reloadTable,
  bundles,
  disableKey,
  disableKeyValue,
}) => {
  const [orderName, setOrderName] = useState<string>(initialOrdenate);
  const [idSelected, setIdSelected] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState<string>("unchecked");
  const [filterHeight, setFilterHeight] = useState<number>(0);

  function handleCheck(row: any, insertPosition: boolean) {
    if (insertPosition) {
      setIdSelected([...idSelected, row[rowKey]]);
    } else {
      let arrayAux: string[] = [];
      idSelected.forEach((dataRow: string) => {
        if (dataRow !== row[rowKey]) {
          arrayAux.push(dataRow);
        }
      });
      setIdSelected(arrayAux);
    }
  }

  function handleCheckAll(insertPosition: boolean) {
    if (insertPosition) {
      let arrayAux: string[] = [];
      dataShow?.forEach((dataValue: any) => {
        if (!idSelected.includes(dataValue[rowKey])) {
          arrayAux.push(dataValue[rowKey]);
        }
      });
      setIdSelected([...idSelected, ...arrayAux]);
      setCheckAll("checked");
    } else {
      let arrayDataAux: string[] = [];
      let idsRemaining: string[] = [];
      dataShow?.forEach((dataValue: any) => {
        arrayDataAux.push(dataValue[rowKey]);
      });
      idSelected?.forEach((is_selected: string) => {
        if (!arrayDataAux.includes(is_selected)) {
          idsRemaining.push(is_selected);
        }
      });
      setIdSelected([...idsRemaining]);
      setCheckAll("unchecked");
    }
  }

  useEffect(() => {
    const filterHeightElement = document.getElementById(
      "buttons-actions-content-id"
    );
    if (filterHeightElement?.clientHeight) {
      setFilterHeight(filterHeightElement?.clientHeight);
    }
  }, [idSelected]);

  useEffect(() => {
    let dataAux: any[] = [];
    data.forEach((dataValue: any) => {
      if (idSelected.includes(dataValue[rowKey])) {
        dataAux.push(dataValue);
      }
    });
    onChange(dataAux);
    onChangeId(idSelected);
  }, [idSelected]);

  useEffect(() => {
    if (reloadTable) {
      setIdSelected([]);
      setCheckAll("unchecked");
      setFilterHeight(0);
    }
  }, [reloadTable]);

  useEffect(() => {
    let checkPosition: boolean[] = [];
    let countVerify = 0;
    dataShow?.forEach((dataValue: any) => {
      if (idSelected.length > 0) {
        if (!idSelected.includes(dataValue[rowKey])) {
          checkPosition.push(false);
          countVerify = +1;
        } else {
          checkPosition.push(true);
        }
      }
    });
    if (dataShow?.length === countVerify) {
      checkPosition = [];
    }
    if (checkPosition.length > 0 && checkPosition.includes(true)) {
      setCheckAll("checked");
    }
    if (checkPosition.length > 0 && checkPosition.includes(false)) {
      setCheckAll("indeterminate");
    }
    if (checkPosition.length === 0) {
      setCheckAll("unchecked");
    }
  }, [idSelected, dataShow]);

  return (
    <StyContent id={`${id}-id`}>
      {!loading && (
        <StyTableContainer>
          <thead>
            <StyTableRow>
              <StyCheckBoxAll>
                {checkAll === "unchecked" && (
                  <div onClick={() => handleCheckAll(true)}>
                    <CheckboxOffIcon
                      fill="transparent"
                      fillBorder="rgb(0,185,156)"
                    />
                  </div>
                )}
                {checkAll === "indeterminate" && (
                  <div onClick={() => handleCheckAll(true)}>
                    <CheckboxIndeterminateIcon
                      fill="transparent"
                      fillBorder="rgb(0,185,156)"
                      fillLine="rgb(0,185,156)"
                    />
                  </div>
                )}
                {checkAll === "checked" && (
                  <div onClick={() => handleCheckAll(false)}>
                    <CheckboxOnIcon fill="rgb(0,185,156)" />
                  </div>
                )}
              </StyCheckBoxAll>
              {headers &&
                headers.map((header: string, index: number) => (
                  <StyTableHeader
                    key={index}
                    isHeader={true}
                    customWidth={customWidth}
                    onClick={() => {
                      handleOrdenate(columns[index]);
                      orderName === columns[index]
                        ? setOrderName("")
                        : setOrderName(columns[index]);
                    }}
                  >
                    <StyCentralizeHeaderName>
                      <span style={{ textAlign: "center" }}>{header}</span>
                      {columns[index] === orderName ? (
                        <div style={{ width: "20px", height: "20px" }}>
                          <SelectArrowDown width={20} height={20} />
                        </div>
                      ) : (
                        <div style={{ width: "20px", height: "20px" }}>
                          <SelectArrowUp width={20} height={20} />
                        </div>
                      )}
                    </StyCentralizeHeaderName>
                  </StyTableHeader>
                ))}
            </StyTableRow>
          </thead>
          <tbody>
            {dataShow &&
              dataShow.length > 0 &&
              dataShow.map((row: any, index: number) => {
                const isSelected = idSelected.includes(row[rowKey]);
                return (
                  <StyTableRow
                    background={isSelected}
                    id={`row-${index}`}
                    key={index}
                  >
                    <StyTableTd
                      customWidth={customWidth}
                      isHeader={false}
                      key={index}
                    >
                      {isSelected ? (
                        <StyCheckBox onClick={() => handleCheck(row, false)}>
                          <CheckboxOnIcon fill="rgb(0,185,156)" />
                        </StyCheckBox>
                      ) : (
                        <StyCheckBox onClick={() => handleCheck(row, true)}>
                          <CheckboxOffIcon
                            fill="transparent"
                            fillBorder="rgb(0,185,156)"
                          />
                        </StyCheckBox>
                      )}
                    </StyTableTd>
                    {columns?.map((column: any, index: number) => {
                      return (
                        <StyTableTd
                          customWidth={customWidth}
                          isHeader={false}
                          key={index}
                          onClick={() => {
                            onRowClick(row);
                            !isSelected && handleCheck(row, true);
                          }}
                        >
                          {row[column] || row[column]?.lenght === 0 ? (
                            <StyTdWrapper
                              disable={
                                disableKey &&
                                disableKeyValue &&
                                row[disableKey] === disableKeyValue
                                  ? true
                                  : false
                              }
                            >
                              <span>{`${row[column]}`}</span>
                              {disableKey &&
                                disableKeyValue &&
                                index === 0 &&
                                row[disableKey] === disableKeyValue && (
                                  <PadLockIcon fill="rgb(130, 130, 130)" />
                                )}
                            </StyTdWrapper>
                          ) : (
                            <StyTdWrapper>
                              <span>----</span>
                            </StyTdWrapper>
                          )}
                        </StyTableTd>
                      );
                    })}
                  </StyTableRow>
                );
              })}
          </tbody>
        </StyTableContainer>
      )}
      {dataShow.length === 0 && !loading && (
        <StyNoData>Nenhum Dado Encontrado</StyNoData>
      )}
      {loading && (
        <StyLoadingContent>
          <CircleSpinner size={Sizes.xl} />
        </StyLoadingContent>
      )}
      <StyFilterBox
        filterHeight={filterHeight}
        openFilter={idSelected.length > 0}
      >
        <StyWrapper id="buttons-actions-content-id">
          {idSelected.length > 0 && buttonsActions && (
            <CheckExpandedTable
              label={
                idSelected.length === 1
                  ? `${idSelected.length} ${bundles.qttSearch} ${bundles.rowsSelected}`
                  : `${idSelected.length} ${bundles.qttSearchPlural} ${bundles.rowsSelectedPlural}`
              }
              buttonsActions={buttonsActions}
            />
          )}
        </StyWrapper>
      </StyFilterBox>
    </StyContent>
  );
};

export default TableContent;
