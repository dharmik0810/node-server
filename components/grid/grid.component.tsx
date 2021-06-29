import React, { FunctionComponent } from "react";
import HeaderRow from "../header-row/header-row.component";
import Row from "../rows/row.component";

import "./grid.style.scss";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;
export const sheetSize = {
  width: 1000,
  height: 700,
};

const Grid: FunctionComponent<any> = ({ ...props }) => {
  const cols = Math.ceil(sheetSize.width / CELL_WIDTH);
  const rows = Math.ceil(sheetSize.height / CELL_HEIGHT);

  return (
    <div className="grid">
      <table className="grid__table">
        <thead>
          <HeaderRow cols={cols + 1} />
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((x, index) => (
            <Row key={index} cols={cols} rowId={index} {...props} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
