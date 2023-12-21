import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
} from "victory-native";
import ChartPage from "../UI/ChartPage";
import ChartSettings, {
  TextInputRow,
  StepperInputRow,
  ColorInputRow,
} from "../UI/ChartSettings";
import VictoryChartWrapper from "../UI/VictoryChartWrapper";
import ColorPickerModal from "../UI/ColorPickerModal";
import DataInput from "../UI/DataInput";

export default function Bar() {
  // Define state variables
  //// Chart data
  const [dataArray, setDataArray] = useState([
    { title: "Title 1", value: 100 },
    { title: "Title 2", value: 200 },
    { title: "Title 3", value: 400 },
  ]);

  //// Chart settings
  const [chartTitle, setChartTitle] = useState("Your Chart Title");
  const [chartWidth, setChartWidth] = useState(Dimensions.get("window").width);
  const [barWidth, setBarWidth] = useState(25);
  const [backgroundColor, setBackgroundColor] = useState("#D6D6D6");
  const [barColor, setBarColor] = useState("#000000");

  //// Modal visibility
  const [backgroundColorSelectorVisible, setBackgroundColorSelectorVisible] =
    useState(false);
  const [barColorSelectorVisible, setBarColorSelectorVisible] = useState(false);

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

      <ColorPickerModal
        visible={barColorSelectorVisible}
        value={barColor}
        onDismiss={() => setBarColorSelectorVisible(false)}
        onComplete={({ hex }) => setBarColor(hex)}
      />

      <VictoryChartWrapper backgroundColor={backgroundColor}>
        <Text variant="headlineSmall" style={styles.chartTitle}>
          {chartTitle}
        </Text>
        <VictoryChart width={chartWidth} domainPadding={20}>
          <VictoryGroup color={barColor}>
            <VictoryBar
              data={dataArray}
              x="title"
              y={(dataObj) =>
                isNaN(dataObj.value) ? 0 : Number(dataObj.value)
              }
              labels={({ datum }) => datum._y}
              barWidth={barWidth}
            />
          </VictoryGroup>
          <VictoryAxis />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </VictoryChartWrapper>

      <ChartSettings>
        <TextInputRow
          label="Chart Title"
          value={chartTitle}
          onChangeText={(newChartTitle) => setChartTitle(newChartTitle)}
        />
        <StepperInputRow
          label="Chart Width"
          value={chartWidth}
          onDecrease={() => setChartWidth(Number(chartWidth - 10))}
          onIncrease={() => setChartWidth(Number(chartWidth + 10))}
        />
        <StepperInputRow
          label="Bar Width"
          value={barWidth}
          onDecrease={() => setBarWidth(Number(barWidth - 1))}
          onIncrease={() => setBarWidth(Number(barWidth + 1))}
        />
        <ColorInputRow
          label="Background Color"
          value={backgroundColor}
          onChipPress={() => setBackgroundColorSelectorVisible(true)}
          onReset={() => setBackgroundColor("#ECEFF1")}
        />
        <ColorInputRow
          label="Bar Color"
          value={barColor}
          onChipPress={() => setBarColorSelectorVisible(true)}
          onReset={() => setBarColor("#000000")}
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
