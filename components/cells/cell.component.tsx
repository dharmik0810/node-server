import React, { FunctionComponent } from "react";

import "./cell.style.scss";

const Cell: FunctionComponent<any> = ({ id, ...props }) => {
  return (
    <input
      className="cell-input"
      id={id}
      onChange={props.onCellValueChange}
      value={props.sheetData[id]}
    />
  );
};

export default Cell;
