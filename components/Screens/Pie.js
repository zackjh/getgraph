import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { VictoryPie } from "victory-native";
import ChartPage from "../UI/ChartPage";
import ChartSettings, {
  TextInputRow,
  ColorInputRow,
  StepperInputRow,
} from "../UI/ChartSettings";
import VictoryChartWrapper from "../UI/VictoryChartWrapper";
import ColorPickerModal from "../UI/ColorPickerModal";
import DataInput from "../UI/DataInput";

export default function Pie() {
  // Define state variables
  //// Chart data
  const [dataArray, setDataArray] = useState([
    { title: "Title 1", value: 100 },
    { title: "Title 2", value: 200 },
    { title: "Title 3", value: 400 },
  ]);

  //// Chart settings
  const [chartTitle, setChartTitle] = useState("Your Chart Title");
  const [chartPadding, setChartPadding] = useState(70);
  const [backgroundColor, setBackgroundColor] = useState("#D6D6D6");

  //// Modal visibility
  const [backgroundColorSelectorVisible, setBackgroundColorSelectorVisible] =
    useState(false);

  // Define event handlers
  function handleTitleChange(newTitle, targetIndex) {
    const newDataArray = dataArray.map((dataObj, index) => {
      if (index === targetIndex) {
        return { ...dataObj, title: newTitle };
      }
      return dataObj;
    });

    setDataArray(newDataArray);
  }

  function handleValueChange(newValue, targetIndex) {
    const newDataArray = dataArray.map((dataObj, index) => {
      if (index === targetIndex) {
        return { ...dataObj, value: newValue };
      }
      return dataObj;
    });

    setDataArray(newDataArray);
  }

  function handleDeleteRow(targetIndex) {
    const newDataArray = dataArray.filter(
      (dataObj, index) => index !== targetIndex
    );

    setDataArray(newDataArray);
  }

  function handleAddRow() {
    const newDataArray = [...dataArray, { title: "", value: 0 }];
    setDataArray(newDataArray);
  }

  return (
    <ChartPage>
      <ColorPickerModal
        visible={backgroundColorSelectorVisible}
        value={backgroundColor}
        onDismiss={() => setBackgroundColorSelectorVisible(false)}
        onComplete={({ hex }) => setBackgroundColor(hex)}
      />

      <VictoryChartWrapper backgroundColor={backgroundColor}>
        <Text variant="headlineSmall" style={styles.chartTitle}>
          {chartTitle}
        </Text>
        <VictoryPie
          data={dataArray}
          x="title"
          y={(dataObj) => (isNaN(dataObj.value) ? 0 : Number(dataObj.value))}
          colorScale="qualitative"
          padding={chartPadding}
        />
      </VictoryChartWrapper>

      <ChartSettings>
        <TextInputRow
          label="Chart Title"
          value={chartTitle}
          onChangeText={(newChartTitle) => setChartTitle(newChartTitle)}
        />
        <StepperInputRow
          label="Chart Padding"
          value={chartPadding}
          onDecrease={() => setChartPadding(chartPadding - 2)}
          onIncrease={() => setChartPadding(chartPadding + 2)}
        />
        <ColorInputRow
          label="Background Color"
          value={backgroundColor}
          onChipPress={() => setBackgroundColorSelectorVisible(true)}
          onReset={() => setBackgroundColor("#ECEFF1")}
        />
      </ChartSettings>

      <DataInput
        dataArray={dataArray}
        onTitleChange={handleTitleChange}
        onValueChange={handleValueChange}
        onDeleteRow={handleDeleteRow}
        onAddRow={handleAddRow}
      />
    </ChartPage>
  );
}

const styles = StyleSheet.create({
  chartTitle: {
    height: 30,
    top: 20,
    textAlign: "center",
  },
});
