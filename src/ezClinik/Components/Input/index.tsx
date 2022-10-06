import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  StyContainer,
  StyInputWrapper,
  StyIconAlign,
  StyInput,
  StyText,
  StyFilterContent,
  StyWrapper,
  StyErrorWrapper,
} from "./styles";
import { useField } from "@unform/core";
import SearchIcon from "../../assets/icons/Search";

interface IProps {
  id: string;
  type?: string;
  title?: string;
  name?: string;
  placeholder?: string;
  width?: string;
  handleChange: Function;
  formRef?: RefObject<HTMLFormElement>;
  initialValue?: string;
  instantChange?: boolean;
  hasSearchIcon?: boolean;
  disabled?: boolean;
}

/**
 */
export const Input: React.FC<IProps> = ({
  id,
  type = "text",
  title = "",
  name = "",
  placeholder = "",
  width = "",
  handleChange,
  formRef = null,
  initialValue,
  instantChange = false,
  hasSearchIcon = false,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputData, setInputData] = useState<string>("");
  const { fieldName, defaultValue, registerField, error } = useField(name);

  /**
   * @description Handle after-error.
   */
  function handleAfterError() {
    if (inputRef.current?.value) formRef?.current?.setFieldError(name, false);
  }

  useEffect(() => {
    initialValue && setInputData(initialValue);
  }, [initialValue]);

  useEffect(() => {
    instantChange && handleChange && handleChange(inputData);
  }, [instantChange, inputData]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  /** trigger reset listener */
  useEffect(() => {
    if (!disabled) {
      document.addEventListener("reset", () => setInputData(""));
      return () => {
        document.removeEventListener("reset", () => setInputData(""));
      };
    }
  }, []);

  return (
    <StyContainer id={`${id}-id`}>
      {title && <StyText disabled={disabled}>{title}</StyText>}
      <StyInputWrapper width={width} tabIndex={1}>
        <StyFilterContent onBlur={() => error && handleAfterError()}>
          <StyWrapper error={error}>
            <StyInput
              id={`${id}-input-id`}
              type={type}
              name={name}
              placeholder={placeholder}
              ref={inputRef}
              tabIndex={1}
              value={inputData}
              onChange={(data: any) => {
                setInputData(data.target.value);
                handleChange(data.target.value);
              }}
              autoComplete="off"
              disabled={disabled}
            />
            {hasSearchIcon && (
              <StyIconAlign
                tabIndex={1}
                onClick={() => handleChange && handleChange(inputData)}
              >
                <SearchIcon fill="rgb(100, 99, 99)" width={20} height={20} />
              </StyIconAlign>
            )}
          </StyWrapper>
        </StyFilterContent>
        {error && (
          <StyErrorWrapper>
            <span>{error}</span>
          </StyErrorWrapper>
        )}
      </StyInputWrapper>
    </StyContainer>
  );
};

export default Input;
