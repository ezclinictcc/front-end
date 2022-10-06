import React, { useState, useEffect, ChangeEvent } from "react";
import Text from "../../Text";
import { Sizes } from "../../../ts/enum/componentSize";
import {
  StyColumnPerPage,
  StyPageCounterContainer,
  StyPageCounter,
  StyPrevDisabled,
  StyPrev,
  StyPageNumber,
  StyExistPages,
  StyNextDisabled,
  StyNext,
  StyArrowPrevRight,
  StyArrowPrevLeft,
} from "./styles";
import SelectTable from "../SelectTable";

interface IPerPage {
  state: any;
  setState: Function;
  pageLabel: string;
  perPageColumn?: string[];
}

/**
 * @description Select lines per column into Table.
 * @param {any} state Values os pagination;
 * @param {Function} setState Action on change pagination;
 * @param {string} pageLabel Label of component;
 * @param {string[]} perPageColumn Array of row limit to see.
 */

export const PerPage: React.FC<IPerPage> = ({
  state,
  setState,
  pageLabel,
  perPageColumn,
}) => {
  const [options, setOptions] = useState<any>({});
  const [isInitialize, setIsInitialize] = useState<boolean>(false);

  /**
   * @description Change state.
   * @param e Action to change.
   */
  function handleSetState(e: ChangeEvent) {
    setState({
      ...state,
      registerPerPage: e.target.innerHTML.split("/")[0],
      currentPage: 1,
    });
  }

  /**
   * @description Initialize Component.
   */
  useEffect(() => {
    if (!isInitialize) {
      let obj = {};
      perPageColumn &&
        perPageColumn.forEach(
          (item: string, index: number) =>
            (obj = Object.assign(obj, {
              [index]: `${item} / ${pageLabel}`,
            }))
        );
      setOptions(obj);
      setIsInitialize(true);
    }
  }, [options]);

  return (
    <StyColumnPerPage>
      <SelectTable
        defaultValue={`${options[0]} / ${pageLabel}`}
        options={options}
        value={`${state.registerPerPage} / ${pageLabel}`}
        onChange={handleSetState}
      />
    </StyColumnPerPage>
  );
};

interface IPagination {
  state: any;
  setState: Function;
  qttRegisters: number;
}

interface IpageResult {
  startIndex: number;
  endIndex: number;
  showFirstPage: boolean;
  totalPages: number;
  pages: number[];
  showLastPage: boolean;
}

/**
 * @description Pagination of data table.
 * @param {number} startIndex Initial index;
 * @param {number} endIndex End Index;
 * @param {boolean} showFirstPage Show initial page;
 * @param {number} totalPages Total of pages;
 * @param {number[]} pages All pages;
 * @param {boolean} showLastPage Show last page;
 * @param {any} state Current state pagination;
 * @param {Function} setState Action to change;
 * @param {number} qttRegisters Quantity of record to view.
 */

