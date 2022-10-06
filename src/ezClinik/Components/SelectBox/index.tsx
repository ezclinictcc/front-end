import React, { useEffect, useRef, useState } from "react";
import {
  StyContainer,
  StyInputWrapper,
  StyFakeSelect,
  StyIconAlign,
  StyInput,
  StyOption,
  StyOptionContainer,
  StyText,
  StyFilterContent,
  StyWrapper,
  StySelectValue,
  StyResetButton,
  StyResetWrapper,
  StyErrorWrapper,
  StyCheckBoxContent,
  StyCheckBox,
  StySequence,
  StySequenceTop,
} from "./styles";
import SearchIcon from "../../assets/icons/Search";
import SelectArrowUp from "../../assets/icons/SelectArrowUp";
import SelectArrowDown from "../../assets/icons/SelectArrowDown";
import CloseXIcon from "../../assets/icons/CloseXIcon";
import { useField } from "@unform/core";
import { removeByValue, sortByValue } from "../../utils/formattSelectBox";

interface IOptions {
  name: string;
  value: string;
  disable?: boolean;
  checked?: boolean;
}

interface IProps {
  id: string;
  name: string;
  bindForm?: boolean;
  hasFilter?: boolean;
  placeHolder?: string;
  title?: string;
  dataOptions: IOptions[];
  hasReset?: boolean;
  initialValue?: IOptions[];
  dataUpdate?: IOptions[];
  onChange?: Function;
  keepInitialValueOnReset?: boolean;
  onClear?: void;
  formRef?: any;
  hiddenText?: boolean;
  isCheckBox?: boolean;
  width?: string;
  hasMargin?: boolean;
}

/**
 */
