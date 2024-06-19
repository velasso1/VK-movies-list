import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { InfromationItem } from "../../types/movie-information";
import { toggleGenre } from "../../store/slices/movie-information-slice";

const GenresDropdown: FC = () => {
  const dispatch = useAppDispatch();
  const items: InfromationItem[] = useAppSelector(
    (state) => state.movieInformation.genres
  );

  const selectedGenres: string[] = useAppSelector(
    (state) => state.movieInformation.toggleGenres
  );

  const requestStatus = useAppSelector((state) => state.movies.status);

  return (
    <div className="filter__genres-dropdown">
      <div
        className={`filter__genres-container${
          requestStatus === "dataReceived" ? "" : "-blocked"
        }`}
      >
        {!items ? (
          <div>Loading</div>
        ) : (
          items.map((item, key) => {
            return (
              <div
                className={`filter__genres-item${
                  selectedGenres.includes(item.name) ? "-selected" : ""
                }`}
                key={key}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleGenre(item.name));
                }}
              >
                {item.name}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GenresDropdown;
