import React, { useState, useEffect } from "react";

import {
  StyContainer,
  StyToastWrapper,
  StyToast,
  StyIconWrapper,
  StyContentWrapper,
} from "./styles";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import WarningIcon from "../../assets/icons/WarningIcon";
import SuccessIcon from "../../assets/icons/SuccessIcon";
import { CriticyType } from "../../ts/enum/criticyType";
import Text from "../Text";
import CloseXIcon from "../../assets/icons/CloseXIcon";

interface IProps {
  id: string;
  message: IMessage;
  time?: number;
}

export interface IMessage {
  criticy: CriticyType;
  message: string;
}

/**
 * @description HST Toast Component.
 * @param {string} id Component id.
 * @param {IMessage} message Object message that will be added to toast list.
 * @param {number} time Estimated time to close the each message
 */
const HstToast: React.FC<IProps> = ({ id, message, time = 5 }) => {
  const [queue, setQueue] = useState<IMessage[]>([]);
  const delayTime: number = 1000;

  function dropTimer(index: number) {
    setTimeout(() => {
      close(`${id}-message${index - 1}-id`);
    }, time * 1000 + delayTime);
  }

  function close(id: string) {
    document.getElementById(id)?.remove();
    const hasMessages = document.querySelectorAll(".messageClass")?.length;
    if (hasMessages === 0) {
      setQueue([]);
    }
  }

  function handleCriticy(criticy: string): any {
    switch (criticy) {
      case CriticyType.error:
        return {
          Icon: <ErrorIcon fill="#fff" height="16px" width="16px" />,
          background: "red",
        };
      case CriticyType.info:
        return {
          Icon: <InfoIcon fill="#fff" height="16px" width="16px" />,
          background: "blue",
        };
      case CriticyType.warning:
        return {
          Icon: <WarningIcon fill="#fff" height="16px" width="16px" />,
          background: "yellow",
        };
      case CriticyType.success:
        return {
          Icon: <SuccessIcon fill="#fff" height="16px" width="16px" />,
          background: "green",
        };
      default:
        return { Icon: null, background: "blue" };
    }
  }

  useEffect(() => {
    if (message) {
      queue.push(message);
      setQueue([...queue]);
      dropTimer(queue.length);
    }
  }, [message]);

  return (
    <>
      {queue.length > 0 && (
        <StyContainer id={`${id}-toast-id`}>
          <StyToastWrapper id={`${id}-toast-messages-id`}>
            {queue.map((item, index) => {
              const { Icon, background } = handleCriticy(item.criticy);
              return (
                <StyToast
                  key={`${id}-message-${index}`}
                  id={`${id}-message${index}-id`}
                  duration={time}
                  background={background}
                  className="messageClass"
                >
                  <StyIconWrapper>{Icon}</StyIconWrapper>
                  <StyContentWrapper>
                    <Text
                      id={`${id}-message${index}-text-id`}
                      value={item.message}
                      size="16px"
                    />
                  </StyContentWrapper>
                  <StyIconWrapper>
                    <div
                      id={`${id}-message${index}-close-id`}
                      onClick={() => close(`${id}-message${index}-id`)}
                      style={{ cursor: "pointer" }}
                    >
                      <CloseXIcon width="12px" height="12px" fill="#fff" />
                    </div>
                  </StyIconWrapper>
                </StyToast>
              );
            })}
          </StyToastWrapper>
        </StyContainer>
      )}
    </>
  );
};

export default HstToast;
