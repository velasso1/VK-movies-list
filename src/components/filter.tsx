import { FC, useState, useEffect, MouseEvent } from "react";
import { useAppDispatch } from "../store";
import { getGenres } from "../store/slices/movie-information-slice";

import GenresDropdown from "./ui/genres-dropdown";
import YearsDropdown from "./ui/years-dropdown";

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
    setVisibleModal({ ...visibleModal, [item]: !visibleModal[item] });
  };

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className="filter">
      <div className="filter__genres" onClick={() => visibleHandler("genres")}>
        <div
          className="filter__button-genres"
          style={{ backgroundColor: visibleModal.genres ? "#ccc" : "#fff" }}
        >
          <div className="filter__button-title">Жанр</div>
          <div className="filter__button-icon"></div>
          {visibleModal.genres && <GenresDropdown />}
        </div>
      </div>
      <div className="filter__years" onClick={() => visibleHandler("years")}>
        <div
          className="filter__button-years"
          style={{ backgroundColor: visibleModal.years ? "#ccc" : "#fff" }}
        >
          <div className="filter__button-title">Год</div>
          <div className="filter__button-icon"></div>
        </div>
        {visibleModal.years && <YearsDropdown />}
      </div>
      <div className="filter__rating">
        <div
          className="filter__button-rating"
          onClick={() => visibleHandler("rating")}
        >
          <div className="filter__button-title">Рейтинг</div>
          <div className="filter__button-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
