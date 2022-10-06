import React, { useEffect, useState } from "react";
import { resizeWindow } from "../utils/resizeWindow";

export const ResizeWindowContext: React.Context<any> = React.createContext<any>(
  {}
);

export const ResizeWindowProvider = ({ children }: any) => {
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  /**
   * @description On resize window, resize TreeMap.
   */
  function resizeWindowClient() {
    const { width, height } = resizeWindow();
    if (width !== 0 && height !== 0) {
      setClientWidth(width);
      setClientHeight(height);
    }
  }

  /**
   * @description Initialize width and height Client.
   */
  useEffect(() => {
    resizeWindowClient();
  }, []);

  /**
   * @description Keep monitoring resize window.
   */
  window.addEventListener("resize", resizeWindowClient);

  return (
    <ResizeWindowContext.Provider
      value={{
        clientWidth,
        setClientWidth,
        clientHeight,
        setClientHeight,
      }}
    >
      {children}
    </ResizeWindowContext.Provider>
  );
};
