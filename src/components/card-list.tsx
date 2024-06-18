import { FC, useState, useEffect } from "react";
import Card from "./ui/card";
import { IMovieItem } from "../types/card-props";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { getMovies } from "../store/slices/movies-slice";
import { useNavigate } from "react-router-dom";
import Pagination from "./ui/pagination";

const CardList: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies(page));
    navigate(`/page/${page}`);

    window.scrollTo({
      top: 150,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch, page]);

  const cardInfo: IMovieItem[] = useAppSelector(
    (state: RootState) => state.movies.movies
  );

  // const likedPosts: string[] = useAppSelector(
  //   (state) => state.movies.likedMovies
  // );

  // const newCardInfo =
  //   state.checked === true
  //     ? cardInfo
  //     : cardInfo.filter((item) => likedPosts.includes(item.id));

  return (
    <>
      <Pagination page={page} setPage={setPage} />
      <div className="card-list">
        {!cardInfo.length || !cardInfo ? (
          <div>Пока что здесь ничего нет</div>
        ) : (
          cardInfo.map((item) => {
            return <Card key={item.id} movieItem={item} />;
          })
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default CardList;
