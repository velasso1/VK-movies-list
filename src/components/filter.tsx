import { FC, useState, useEffect } from "react";
import GenresDropdown from "./ui/genres-dropdown";
import { useAppDispatch } from "../store";
import { getGenres } from "../store/slices/movie-information-slice";

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
      <div className="filter__genres">
        <button
          className="filter__button"
          onClick={() => visibleHandler("genres")}
        >
          Жанр
        </button>
        {visibleModal.genres && <GenresDropdown />}
      </div>
      <div className="filter__years">
        {" "}
        <button
          className="filter__button"
          onClick={() => visibleHandler("years")}
        >
          Год
        </button>
      </div>
      <div className="filter__rating">
        <button
          className="filter__button"
          onClick={() => visibleHandler("rating")}
        >
          Рейтинг
        </button>
      </div>
    </div>
  );
};

export default Filter;
