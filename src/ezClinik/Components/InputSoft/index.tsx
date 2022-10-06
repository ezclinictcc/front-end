import React, { useRef, RefObject, useEffect, useState } from "react";
import { useField } from "@unform/core";
import {
  StyContainer,
  StyLabel,
  StyErrorWrapper,
  StyContainerInput,
  StyIconBoxWrapper,
} from "./styles";
import Text from "../Text";

const constants = {
  confirm: "confirm",
  email: "email",
  value: "value",
  text: "text",
  password: "password",
};

interface IAfterError {
  type: string;
  action: Function;
}

interface IInput {
  /*** condition to bind the input to an form. */
  bindForm?: boolean;
  onChange?: Function;
  name: string;
  id: string;
  maxLength?: number;
  width?: string;
  height?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  hidden?: boolean;
  onlyNumbers?: boolean;
  onlyLetters?: boolean;
  formRef?: RefObject<HTMLFormElement>;
  afterError?: IAfterError;
  stateError?: boolean;
  errorCustomMessage?: string;
  initialValue?: string;
  isPhoneNumber?: boolean;
  isCNPJ?: boolean;
  isCPF?: boolean;
  isOnFocus?: () => void;
  inputIcon?: JSX.Element;
  icon?: JSX.Element;
  hasReset?: boolean;
}

