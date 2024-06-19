import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleYear } from "../../store/slices/movie-information-slice";

import config from "../../../auxuliary.json";

const YearsDropdown: FC = () => {
  const dispatch = useAppDispatch();

  const selectedYears: string[] = useAppSelector(
    (state) => state.movieInformation.toggleYears
  );

  const requestStatus = useAppSelector((state) => state.movies.status);

  return (
    <div className="filter__years-dropdown">
      <div
        className={`filter__years-container${
          requestStatus === "dataReceived" ? "" : "-blocked"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {config.years.map((item, key) => {
          return (
            <div
              className={`filter__years-item${
                selectedYears.includes(item) ? "-selected" : ""
              }`}
              key={key}
              onClick={() => dispatch(toggleYear(item))}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearsDropdown;
