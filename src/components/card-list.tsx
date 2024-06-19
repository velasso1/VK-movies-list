import { FC, useState, useEffect } from "react";
import { IMovieItem } from "../types/card-props";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { getMovies } from "../store/slices/movies-slice";
import { useNavigate } from "react-router-dom";
import { generateUrl } from "../utils/url-generator";

import Card from "./ui/card";
import Loader from "./ui/loader";
import Pagination from "./ui/pagination";

const CardList: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const statePage = useAppSelector((state) => state.movieInformation.page);
  const movieInfoState = useAppSelector((state) => state.movieInformation);
  const [page, setPage] = useState(+statePage);

  useEffect(() => {
    const url = generateUrl(movieInfoState, `${page}`);
    dispatch(getMovies(url, `${page}`));
    navigate(`/page/${page}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch, page, statePage]);

  const cardInfo: IMovieItem[] = useAppSelector(
    (state: RootState) => state.movies.movies
  );

  const requestStatus = useAppSelector((state) => state.movies.status);

  // const likedPosts: string[] = useAppSelector(
  //   (state) => state.movies.likedMovies
  // );

  // const newCardInfo =
  //   state.checked === true
  //     ? cardInfo
  //     : cardInfo.filter((item) => likedPosts.includes(item.id));

  return (
    <>
      {requestStatus === "dataReceived" ? (
        <>
          {" "}
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardList;
