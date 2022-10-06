export function sortByValue(data: any, dataNameNew: any) {
    let dataValueSort: any = [];
    let dataName: string = "";
    let dataValue: string = "";
    data.forEach((value: any) => {
      if (dataNameNew.includes(value.name)) {
        dataValueSort.push(value);
      }
    });
    dataValueSort = dataValueSort.sort((a: any, b: any) => {
      return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
    });
    dataValueSort.forEach((value: any) => {
      if (dataName) {
        dataName = `${dataName}; ${value.name}`;
        dataValue = `${dataValue};${value.value}`;
      } else {
        dataName = `${value.name}`;
        dataValue = `${value.value}`;
      }
    });
  return {dataName, dataValue, dataValueSort};
}

export function removeByValue(data: any, dataSelected: any, dataRemove: any) {
    let dataValueSort: any = [];
    let dataName: string = "";
    let dataValue: string = "";
    data.forEach((value: any) => {
      if (dataSelected.includes(value.name) && dataRemove.name !== value.name) {
        dataValueSort.push(value);
      }
    });
    dataValueSort = dataValueSort.sort((a: any, b: any) => {
      return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
    });
    dataValueSort.forEach((value: any) => {
      if (dataName) {
        dataName = `${dataName}; ${value.name}`;
        dataValue = `${dataValue};${value.value}`;
      } else {
        dataName = `${value.name}`;
        dataValue = `${value.value}`;
      }
    });
  return {dataName, dataValue, dataValueSort};
}