export const SelectBox: React.FC<IProps> = ({
  id,
  name,
  bindForm = true,
  hasFilter = true,
  placeHolder = "",
  title = "",
  dataOptions = [],
  hasReset = false,
  initialValue = [],
  dataUpdate,
  onChange = () => null,
  keepInitialValueOnReset = false,
  onClear = () => null,
  formRef = null,
  hiddenText = false,
  isCheckBox = false,
  width = "280px",
  hasMargin = true,
}) => {
  const [data, setData] = useState<IOptions[]>(dataOptions);
  const [dataValue, setDataValue] = useState<string>("");
  const [dataName, setDataName] = useState<string>("");
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [hasInitializeValue, setHasInitializeValue] = useState<boolean>(true);
  const [widthOptions, setWidthOptions] = useState<number>(0);
  const { fieldName, registerField, error } = useField(name);
  const fakeSelectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLInputElement>(null);

  function findValue(name: string) {
    if (name) {
      const objectFilter: IOptions[] = [];
      dataOptions?.forEach((nameValue: IOptions) => {
        if (nameValue?.name?.toUpperCase()?.includes(name?.toUpperCase())) {
          objectFilter.push(nameValue);
        }
      });
      setData(objectFilter);
    } else {
      setData(dataOptions);
    }
  }

  function handleEscape(event: any) {
    if (
      !fakeSelectRef.current?.contains(event.target) &&
      !optionsRef.current?.contains(event.target)
    )
      setOpenOptions(false);
  }

  function handleResetOptions() {
    setDataValue("");
    setDataName("");
    setData(dataOptions);
    onChange({});
    onClear();
  }

  function onSelectOption(dataOption: IOptions) {
    setDataValue(dataOption.value);
    setDataName(dataOption.name);
    dataValue !== dataOption.value && setOpenOptions(false);
    onChange(dataOption);
  }

  function onCheckOption(dataOption: IOptions) {
    if (dataValue && dataName) {
      const splitValues: string[] = dataValue.split(";");

      if (!splitValues.includes(`${dataOption.value}`)) {
        let dataNameNew: string = `${dataName}; ${dataOption.name}`;
        const dataFormatted: any = sortByValue(data, dataNameNew);
        setDataName(dataFormatted.dataName);
        setDataValue(dataFormatted.dataValue);
        onChange(dataFormatted.dataValueSort, "insert");
      } else {
        const dataFormatted: any = removeByValue(data, dataName, dataOption);
        setDataName(dataFormatted.dataName);
        setDataValue(dataFormatted.dataValue);
        onChange(dataFormatted.dataValueSort, "remove");
      }
    } else {
      setDataValue(dataOption.value);
      setDataName(dataOption.name);
      onChange([dataOption], "insert");
    }
  }

  /**
   * @description Reset select values.
   */
  function handleReset() {
    if (keepInitialValueOnReset) {
      if (isCheckBox) {
        if (initialValue?.length > 0) {
          let dataName: string = "";
          let dataValue: string = "";
          initialValue.forEach((value: any) => {
            if (dataName) {
              dataName = `${dataName}; ${value.name}`;
              dataValue = `${dataValue};${value.value}`;
            } else {
              dataName = `${value.name}`;
              dataValue = `${value.value}`;
            }
          });
          setDataValue(dataValue);
          setDataName(dataName);
          onChange(initialValue);
          setHasInitializeValue(false);
        } else {
          setDataValue("");
          setDataName("");
          setOpenOptions(false);
        }
      } else {
        if (initialValue[0]?.value) {
          setDataValue(initialValue[0].value);
          setDataName(initialValue[0].name);
          onChange(initialValue[0]);
          setHasInitializeValue(false);
        } else {
          setDataValue("");
          setDataName("");
          setOpenOptions(false);
        }
      }
    } else {
      setDataValue("");
      setDataName("");
      setOpenOptions(false);
    }
  }

  function handleSelect(option: IOptions) {
    onSelectOption(option);
    if (error) {
      if (option?.value) {
        formRef?.current.setFieldError(name, false);
      }
    }
  }

  function handleCheckBox(option: IOptions) {
    onCheckOption(option);
    if (error) {
      if (option?.value) {
        formRef?.current.setFieldError(name, false);
      }
    }
  }

  function resizeFilterBox() {
    const filterHeightElement = document.getElementById(
      "input-fake-select-size-id"
    );
    if (filterHeightElement?.clientWidth) {
      setWidthOptions(filterHeightElement?.clientWidth);
    }
  }

  useEffect(() => {
    if (isCheckBox && hasInitializeValue) {
      if (initialValue?.length > 0) {
        let dataName: string = "";
        let dataValue: string = "";
        initialValue.forEach((value: any) => {
          if (dataName) {
            dataName = `${dataName}; ${value.name}`;
            dataValue = `${dataValue};${value.value}`;
          } else {
            dataName = `${value.name}`;
            dataValue = `${value.value}`;
          }
        });
        setDataValue(dataValue);
        setDataName(dataName);
        onChange(initialValue);
        setHasInitializeValue(false);
      }
    } else if (initialValue[0]?.value && hasInitializeValue) {
      setDataValue(initialValue[0].value);
      setDataName(initialValue[0].name);
      onChange(initialValue[0]);
      setHasInitializeValue(false);
    }
  }, [initialValue, isCheckBox]);

  useEffect(() => {
    if (dataUpdate && dataUpdate?.length > 0) {
      let nameAux = "";
      let valueAux = "";
      dataUpdate.forEach((option: any) => {
        if (option?.checked === true) {
          if (nameAux !== "") {
            nameAux = `${nameAux}; ${option.name}`;
            valueAux = `${valueAux};${option.value}`;
          } else {
            nameAux = `${option.name}`;
            valueAux = `${option.value}`;
          }
        }
      });
      setData(dataUpdate);
      setDataValue(valueAux);
      setDataName(nameAux);
    }
  }, [dataUpdate]);

  /** Event handlers. */
  useEffect(() => {
    document.addEventListener("click", handleEscape);
    bindForm && document.addEventListener("reset", handleReset);
    return () => {
      document.removeEventListener("click", handleEscape);
      bindForm && document.removeEventListener("reset", handleReset);
    };
  }, [bindForm]);

  /** Register field. */
  useEffect(() => {
    bindForm &&
      registerField({
        name: fieldName,
        ref: selectRef.current,
        path: "value",
      });
  }, [bindForm, fieldName, registerField]);

  useEffect(() => {
    const filterHeightElement = document.getElementById(
      "input-fake-select-size-id"
    );
    if (filterHeightElement?.clientWidth) {
      setWidthOptions(filterHeightElement?.clientWidth);
    }
  }, [openOptions]);

  window.addEventListener("resize", resizeFilterBox);

  return (
    <StyContainer id={`${id}-id`} hasMargin={hasMargin} width={width}>
      {title && <StyText>{title}</StyText>}
      <StyInputWrapper ref={fakeSelectRef} tabIndex={1}>
        <input
          hidden
          name={name}
          value={dataValue}
          readOnly
          ref={selectRef}
          id={`${id}-select-id`}
          data-testid={`${id}-select-test-id`}
          autoComplete="off"
        />
        <StyFakeSelect
          id="input-fake-select-size-id"
          onClick={() => {
            setOpenOptions(!openOptions);
            setData(dataOptions);
          }}
          openOptions={openOptions}
          error={error}
        >
          {dataName ? (
            <StySelectValue title={dataName}>{dataName}</StySelectValue>
          ) : (
            <StySelectValue>{placeHolder}</StySelectValue>
          )}
          <StyResetWrapper>
            {hasReset && dataValue !== "" && (
              <StyResetButton id="close" onClick={() => handleResetOptions()}>
                <CloseXIcon height="8px" width="8px" />
              </StyResetButton>
            )}
            {openOptions ? <SelectArrowUp /> : <SelectArrowDown />}
          </StyResetWrapper>
        </StyFakeSelect>
        <>
          {openOptions && data && (
            <StyOptionContainer
              openOptions={openOptions}
              width={`${widthOptions}px`}
            >
              {data.map((option: IOptions, index: number) => {
                return (
                  <div key={`${option.name}-${index}-div-principal-key`}>
                    {isCheckBox ? (
                      <div key={`${option.name}-${index}-div-container-key`}>
                        <StyCheckBoxContent
                          key={`${option.name}-${index}-div-content-key`}
                        >
                          {index !== 0 && (
                            <div
                              key={`${option.name}-${index}-div-centralize-top-key`}
                            >
                              <StySequenceTop
                                key={`${option.name}-${index}-div-sequence-top-key`}
                                checked={
                                  dataValue.includes(option.value) ||
                                  option.checked
                                }
                              />
                            </div>
                          )}
                          {data.length !== index + 1 && (
                            <div
                              key={`${option.name}-${index}-div-centralize-bottom-key`}
                            >
                              <StySequence
                                key={`${option.name}-${index}-div-sequence-bottom-key`}
                                checked={
                                  dataValue.includes(option.value) ||
                                  option.checked
                                }
                              />
                            </div>
                          )}
                          <StyCheckBox
                            type="checkbox"
                            isSelected={dataValue === option.value}
                            isSelectedDisable={option.disable}
                            hiddenText={hiddenText}
                            tabIndex={1}
                            onChange={() => handleCheckBox(option)}
                            checked={
                              dataValue.includes(option.value) ||
                              option.checked ||
                              false
                            }
                            disabled={option.disable}
                            key={`${option.name}-${index}-input-key`}
                          />
                          <span key={`${option.name}-${index}-span-key`}>
                            {option.name}
                          </span>
                        </StyCheckBoxContent>
                      </div>
                    ) : (
                      <StyOption
                        type="button"
                        isSelected={dataValue === option.value}
                        tabIndex={1}
                        onClick={() => handleSelect(option)}
                        key={`${option.name}-${index}-button-option-key`}
                        hiddenText={hiddenText}
                      >
                        {option.name}
                      </StyOption>
                    )}
                  </div>
                );
              })}
              {hasFilter && (
                <StyFilterContent>
                  <StyWrapper>
                    <StyInput
                      tabIndex={1}
                      autoFocus
                      onChange={(event: any) => findValue(event.target.value)}
                      ref={optionsRef}
                    />
                    <StyIconAlign>
                      <SearchIcon
                        fill="rgb(100, 99, 99)"
                        width={20}
                        height={20}
                      />
                    </StyIconAlign>
                  </StyWrapper>
                </StyFilterContent>
              )}
            </StyOptionContainer>
          )}
        </>

        {error && (
          <StyErrorWrapper>
            <span>{error}</span>
          </StyErrorWrapper>
        )}
      </StyInputWrapper>
    </StyContainer>
  );
};

export default SelectBox;
