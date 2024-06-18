import { FC, useState } from "react";
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

  return (
    <div className="filter__genres-dropdown">
      <div className="filter__genres-container">
        {!items ? (
          <div>Loading</div>
        ) : (
          items.map((item, key) => {
            return (
              <div
                className="filter__genres-item"
                key={key}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(toggleGenre(item.name));
                }}
                style={{
                  backgroundColor: selectedGenres.includes(item.name)
                    ? "#4b6df6"
                    : "white",
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
