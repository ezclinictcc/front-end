import React from "react";
import CdPageRoute from "./routes/route-manager";
import { ResizeWindowProvider } from "./store/resize";
import ToastProvider from "./store/toast";
import { TransitionProvider } from "./store/transitionLogin";
import GlobalStyle from "./styles/global";

/**
 * @description EZClinik APP.
 */
const KabumCdViewer: React.FC<{}> = () => {
  return (
    <>
      <ResizeWindowProvider>
        <ToastProvider>
          <TransitionProvider>
            <GlobalStyle />
            <CdPageRoute />
          </TransitionProvider>
        </ToastProvider>
      </ResizeWindowProvider>
    </>
  );
};

export default KabumCdViewer;
