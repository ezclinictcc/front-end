import { useField } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
import { StyContainer, StyErrorWrapper, StyTitle, StyWrapper } from "./styles";
import MultiStateCheckBox from "../MultiStateCheckBox";
import Text from "../Text";
import { Sizes } from "../../ts/enum/componentSize";

interface Props {
  id: string;
  name: string;
  bindForm?: boolean;
  options: IOptions[];
  disable?: boolean;
  onChange?: (data: string[]) => void;
  initialValue?: string | string[];
  title?: string;
  keepInitialValueOnReset?: boolean;
  dataUpdate?: string | string[];
  formRef?: any;
}

interface IOptions {
  value: string;
  label: string;
}

/**
 * @description CheckBoxGroup Component.
 * @param {string} value text value.
 * @param {number} size text size.
 */
export const CheckBoxGroup: React.FC<Props> = ({
  id,
  name,
  options,
  bindForm = true,
  onChange,
  disable = false,
  initialValue,
  title,
  keepInitialValueOnReset = false,
  dataUpdate,
  formRef = null,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);
  const [selected, setSelected] = useState<string[]>([]);

  /** Register field. */
  useEffect(() => {
    bindForm && document.addEventListener("reset", handleReset);
    bindForm &&
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
      });
  }, [fieldName, bindForm, registerField]);

  useEffect(() => {
    if (initialValue) {
      if (Array.isArray(initialValue)) {
        setSelected(initialValue);
      } else {
        const values: string[] = initialValue.split(",");
        setSelected([...values]);
      }
    }
  }, [initialValue]);

  /**
   * @description Reset select values.
   */
  function handleReset() {
    if (keepInitialValueOnReset && initialValue) {
      if (Array.isArray(initialValue)) {
        setSelected(initialValue);
      } else {
        const values: string[] = initialValue.split(",");
        setSelected([...values]);
      }
    } else {
      setSelected([]);
    }
  }

  /**
   * @description Handle checkbox toggle.
   * @param id option id.
   */
  function handleToggle(id: string) {
    const newState = selected.includes(id.toString())
      ? selected.filter((op) => op.toString() !== id.toString())
      : [...selected, id.toString()];
    doChanges([id.toString()]);
  }

  /**
   * @description Apply array changes.
   * @param values values array to be setted.
   */
  function doChanges(values: string[]) {
    setSelected(values);
    onChange && onChange(values);
    if (error) {
      if (values) {
        formRef?.current.setFieldError(name, false);
      }
    }
  }

  useEffect(() => {
    if (dataUpdate) {
      if (Array.isArray(dataUpdate)) {
        setSelected(dataUpdate);
      } else {
        const values: string[] = dataUpdate.split(",");
        setSelected([...values]);
      }
    }
  }, [dataUpdate]);

  return (
    <StyContainer id={`${id}-container-id`}>
      <StyTitle>{title}</StyTitle>
      <StyWrapper>
        <input
          id={id}
          name={name}
          type="hidden"
          defaultValue={defaultValue}
          value={selected}
          data-testid={`${id}-checkbox-group-test-id`}
          ref={inputRef}
          autoComplete="off"
        />
        {options.map((op, index) => (
          <div
            id={`${id}-option-${index}-wrapper`}
            key={index}
            onClick={() => handleToggle(op.value)}
          >
            <MultiStateCheckBox
              id={`${id}-id`}
              isSelected={selected.includes(op.value.toString())}
              isIndeterminated={false}
              onClick={() => handleToggle(op.value)}
              disable={disable}
            />
            <Text id={`${id}-text-id`} value={op.label} size={Sizes.xs} />
          </div>
        ))}
      </StyWrapper>
      {error && (
        <StyErrorWrapper>
          <Text id={`${id}-error-id`} value={error} size={Sizes.xxs} />
        </StyErrorWrapper>
      )}
    </StyContainer>
  );
};

export default CheckBoxGroup;
