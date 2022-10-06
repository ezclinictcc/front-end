import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Transition from "../Components/Transition";

export const TransitionContext: React.Context<any> = React.createContext({});

export const TransitionProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [hasTransition, setHasTransition] = useState<boolean>(false);
  const [navigateTo, setNavigateTo] = useState<string>("");

  useEffect(() => {
    if (hasTransition) {
      setTimeout(() => {
        navigate(navigateTo);
      }, 1250);
      setTimeout(() => {
        setHasTransition(false);
      }, 2480);
    }
  }, [hasTransition]);

  return (
    <TransitionContext.Provider
      value={{
        hasTransition,
        setHasTransition,
        navigateTo,
        setNavigateTo,
      }}
    >
      {hasTransition && <Transition />}
      {children}
    </TransitionContext.Provider>
  );
};
