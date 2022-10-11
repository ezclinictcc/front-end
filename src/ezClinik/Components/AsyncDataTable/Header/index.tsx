import React from "react";
import Text from "../../Text";
import { Sizes } from "../../../ts/enum/componentSize";
import { StyContainer, StyPaginationHeader } from "./styles";
import { Pagination, PerPage } from "../Pagination";
import { IBundles } from "../interface";

interface IProps {
  id: string;
  qttRegisters: number;
  pagination?: any;
  position: string;
  setPagination?: Function;
  perPageColumn?: string[];
  bundles: IBundles;
}

/**
 * @description Table Header.
 * @param {string} id Id componente;
 * @param {number} qttRegisters Quantity of record to view;
 * @param {any} pagination Pagination values;
 * @param {Function} setPagination Action on change pagination;
 * @param {string[]} perPageColumn List of values to show by page;
 * @param {IBundles} bundles Bundles component.
 */
export const HeaderTable: React.FC<IProps> = ({
  qttRegisters,
  pagination,
  perPageColumn,
  position,
  setPagination = () => {},
  bundles,
  id,
}) => {
  return (
    <StyContainer id={`${id}-header-id`}>
      <StyPaginationHeader position={position}>
        <div>
          <span>
            {qttRegisters === 1 ? (
              <Text
                value={`${qttRegisters} ${bundles.qttSearch} ${bundles.registration}`}
                size="16px"
              />
            ) : (
              <Text
                value={`${qttRegisters} ${bundles.qttSearchPlural} ${bundles.registrationPlural}`}
                size="16px"
              />
            )}
          </span>
        </div>
        <div>
          {qttRegisters !== null ? (
            <Pagination
              setState={setPagination}
              state={pagination}
              qttRegisters={qttRegisters}
            />
          ) : (
            <></>
          )}
          <PerPage
            setState={setPagination}
            state={pagination}
            pageLabel={bundles.page}
            perPageColumn={perPageColumn}
          />
        </div>
        <div>
          <Text
            value={`${bundles.showing} ${
              pagination.startIndex === 0 ? 1 : pagination.startIndex
            } ${bundles.of} ${pagination.endIndex}`}
            size="16px"
          />
        </div>
      </StyPaginationHeader>
    </StyContainer>
  );
};

export default HeaderTable;
