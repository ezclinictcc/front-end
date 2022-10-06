import React, { useState } from "react";
import HstToast from "../Components/HstToast";
import { CriticyType } from "../ts/enum/criticyType";

interface IProps {
  children: any;
}

interface IMessage {
  criticy: CriticyType;
  message: string;
}

export const ToastContext: React.Context<{}> = React.createContext({});
const ToastProvider: React.FC<IProps> = ({ children }) => {
  const [message, setMessage] = useState<IMessage | any>();
  const fireToast: Function = (message: IMessage) => {
    return setMessage(message);
  };

  return (
    <ToastContext.Provider value={{ fireToast }}>
      <HstToast message={message} id="toast-message" time={10} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
