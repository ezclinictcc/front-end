import React from "react";
import fetchMachine from "../utils/stateCharts/fetchMachine";
import { useMachine } from "@xstate/react";

interface IAsyncResponses {
  success: string;
  failure: string;
  fetching: string;
  login: string;
  errorMessage: string;
}

const AsyncResponses: IAsyncResponses = {
  success: "success",
  failure: "failure",
  fetching: "fetching",
  login: "login",
  errorMessage: "useAsync expects a promiseFn",
};

interface IAsync {
  promiseFn: any;
  onData: (data: any, headers: any, param: any) => any;
  onError: (error: any, param: any) => any;
}

export default ({
  promiseFn = () => {
    throw new Error(AsyncResponses.errorMessage);
  },
  onData = () => {},
  onError = () => {},
}: IAsync) => {
  const [current, send] = useMachine<any>(fetchMachine, {
    context: { promiseFn },
  });

  function isUnauthorized(error: any) {
    const isAtLogin: boolean = window.location.href.includes(
      AsyncResponses.login
    );
    return error?.status === 401 && !isAtLogin;
  }

  const { data, error, params } = current.context;
  React.useEffect(() => {
    if (current.matches(AsyncResponses.failure)) {
      // if (isUnauthorized(error)) {

      // }
      onError(error, params);
    }
  }, [current.value]);

  React.useEffect(() => {
    if (current.matches(AsyncResponses.success)) {
      onData(data.data, data.headers, params);
    }
  }, [current.value]);

  // @ts-ignore
  const fetch: any = (args: any) => send({ type: "FETCH", params: args });

  return {
    pending: current.matches(AsyncResponses.fetching),
    data,
    error,
    fetch,
  };
};
