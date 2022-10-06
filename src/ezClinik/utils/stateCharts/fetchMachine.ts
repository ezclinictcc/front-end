import { createMachine, assign } from "xstate";

export default createMachine(
  {
    id: "fetch",
    initial: "idle",
    context: {
      promiseFn: null,
      data: null,
      error: null,
      params: {},
    },
    states: {
      idle: {
        on: {
          FETCH: "fetching",
        },
      },
      fetching: {
        onEntry: "setParams",
        invoke: {
          src: "fetch",
          onDone: {
            target: "success",
            actions: "setData",
          },
          onError: {
            target: "failure",
            actions: "setError",
          },
        },
      },
      success: {
        on: {
          FETCH: "fetching",
        },
      },
      failure: {
        on: {
          FETCH: "fetching",
        },
      },
    },
  },
  {
    actions: {
      // @ts-ignore
      setData: assign({ data: (_, event) => event.data }),
      // @ts-ignore
      setError: assign({ error: (_, event) => event.data }),
      // @ts-ignore
      setParams: assign({ params: (_, event) => event.params }),
    },
    services: {
      // @ts-ignore
      fetch: (ctx) => ctx.promiseFn(ctx.params),
    },
  }
);
