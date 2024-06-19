import { FC } from "react";
import { IMovieItem } from "../../types/card-props";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { writePageToState } from "../../store/slices/movie-information-slice";

import Like from "./like-picture";
import placeholderImage from "../../pictures/placeholder.webp";

interface CardProps {
  movieItem: IMovieItem;
}

const Card: FC<CardProps> = ({ movieItem }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { page } = useParams<string>();

  const movieName = movieItem.name ? movieItem.name : movieItem.alternativeName;
  return (
    <div
      className="card"
      onClick={() => {
        if (typeof page === "string") {
          dispatch(writePageToState(page));
        }
        navigate(`/current-card/${movieItem.id}`);
      }}
    >
      <div className="card__id">Дата выхода: {movieItem.year}</div>
      <div className="card__image">
        <img
          loading="lazy"
          src={
            !movieItem.poster?.url
              ? `${placeholderImage}`
              : `${movieItem.poster.url}`
          }
          className="card__picture"
          alt={movieName}
        />
      </div>
      <div className="card__about">{movieName}</div>

      <div className="card__interactive">
        <Like id={movieItem.id} />
        <div className="card__rating">
          Кинопоиск: {movieItem.rating.kp} IMDB: {movieItem.rating.imdb}
        </div>
      </div>
    </div>
  );
};

export default Card;
