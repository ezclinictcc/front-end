import moment from "moment";

export default function currentTimeSalutation() {
  const time: Date = new Date();

  if (
    moment(time).format("HH:mm:ss") >= "06:00:00" &&
    moment(time).format("HH:mm:ss") <= "11:59:59"
  ) {
    return "Bom dia";
  }
  if (
    moment(time).format("HH:mm:ss") >= "12:00:00" &&
    moment(time).format("HH:mm:ss") <= "17:59:59"
  ) {
    return "Boa tarde";
  }
  if (moment(time).format("HH:mm:ss") >= "18:00:00") {
    return "Boa noite";
  }

  return "Olá";
}
