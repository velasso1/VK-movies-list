import { FC, useState } from "react";
import { IMovieItem } from "../types/card-props";
import placeholderImage from "../pictures/placeholder.webp";
import { useNavigate } from "react-router-dom";

interface CurrentArticleProps {
  movieItem: IMovieItem;
}

const CurrentArticle: FC<CurrentArticleProps> = ({ movieItem }) => {
  const navigate = useNavigate();
  // const [imageIsLoading, setIsLoading] = useState(true);
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="back">
        <button className="back-button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
      <div className="current-article">
        <div className="current-article__image">
          <div className="current-article__id">Card ID: {movieItem.id}</div>
          <img
            loading="lazy"
            src={
              !movieItem.poster?.url
                ? `${placeholderImage}`
                : `${movieItem.poster?.url}`
            }
            className="current-article__picture"
            // alt={alt_description}
            // onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="current-article__text">
          <div className="current-article__title">
            {movieItem.name ? movieItem.name : movieItem.alternativeName}
          </div>
          <div className="current-article__rating">
            Рейтинг Кинопоиск: {movieItem.rating.kp} Рейтинг IMDB:{" "}
            {movieItem.rating.imdb}
          </div>
          <div className="current-article__year">
            <div>Год производства:</div>
            <div>{movieItem.year}</div>
          </div>
          <div className="current-article__genres">
            <div className="">Жанры:</div>
            <div className="">
              {" "}
              {movieItem.genres.map((item, key) => {
                return <span key={key}>{item.name} </span>;
              })}
            </div>
          </div>
          <div
            className={`current-article__description${expand ? "-full" : ""}`}
            onClick={() => setExpand(!expand)}
          >
            <div className="">
              {movieItem.description
                ? movieItem.description
                : "Описание отсутствует"}
            </div>
          </div>
          {!expand && "*Нажмите на описание чтобы раскрыть полностью"}
        </div>
      </div>
    </>
  );
};

export default CurrentArticle;
