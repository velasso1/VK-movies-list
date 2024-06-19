import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store";
import { getOneMovie } from "../store/slices/movies-slice";

import CurrentArticle from "../components/current-article";
import { IMovieItem } from "../types/card-props";

const ArticlePage: FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(getOneMovie(movieId));
    }
  }, [dispatch, movieId]);

  const movieItem: IMovieItem = useAppSelector(
    (state) => state.movies.currentMovie
  );

  return (
    <>
      <div className="back-button"></div>
      <CurrentArticle movieItem={movieItem} />
    </>
  );
};

export default ArticlePage;
