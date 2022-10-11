import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Transition from "../Components/Transition";
import { userLogIn, userLogOut } from "./redux/user/userSlice";

export const TransitionContext: React.Context<any> = React.createContext({});

export const TransitionProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hasTransition, setHasTransition] = useState<boolean>(false);
  const [navigateTo, setNavigateTo] = useState<string>("");
  const [actionName, setActionName] = useState<string>("");
  const [actionFunction, setActionFunction] = useState<any>(null);

  useEffect(() => {
    if (hasTransition) {
      setTimeout(() => {
        if (actionName) {
          if (actionName === "logout") {
            dispatch(userLogOut());
          }
          if (actionName === "login") {
            dispatch(userLogIn(actionFunction));
          }
        } else {
          navigate(navigateTo);
        }
      }, 1250);
      setTimeout(() => {
        setHasTransition(false);
        setNavigateTo("");
        setActionName("");
      }, 2470);
    }
  }, [hasTransition]);

  return (
    <TransitionContext.Provider
      value={{
        hasTransition,
        setHasTransition,
        navigateTo,
        setNavigateTo,
        actionName,
        setActionName,
        actionFunction,
        setActionFunction,
      }}
    >
      {hasTransition && <Transition />}
      {children}
    </TransitionContext.Provider>
  );
};
