import React, { useEffect, useState } from "react";
import {
  StyContainer,
  StyInputWrapper,
  StyIconAlign,
  StyInput,
  StyText,
  StyFilterContent,
  StyWrapper,
} from "./styles";
import SearchIcon from "../../assets/icons/Search";

interface IProps {
  id: string;
  title?: string;
  name?: string;
  placeholder?: string;
  width?: string;
  handleChange?: Function;
  initialValue?: string;
  instantChange?: boolean;
}

/**
 */
export const SimpleInput: React.FC<IProps> = ({
  id,
  title = "",
  name = "",
  placeholder = "",
  width = "",
  handleChange,
  initialValue,
  instantChange = false,
}) => {
  const [inputData, setInputData] = useState<string>("");

  useEffect(() => {
    initialValue && setInputData(initialValue);
  }, [initialValue]);

  useEffect(() => {
    instantChange && handleChange && handleChange(inputData);
  }, [instantChange, inputData]);

  return (
    <StyContainer id={`${id}-id`}>
      {title && <StyText>{title}</StyText>}
      <StyInputWrapper width={width} tabIndex={1}>
        <StyFilterContent>
          <StyWrapper>
            <StyInput
              name={name}
              placeholder={placeholder}
              tabIndex={1}
              value={inputData}
              onChange={(data: any) => setInputData(data.target.value)}
              autoComplete="off"
            />
            <StyIconAlign
              tabIndex={1}
              onClick={() => handleChange && handleChange(inputData)}
            >
              <SearchIcon fill="rgb(100, 99, 99)" width={20} height={20} />
            </StyIconAlign>
          </StyWrapper>
        </StyFilterContent>
      </StyInputWrapper>
    </StyContainer>
  );
};

export default SimpleInput;