export const InputSoft: React.FC<IInput> = ({
  bindForm = true,
  onChange = () => null,
  name,
  id,
  maxLength = 999,
  width = "180px",
  height = "40px",
  disabled = false,
  label = "",
  placeholder = "",
  hidden = false,
  onlyNumbers = false,
  onlyLetters = false,
  formRef = null,
  afterError = null,
  errorCustomMessage = "",
  stateError = false,
  initialValue,
  isPhoneNumber = false,
  isCNPJ = false,
  isCPF = false,
  isOnFocus = () => null,
  icon,
  inputIcon = null,
  hasReset = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [valueHidden, setValueHidden] = useState<string>("");
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [lengthPhone, setLengthPhone] = useState<number>();
  const numberPattern: RegExp = /^[0-9]*$/;
  const lettersPattern: RegExp =
    /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]+$/;
  const phonePattern: RegExp = /^[0-9 () + -]*$/;
  const CNPJPattern: RegExp = /^[0-9 / . -]*$/;
  const CPFPattern: RegExp = /^[0-9 . -]*$/;

  /**
   * @description useEffect to clear inputs whenever hasReset becomes true
   **/
  useEffect(() => {
    if (hasReset) {
      setValue("");
      setValueHidden("");
    }
  }, [hasReset]);

  useEffect(() => {
    if (isPhoneNumber && initialValue) {
      setValue(`+${initialValue}`);
      setValueHidden(initialValue);
    } else if (initialValue) {
      setValue(initialValue);
      setValueHidden(initialValue);
    }
  }, [initialValue, isPhoneNumber]);

  /**
   * @description Handle input change.
   * @param event event object.
   */
  function handleChange(event: any) {
    if (!event.target.value) {
      setValue(event.target.value);
      setValueHidden(event.target.value);
      onChange && onChange(event.target.value);
    } else if (onlyNumbers) {
      const match: boolean = numberPattern.test(event.target.value);
      if (match) {
        setValue(event.target.value);
        setValueHidden(event.target.value);
        onChange && onChange(event.target.value);
      }
    } else if (onlyLetters) {
      const match: boolean = lettersPattern.test(event.target.value);
      if (match) {
        setValue(event.target.value);
        setValueHidden(event.target.value);
        onChange && onChange(event.target.value);
      }
    } else if (isPhoneNumber) {
      const match: boolean = phonePattern.test(event.target.value);
      if (match) {
        const phoneNumberReplace: string = event.target.value
          .normalize("NFD")
          .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
        setValueHidden(phoneNumberReplace);
        if (phoneNumberReplace.length === maxLength) {
          setLengthPhone(event.target.value.length);
        } else if (phoneNumberReplace.length < maxLength) {
          setLengthPhone(999);
        } else {
          setLengthPhone(maxLength);
        }
        setValue(event.target.value.replace(/^(\d)/g, "+$1"));
        onChange && onChange(phoneNumberReplace);
      }
    } else if (isCNPJ) {
      const match: boolean = CNPJPattern.test(event.target.value);
      if (match) {
        const CNPJReplace: string = event.target.value
          ?.replace(/\D/g, "")
          ?.replace(/(\d{2})(\d)/, "$1.$2")
          ?.replace(/(\d{3})(\d)/, "$1.$2")
          ?.replace(/(\d{3})(\d)/, "$1/$2")
          ?.replace(/(\d{4})(\d{1,2})$/, "$1-$2");

        setValueHidden(event.target.value.replace(/[/ . -]/g, ""));
        setValue(CNPJReplace);
        onChange && onChange(CNPJReplace);
      }
    } else if (isCPF) {
      const match: boolean = CPFPattern.test(event.target.value);
      if (match) {
        const CPFReplace: string = event.target.value
          ?.replace(/\D/g, "")
          ?.replace(/(\d{3})(\d)/, "$1.$2")
          ?.replace(/(\d{3})(\d)/, "$1.$2")
          ?.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        setValueHidden(event.target.value.replace(/[. -]/g, ""));
        setValue(CPFReplace);
        onChange && onChange(CPFReplace);
      }
    } else {
      setValue(event.target.value);
      setValueHidden(event.target.value);
      onChange && onChange(event.target.value);
    }
  }

  /**
   * @description Handle after-error.
   */
  function handleAfterError() {
    if (afterError) {
      switch (afterError.type) {
        case constants.confirm:
          const password: string = formRef?.current?.getFieldValue("password");
          if (afterError.action(inputRef.current?.value, password))
            formRef?.current?.setFieldError(name, false);
          break;

        case constants.email:
          if (afterError.action(inputRef.current?.value))
            formRef?.current?.setFieldError(name, false);
          break;
        default:
          break;
      }
    } else if (inputRef.current?.value)
      formRef?.current?.setFieldError(name, false);
  }

  /**
   * @description maxLength Input Function.
   */
  function handleMaxLenght() {
    if (isPhoneNumber) {
      return lengthPhone;
    } else {
      return maxLength;
    }
  }

  /** trigger reset listener */
  useEffect(() => {
    document.addEventListener("reset", () => setValue(""));
    document.addEventListener("reset", () => setValueHidden(""));
    return () => {
      document.removeEventListener("reset", () => setValue(""));
      document.removeEventListener("reset", () => setValueHidden(""));
    };
  }, []);

  /** Register field. */
  useEffect(() => {
    bindForm &&
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: constants.value,
      });
  }, [bindForm, fieldName, registerField]);

  return (
    <StyContainer width={width} id={`${id}-container-id`}>
      <StyLabel
        disable={disabled}
        hasError={error || stateError ? true : false}
      >
        <Text
          id={`${id}-label-id`}
          value={!label ? "" : error || stateError ? `* ${label}` : label}
          size="16px"
          fontWeight="600"
          icon={icon}
        />
      </StyLabel>
      <StyContainerInput
        height={40}
        disabled={disabled}
        hasError={error || stateError ? true : false}
        onBlur={() => error && handleAfterError()}
        fontSize={16}
        hasIcon={inputIcon ? true : false}
      >
        {inputIcon && (
          <StyIconBoxWrapper height={40}>{inputIcon}</StyIconBoxWrapper>
        )}
        <input
          name={name}
          ref={inputRef}
          id={`${id}-input-id`}
          type={hidden ? constants.password : constants.text}
          placeholder={placeholder}
          defaultValue={defaultValue}
          maxLength={handleMaxLenght()}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onFocus={isOnFocus}
          autoComplete="off"
        />
        <input
          name={name}
          ref={inputRef}
          id={`${id}-input-hidden-id`}
          type="hidden"
          defaultValue={defaultValue}
          maxLength={handleMaxLenght()}
          value={valueHidden}
          onChange={handleChange}
          autoComplete="off"
        />
      </StyContainerInput>
      {(error || stateError) && (
        <StyErrorWrapper>
          <Text
            value={errorCustomMessage || error}
            size="16px"
            id={`${id}-input-error-id`}
            hasMargin={false}
          />
        </StyErrorWrapper>
      )}
    </StyContainer>
  );
};

export default InputSoft;
