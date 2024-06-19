import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleRating } from "../../store/slices/movie-information-slice";

import config from "../../../auxuliary.json";

const RatingDropdown: FC = () => {
  const dispatch = useAppDispatch();

  const selectedRating: string[] = useAppSelector(
    (state) => state.movieInformation.toggleRatings
  );

  const requestStatus = useAppSelector((state) => state.movies.status);

  return (
    <div className="filter__rating-dropdown">
      <div
        className={`filter__rating-container${
          requestStatus === "dataReceived" ? "" : "-blocked"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {config.rating.map((item, key) => {
          return (
            <div
              className={`filter__rating-item${
                selectedRating.includes(item) ? "-selected" : ""
              }`}
              key={key}
              onClick={() => dispatch(toggleRating(item))}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingDropdown;
