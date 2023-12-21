export class ChartDataArray {
  dataArray;

  constructor(dataArray) {
    this.dataArray = dataArray;
  }

  getDataArray() {
    return this.dataArray;
  }

  updateDataObjectTitle(newTitle, dataObjectIndex) {
    const newDataArray = this.dataArray.map((dataObject, index) => {
      if (index === dataObjectIndex) {
        return { ...dataObject, title: newTitle };
      }
      return dataObject;
    });
    return newDataArray;
  }

  updateDataObjectXValue(newXValue, dataObjectIndex) {
    const newDataArray = this.dataArray.map((dataObject, index) => {
      if (index === dataObjectIndex) {
        return { ...dataObject, x: newXValue };
      }
      return dataObject;
    });
    return newDataArray;
  }

  updateDataObjectYValue(newYValue, dataObjectIndex) {
    const newDataArray = this.dataArray.map((dataObject, index) => {
      if (index === dataObjectIndex) {
        return { ...dataObject, y: newYValue };
      }
      return dataObject;
    });
    return newDataArray;
  }

  addDataObject() {
    return [...this.dataArray, { title: "", x: 0, y: 0 }];
  }

  removeDataObject(dataObjectIndex) {
    const newDataArray = this.dataArray.filter(
      (dataObject, index) => index !== dataObjectIndex
    );
    return newDataArray;
  }
}
