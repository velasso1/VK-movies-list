import { FC } from "react";
import config from "../../../auxuliary.json";

const YearsDropdown: FC = () => {
  return (
    <div className="filter__years-dropdown">
      <div
        className="filter__years-container"
        onClick={(e) => e.stopPropagation()}
      >
        {config.years.map((item) => {
          return <div className="filter__years-item">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default YearsDropdown;
