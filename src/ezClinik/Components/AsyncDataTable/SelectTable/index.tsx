import React, { useState } from "react";
import Text from "../../Text";
import { Sizes } from "../../../ts/enum/componentSize";
import {
  StySelectContainer,
  StySelectWrapper,
  StySelectExpanded,
  StySelectLabel,
  StySelectImg,
  StySelectLabelExpanded,
} from "./styles";
import SelectArrowUp from "../../../assets/icons/SelectArrowUp";
import SelectArrowDown from "../../../assets/icons/SelectArrowDown";

export interface IProps {
  id?: string;
  item?: object;
  onChange?: Function;
  handleOptions?: Function;
  options?: any;
  defaultValue?: string;
  value?: string;
}

export interface IItem {
  itemValue: any;
  itemLabel: any;
}

/**
 * @description Select Table Component.
 * @param {string} id Id component;
 * @param {object} item Object with the item;
 * @param {Function} onChange Action on change;
 * @param {Function} handleOptions Action to handle all options;
 * @param {any} options Current options to select;
 * @param {string} defaultValue Initial value;
 * @param {string} value Current value.
 */

export const SelectTable: React.FC<IProps> = ({
  id,
  options = {},
  value,
  defaultValue,
  onChange = () => null,
}) => {
  const [selected, setSelected] = useState<IItem>(Object);
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const selectList: IItem[] = [];

  /**
   * @description Handle Select.
   * @param item Object with the item;
   * @param onChange Action on change;
   * @param event Event on change.
   */
  function handleSelect(item: IItem, onChange: Function, event: any) {
    setSelected(item);
    setOpen(false);
    if (onChange) {
      onChange(event);
    }
  }

  /**
   * @description Push itens to list.
   * @returns Selected list.
   */
  function handleOptions() {
    Object.keys(options).map((key) =>
      selectList.push({ itemValue: key, itemLabel: options[key] })
    );
    return selectList;
  }

  return (
    <StySelectContainer id={id} isOpen={open} focused={focus}>
      <StySelectWrapper
        onClick={() => {
          setOpen(!open);
          setFocus(!focus);
        }}
      >
        <StySelectLabel>
          {value ? value : !selected ? defaultValue : selected.itemLabel}
        </StySelectLabel>
        <StySelectImg>
          {open ? (
            <SelectArrowUp width="15px" height="12px" />
          ) : (
            <SelectArrowDown width="15px" height="12px" />
          )}
        </StySelectImg>
      </StySelectWrapper>
      {open && (
        <StySelectExpanded>
          {options &&
            handleOptions().map((item) => (
              <StySelectLabelExpanded
                id={`${id}-${item}-id`}
                key={item.itemValue}
                onClick={(e) => handleSelect(item, onChange, e)}
              >
                <Text size={Sizes.xxs} value={item.itemLabel} />
              </StySelectLabelExpanded>
            ))}
        </StySelectExpanded>
      )}
    </StySelectContainer>
  );
};

export default SelectTable;
