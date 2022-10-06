import { useField } from "@unform/core";
import React, { RefObject, useEffect, useRef, useState } from "react";
import Text from "../Text";
import { StyContainer, StyErrorWrapper, StyInput, StyWrapper } from "./styles";

interface Props {
  numberOfChildren: number;
  formRef?: RefObject<HTMLFormElement>;
  stateError?: boolean;
  errorCustomMessage?: string;
  bindForm?: boolean;
  onlyNumber?: boolean;
  name: string;
  id: string;
}

const InputCodeValidate: React.FC<Props> = ({
  numberOfChildren,
  name,
  id,
  formRef = null,
  stateError = false,
  errorCustomMessage = "",
  onlyNumber = false,
  bindForm = true,
}) => {
  const [inputSequence, setInputSequence] = useState<number[]>([]);
  const [dataValue, setDataValue] = useState<string>("");
  const [valueObject, setValueObject] = useState<any>([]);
  const { fieldName, registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(data: any, sequence: number, index: number) {
    if (data) {
      document?.getElementById(`input-sequence-${sequence + 1}`)?.focus();
      setDataValue(dataValue.slice(0, index) + data + dataValue.slice(index));
      if (valueObject) {
        let valueNew: any[] = [
          ...valueObject,
          { key: index, value: data },
        ].sort((a, b) => (a.key > b.key ? 1 : b.key > a.key ? -1 : 0));
        setValueObject(valueNew);
      } else {
        setValueObject([{ key: index, value: data }]);
      }
    } else {
      let valueRemove: any[] = [];
      let valueString: any[] = [];
      document?.getElementById(`input-sequence-${sequence - 1}`)?.focus();
      valueObject.forEach((seq: any) => {
        if (seq.key !== index) {
          valueRemove.push(seq);
          valueString.push(seq.value);
        }
      });
      setDataValue(valueString.join(""));
      setValueObject(valueRemove);
    }
    if (error && bindForm) {
      formRef?.current && formRef?.current.setFieldError(name, false);
    }
  }

  useEffect(() => {
    const sequence: number[] = Array(numberOfChildren)
      ?.fill(1)
      ?.map((_, index) => index + 1);
    setInputSequence(sequence);
  }, [numberOfChildren]);

  /** Event handlers. */
  useEffect(() => {
    bindForm && document.addEventListener("reset", () => setDataValue(""));
    bindForm && document.addEventListener("reset", () => setValueObject({}));
    return () => {
      bindForm && document.removeEventListener("reset", () => setDataValue(""));
      bindForm &&
        document.removeEventListener("reset", () => setValueObject({}));
    };
  }, [bindForm]);

  /** Register field. */
  useEffect(() => {
    bindForm &&
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
      });
  }, [bindForm, fieldName, registerField]);

  return (
    <StyContainer>
      <StyWrapper>
        {inputSequence?.map((sequence: number, index: number) => {
          return (
            <StyInput
              id={`input-sequence-${sequence}`}
              key={`input-sequence-${sequence}`}
              value={valueObject[index]?.value ? valueObject[index]?.value : ""}
              maxLength={1}
              onChange={(event: any) =>
                handleChange(
                  onlyNumber
                    ? event.target.value.replace(/[^0-9]/g, "")
                    : event.target.value,
                  sequence,
                  index
                )
              }
              autoComplete="nope"
              error={error || stateError ? true : false}
            />
          );
        })}
        <input
          id={`${id}-id`}
          name={name}
          ref={inputRef}
          value={dataValue}
          hidden
          autoComplete="nope"
          maxLength={numberOfChildren}
        />
      </StyWrapper>
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

export default InputCodeValidate;
