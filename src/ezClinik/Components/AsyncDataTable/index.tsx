import React, { useContext, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { ToastContext } from "../../store/toast";
import { CriticyType } from "../../ts/enum/criticyType";
import TableContent from "./Content";
import { HeaderTable } from "./Header";
import { IBundles, IPagination } from "./interface";

interface IProps {
  id: string;
  rowKey: string;
  headers: string[];
  columns: string[];
  customWidth?: string[];
  perPageColumn?: string[];
  bundles: IBundles;
  initialOrder?: any;
  initialOrdenate?: string;
  promiseFn?: Function;
  transform?: (data: any[]) => any[];
  onRowClick?: Function;
  buttonsActions?: Function;
  reloadTable?: boolean;
  onChange?: Function;
  onChangeId?: Function;
  loading?: boolean;
  paramsFilter?: string;
  disableKey?: string;
  disableKeyValue?: string;
}

/**
 * @description AsyncDataTable
 * @param {string} id Element id.
 * @param {string[]} headers Id's array with bundles columns.
 * @param {string[]} columns It's array with prop name than contain in data object.
 * @param {string[]} customWidth This param makes the column width customizable.
 * @param {any[]} data Object with data of table.
 */

const AsyncDataTable: React.FC<IProps> = ({
  id,
  rowKey,
  headers = [],
  columns = [],
  bundles,
  customWidth = ["25%", "25%", "25%", "25%"],
  perPageColumn = [],
  initialOrder,
  initialOrdenate,
  promiseFn,
  transform,
  onRowClick,
  buttonsActions,
  reloadTable,
  onChange = () => null,
  onChangeId = () => null,
  loading = false,
  paramsFilter,
  disableKey,
  disableKeyValue,
}) => {
  const { fireToast }: any = useContext(ToastContext);
  const [data, setData] = useState<any[]>([]);
  const [dataShow, setDataShow] = useState<any>([]);
  const [pagination, setPagination] = useState<IPagination>({
    currentPage: 1,
    qttPagesShow: 7,
    totalRegister: 0,
    registerPerPage: parseInt(perPageColumn[0]),
    startIndex: 0,
    endIndex: 25,
  });
  const [orderDataValue, setOrderDataValue] = useState<any>(
    initialOrder || {
      orderName: "",
      orderGrowing: true,
    }
  );

  const { fetch: request, pending: loadRequest } = useAsync({
    promiseFn: promiseFn,
    onData: (data) => {
      if (transform) {
        const transformData: any[] = transform(data.data);
        setData(transformData);
      } else {
        setData(data);
      }
    },
    onError: (_error: any) => {
      fireToast({
        criticy: CriticyType.error,
        message: "Não foi possível carregar a tabela",
      });
    },
  });

  useEffect(() => {
    paramsFilter && request(paramsFilter);
  }, [paramsFilter]);

  useEffect(() => {
    paramsFilter && request(paramsFilter);
  }, [promiseFn]);

  useEffect(() => {
    if (!reloadTable) {
      paramsFilter && request(paramsFilter);
    }
  }, [reloadTable]);

  function handleOrdenate(headerName: string) {
    setOrderDataValue({
      orderName: headerName,
      orderGrowing:
        headerName === orderDataValue.orderName
          ? !orderDataValue.orderGrowing
          : true,
    });
  }

  function orderData() {
    setData(
      data.sort((a: any, b: any) => {
        if (orderDataValue.orderGrowing) {
          return a[orderDataValue.orderName] < b[orderDataValue.orderName]
            ? -1
            : a[orderDataValue.orderName] > b[orderDataValue.orderName]
            ? 1
            : 0;
        }
        return a[orderDataValue.orderName] > b[orderDataValue.orderName]
          ? -1
          : a[orderDataValue.orderName] < b[orderDataValue.orderName]
          ? 1
          : 0;
      })
    );
  }

  useEffect(() => {
    let dataAux: any = [];
    if (data?.length > 0) {
      orderData();
      data?.forEach((item: any, index: number) => {
        if (index >= pagination.startIndex && index < pagination.endIndex) {
          dataAux.push(item);
        }
      });
    }
    if (dataAux?.length === 0 && data?.length > 0) {
      setPagination({ ...pagination, currentPage: 1 });
      orderData();
      data?.forEach((item: any, index: number) => {
        if (index >= 0 && index < parseInt(perPageColumn[0])) {
          dataAux.push(item);
        }
      });
    }
    setDataShow(dataAux);
  }, [data, pagination, orderDataValue]);

  return (
    <>
      <HeaderTable
        id={id}
        position="top"
        qttRegisters={data?.length}
        pagination={pagination}
        setPagination={setPagination}
        perPageColumn={perPageColumn}
        bundles={bundles}
      />
      <TableContent
        id={id}
        rowKey={rowKey}
        headers={headers}
        columns={columns}
        customWidth={customWidth}
        dataShow={dataShow}
        data={data}
        loading={loadRequest || loading}
        handleOrdenate={handleOrdenate}
        initialOrdenate={initialOrdenate}
        onRowClick={onRowClick}
        buttonsActions={buttonsActions}
        onChange={onChange}
        onChangeId={onChangeId}
        reloadTable={reloadTable || loadRequest}
        bundles={bundles}
        disableKey={disableKey}
        disableKeyValue={disableKeyValue}
      />
      <HeaderTable
        id={id}
        position="bottom"
        qttRegisters={data?.length}
        pagination={pagination}
        setPagination={setPagination}
        perPageColumn={perPageColumn}
        bundles={bundles}
      />
    </>
  );
};

export default AsyncDataTable;
