import { FC, useEffect } from "react";
import { IMovieItem } from "../../types/card-props";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../../pictures/placeholder.webp";

import Like from "./like-picture";

interface CardProps {
  movieItem: IMovieItem;
}

const Card: FC<CardProps> = ({ movieItem }) => {
  // const [imageIsLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const movieName = movieItem.name ? movieItem.name : movieItem.alternativeName;
  return (
    <div
      className="card"
      onClick={() => navigate(`/current-card/${movieItem.id}`)}
    >
      <div className="card__id">Дата выхода: {movieItem.year}</div>
      {/* <div className="card__id">
        {!movieItem.genres || !movieItem ? (
          <div>Loading</div>
        ) : (
          movieItem.genres.map((item, key) => {
            return (
              <>
                <span key={key} className="card__genre">
                  {item.name}
                </span>{" "}
              </>
            );
          })
        )}
      </div> */}

      <div className="card__image">
        <img
          loading="lazy"
          src={
            !movieItem.poster
              ? `${placeholderImage}`
              : `${movieItem.poster.url}`
          }
          className="card__picture"
          alt={movieName}
          // onLoad={() => setIsLoading(false)}
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
