import { FC, useState } from "react";
import { IMovieItem } from "../types/card-props";
import placeholderImage from "../pictures/placeholder.webp";

interface CurrentArticleProps {
  movieItem: IMovieItem;
}

const CurrentArticle: FC<CurrentArticleProps> = ({ movieItem }) => {
  const [imageIsLoading, setIsLoading] = useState(true);
  return (
    <div className="current-article">
      <div className="current-article__image">
        <div className="current-article__id">Card ID: {movieItem.id}</div>
        <img
          loading="lazy"
          // src={imageIsLoading ? `${placeholderImage}` : `${urls.regular}`}
          className="current-article__picture"
          // alt={alt_description}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="current-article__text">
        {/* <div className="current-article__title">{alt_description}</div> */}
      </div>
    </div>
  );
};

export default CurrentArticle;