export const Pagination: React.FC<IPagination> = ({
  state,
  setState,
  qttRegisters,
}) => {
  const [pageResult, setPageResult] = useState<IpageResult>(Object);
  const { currentPage }: any = state;

  /**
   * @description Create a new page.
   * @param currentPage Current page;
   * @param registerPerPage Register per page;
   * @param arraySize Array size;
   * @param totalRegister Total Registers.
   * @returns Current Page.
   */
  function createPages(
    currentPage: number,
    registerPerPage: number,
    arraySize: number,
    totalRegister: number
  ) {
    const minArraySize: number = 7;
    const minPages: number = 9;
    const initNeighborhood: number = 6;
    const totalPages: number = Math.ceil(totalRegister / registerPerPage);
    if (totalPages <= minPages) {
      arraySize = minPages;
    }
    if (arraySize < minArraySize) {
      arraySize = minArraySize;
    }
    arraySize =
      arraySize > totalPages
        ? totalPages
        : arraySize % 2 === 1
        ? arraySize
        : arraySize + 1;
    const median: number = Math.ceil(arraySize / 2);
    const halfMedian: number = Math.ceil(median / 2);
    if (currentPage >= initNeighborhood) {
      arraySize -= halfMedian;
    }
    const pages: any[] = [];
    if (currentPage < initNeighborhood) {
      for (let i = 1; i <= arraySize; i++) {
        pages.push(i);
      }
    } else if (
      currentPage >= initNeighborhood &&
      totalPages - currentPage > median
    ) {
      for (
        let i = currentPage - halfMedian;
        i < currentPage + arraySize - halfMedian;
        i++
      ) {
        pages.push(i);
      }
    } else if (totalPages - currentPage <= median) {
      arraySize += halfMedian;
      for (let i = totalPages - arraySize + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    const showFirstPage: boolean =
      currentPage >= initNeighborhood && totalPages > minPages;
    const showLastPage: boolean =
      !(totalPages - currentPage <= median) && totalPages > minPages;
    const startIndex: number =
      currentPage === 1 ? 0 : currentPage * registerPerPage - registerPerPage;
    const endIndex: number =
      currentPage === 1
        ? registerPerPage
        : currentPage * registerPerPage > totalRegister
        ? totalRegister
        : currentPage * registerPerPage;

    return {
      pages,
      totalPages,
      startIndex,
      endIndex,
      showFirstPage,
      showLastPage,
    };
  }

  /**
   * @description Call a new state.
   */
  useEffect(() => {
    setState({
      ...state,
      currentPage,
      startIndex: pageResult.startIndex,
      endIndex: pageResult.endIndex,
    });
  }, [pageResult]);

  /**
   * @description Call create pages.
   */
  useEffect(() => {
    setPageResult(
      createPages(
        currentPage,
        state.registerPerPage,
        state.qttPagesShow,
        qttRegisters
      )
    );
  }, [currentPage, state.registerPerPage, qttRegisters]);

  return (
    <StyPageCounterContainer id="PageCounterContainer">
      <StyPageCounter id="PageCounter">
        {currentPage <= 1 ? (
          <StyPrevDisabled id="PrevDisabled">
            <StyArrowPrevLeft disable={true} />
          </StyPrevDisabled>
        ) : (
          <StyPrev
            id="Prev"
            onClick={() =>
              currentPage - 1 > 0 &&
              setState({ ...state, currentPage: currentPage - 1 })
            }
          >
            <StyArrowPrevLeft disable={false} />
          </StyPrev>
        )}
        {pageResult &&
          pageResult.showFirstPage &&
          state.qttPagesShow < pageResult.totalPages && (
            <>
              <StyPageNumber
                id="PageNumber"
                onClick={() => setState({ ...state, currentPage: 1 })}
              >
                <Text value={"1"} size={Sizes.lb} />
              </StyPageNumber>
              <StyExistPages id="ExistPages">...</StyExistPages>
            </>
          )}
        {pageResult &&
          pageResult.pages &&
          pageResult.pages.map((numbers) => (
            <StyPageNumber
              id={`PageNumber-${numbers}`}
              key={numbers}
              onClick={() => setState({ ...state, currentPage: numbers })}
              selected={currentPage == numbers && "selected"}
            >
              <Text value={numbers.toString()} size={Sizes.lb} />
            </StyPageNumber>
          ))}
        {pageResult &&
          pageResult.showLastPage &&
          state.qttPagesShow < pageResult.totalPages && (
            <>
              <StyExistPages id="ExistPages">...</StyExistPages>
              <StyPageNumber
                id="PageNumber"
                onClick={() =>
                  setState({
                    ...state,
                    currentPage: pageResult.totalPages,
                  })
                }
              >
                <Text
                  value={pageResult.totalPages.toString()}
                  size={Sizes.lb}
                />
              </StyPageNumber>
            </>
          )}
        {currentPage === pageResult.totalPages + 1 ||
        currentPage === pageResult.totalPages ? (
          <StyNextDisabled id="NextDisabled">
            <StyArrowPrevRight disable={true} />
          </StyNextDisabled>
        ) : (
          <StyNext
            id="Next"
            onClick={() =>
              currentPage < pageResult.totalPages &&
              setState({ ...state, currentPage: currentPage + 1 })
            }
          >
            <StyArrowPrevRight disable={false} />
          </StyNext>
        )}
      </StyPageCounter>
    </StyPageCounterContainer>
  );
};
