import { FC } from "react";
import config from "../../../auxuliary.json";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleYear } from "../../store/slices/movie-information-slice";

const YearsDropdown: FC = () => {
  const dispatch = useAppDispatch();

  const selectedYears: string[] = useAppSelector(
    (state) => state.movieInformation.toggleYears
  );

  return (
    <div className="filter__years-dropdown">
      <div
        className="filter__years-container"
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
