import { FC, useState, useEffect, MouseEvent } from "react";
import { useAppDispatch } from "../store";
import { getGenres } from "../store/slices/movie-information-slice";

import GenresDropdown from "./ui/genres-dropdown";
import YearsDropdown from "./ui/years-dropdown";
import RatingDropdown from "./ui/rating-dropdown";

type ILocalVisibleState = {
  genres: boolean;
  years: boolean;
  rating: boolean;
  [key: string]: boolean;
};

const Filter: FC = () => {
  const dispatch = useAppDispatch();

  const [visibleModal, setVisibleModal] = useState<ILocalVisibleState>({
    genres: false,
    years: false,
    rating: false,
  });

  const visibleHandler = (item: string): void => {
    setVisibleModal({
      ...visibleModal,
      genres: item !== "genres" ? false : !visibleModal.genres,
      years: item !== "years" ? false : !visibleModal.years,
      rating: item !== "rating" ? false : !visibleModal.rating,
    });
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className="filter">
      <div className="filter__genres" onClick={() => visibleHandler("genres")}>
        <div
          className={`filter__button-genres${
            visibleModal.genres ? "-dark" : ""
          }`}
        >
          <div className="filter__button-title">Жанр</div>
          <div
            className={`filter__button-icon${
              visibleModal.genres ? "" : "-start"
            }`}
          ></div>
          {visibleModal.genres && <GenresDropdown />}
        </div>
      </div>
      <div className="filter__years" onClick={() => visibleHandler("years")}>
        <div
          className={`filter__button-years${visibleModal.years ? "-dark" : ""}`}
        >
          <div className="filter__button-title">Год</div>
          <div
            className={`filter__button-icon${
              visibleModal.years ? "" : "-start"
            }`}
          ></div>
        </div>
        {visibleModal.years && <YearsDropdown />}
      </div>
      <div className="filter__rating">
        <div
          className={`filter__button-rating${
            visibleModal.rating ? "-dark" : ""
          }`}
          onClick={() => visibleHandler("rating")}
        >
          <div className="filter__button-title">Рейтинг IMDB</div>
          <div
            className={`filter__button-icon${
              visibleModal.rating ? "" : "-start"
            }`}
          ></div>
        </div>
        {visibleModal.rating && <RatingDropdown />}
      </div>
    </div>
  );
};

export default Filter;
