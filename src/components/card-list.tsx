import { FC } from "react";
import Card from "./ui/card";
import { IMovieItem } from "../types/card-props";
import { useAppSelector } from "../store";
import { RootState } from "../store";
// import { getMorePictures } from "../store/slices/movies-slice";
// import { useAppDispatch } from "../store";

const CardList: FC = () => {
  // const dispatch = useAppDispatch();

  // const [state, setState] = useState({
  //   checked: true,
  // });
  // const [pageCount, setPageCount] = useState(1);

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
      <div className="filter">
        Фильтровать: FILTER BY <strong>GENRES</strong>, <strong>RATING</strong>,{" "}
        <strong>YEAR</strong>
      </div>

      <div className="card-list">
        {!cardInfo.length || !cardInfo ? (
          <div>Пока что здесь ничего нет</div>
        ) : (
          cardInfo.map((item) => {
            return <Card key={item.id} movieItem={item} />;
          })
        )}
      </div>
      <div className="back-button">
        <button
          className="return-button"
          // onClick={() => {
          //   // dispatch(getMorePictures(pageCount));
          //   setPageCount((prev) => prev + 1);
          // }}
        >
          Следующая страница
        </button>
      </div>
    </>
  );
};

export default CardList;
