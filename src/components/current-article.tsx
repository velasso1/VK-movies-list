import { FC, useState } from "react";
import { ICardProps } from "../types/card-props";
import placeholderImage from "../pictures/placeholder.webp";

const CurrentArticle: FC<ICardProps> = ({ id, urls, alt_description }) => {
  const [imageIsLoading, setIsLoading] = useState(true);
  return (
    <div className="current-article">
      <div className="current-article__image">
        <div className="current-article__id">Card ID: {id}</div>
        <img
          loading="lazy"
          src={imageIsLoading ? `${placeholderImage}` : `${urls.regular}`}
          className="current-article__picture"
          alt={alt_description}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="current-article__text">
        <div className="current-article__title">{alt_description}</div>
        <div className="current-article__about-picture">
          Давно выяснено, что при оценке дизайна и композиции читаемый текст
          мешает сосредоточиться. Lorem Ipsum используют потому, что тот
          обеспечивает более или менее стандартное заполнение шаблона, а также
          реальное распределение букв и пробелов в абзацах, которое не
          получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст..
          Здесь ваш текст.." Многие программы электронной вёрстки и редакторы
          HTML используют Lorem Ipsum в качестве текста по умолчанию, так что
          поиск по ключевым словам "lorem ipsum" сразу показывает, как много
          веб-страниц всё ещё дожидаются своего настоящего рождения. За
          прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
          версии появились по ошибке, некоторые - намеренно (например,
          юмористические варианты).
        </div>
      </div>
    </div>
  );
};

export default CurrentArticle;
