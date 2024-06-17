import { FC, useState } from "react";
import Card from "./ui/card";
import { ICardProps } from "../types/card-props";
import { useAppSelector } from "../store";
import { RootState } from "../store";
import { getMorePictures } from "../store/slices/pictures-slice";
import { useAppDispatch } from "../store";

const CardList: FC = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    checked: true,
  });
  const [pageCount, setPageCount] = useState(1);

  const cardInfo: ICardProps[] = useAppSelector(
    (state: RootState) => state.pictures.pictures
  );

  const likedPosts: string[] = useAppSelector(
    (state) => state.pictures.likedPictures
  );

  const newCardInfo =
    state.checked === true
      ? cardInfo
      : cardInfo.filter((item) => likedPosts.includes(item.id));

  return (
    <>
      <div className="filter">
        Показывать:
        <input type="checkbox" name="all" checked={state.checked} />
        <label
          onClick={() => {
            setState({ ...state, checked: true });
          }}
          htmlFor="all"
        >
          Все
        </label>
        <input type="checkbox" name="liked" checked={!state.checked} />
        <label
          onClick={() => {
            setState({ ...state, checked: false });
          }}
          htmlFor="liked"
        >
          Понравившиеся
        </label>
      </div>

      <div className="card-list">
        {!newCardInfo.length || !newCardInfo ? (
          <div>Пока что здесь ничего нет</div>
        ) : (
          newCardInfo.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                urls={item.urls}
                alt_description={item.alt_description}
              />
            );
          })
        )}
      </div>
      <div className="back-button">
        <button
          className="return-button"
          onClick={() => {
            dispatch(getMorePictures(pageCount));
            setPageCount(pageCount + 1);
          }}
        >
          Загрузить еще
        </button>
      </div>
    </>
  );
};

export default CardList;
