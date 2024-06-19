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

  // const returnHandler = (): void => {
  //   navigate("/");
  //   dispatch(clearOnePicture());
  // };

  return (
    <>
      <div className="back-button">
        {/* <button className="return-button" onClick={() => returnHandler()}>
          &#8592; Вернуться
        </button> */}
      </div>
      <CurrentArticle movieItem={movieItem} />
    </>
  );
};

export default ArticlePage;
