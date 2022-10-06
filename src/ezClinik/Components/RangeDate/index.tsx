import React, { useState } from "react";
import { interval1hora, interval30min } from "../../utils/intervalDoctor";
import { FillButton } from "../Buttons/FillButton";
import CheckBoxGroup from "../CheckBoxGroup";
import SelectBox from "../SelectBox";
import Text from "../Text";
import {
  StyButtonConfirm,
  StyConfirm,
  StyContainer,
  StyContent,
  StyTimerContainer,
} from "./styles";

const RangeDate: React.FC<{}> = ({}) => {
  const [selectRange, setSelectRange] = useState<any[]>(interval1hora);
  const [selectedTimer, setSelectedTimer] = useState<any[]>([]);

  function handleCheck(valeu: any) {
    if (valeu[0] === "0") {
      setSelectRange(interval1hora);
    } else {
      setSelectRange(interval30min);
    }
    setSelectedTimer([]);
  }

  return (
    <StyContainer>
      <Text
        size="18px"
        fontWeight="600"
        value="Selecione os Horário Disponíveis"
      />
      <StyContent>
        <SelectBox
          id="clinicSpecialty-selectbox"
          name="clinicSpecialty"
          title="Horários de Atendimento"
          placeHolder="Selecione"
          dataOptions={selectRange}
          onChange={(selected: string[]) => setSelectedTimer(selected)}
          isCheckBox
          dataUpdate={selectRange}
          hasFilter={false}
          hasMargin={false}
          width="50%"
          bindForm={false}
        />
        <CheckBoxGroup
          id="zoom"
          name="zoomScroll"
          title="Intervalo de tempo"
          options={[
            {
              value: "0",
              label: "1 hora",
            },
            {
              value: "1",
              label: "30 minutos",
            },
          ]}
          initialValue={"0"}
          onChange={(event: string[]) => handleCheck(event)}
          bindForm={true}
        />
      </StyContent>
      <StyConfirm>
        <Text size="16px" value="Horários Selecionados:" />
        <StyTimerContainer>
          {selectedTimer?.map((time: any) => {
            return <Text size="16px" value={time.name} />;
          })}
        </StyTimerContainer>
      </StyConfirm>
      <StyButtonConfirm>
        <FillButton id="login" type="button" width="150px" title="Confirmar" />
      </StyButtonConfirm>
    </StyContainer>
  );
};

export default RangeDate;
