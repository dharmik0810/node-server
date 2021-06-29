import React, { ChangeEvent } from "react";
import { idText } from "typescript";
import Grid from "../grid/grid.component";

import "./excel-grid.style.scss";
import CustomButton from "../custom-button/custom-button.component";

type MyState = {
  sheetData: Object;
};

class ExcelGrid extends React.Component<{}, MyState> {
  state: MyState = { sheetData: {} };

  onCellValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    this.setState({ sheetData: { ...this.state.sheetData, [id]: value } });
    console.log(this.state.sheetData);
  };
  render() {
    return (
      <div className="app__container">
    <div className="app__header">
      <div className="app__title">
        Excel
      </div>
      <CustomButton type='submit'>
        Save data
      </CustomButton>
    </div>
    <Grid
        sheetData={this.state.sheetData}
        onCellValueChange={this.onCellValueChange}
      />
  </div>
    );
  }
}

export default ExcelGrid;
