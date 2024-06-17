import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store";
import {
  getCurrentPicture,
  clearOnePicture,
} from "../store/slices/pictures-slice";

import CurrentArticle from "../components/current-article";

const ArticlePage: FC = () => {
  const { pictureId } = useParams<{ pictureId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pictureId) {
      dispatch(getCurrentPicture(pictureId));
    }
  }, [dispatch, pictureId]);

  const { id, urls, alt_description } = useAppSelector(
    (state) => state.pictures.currentPicture
  );

  const returnHandler = (): void => {
    navigate("/test-alfa-preview");
    dispatch(clearOnePicture());
  };

  return (
    <>
      <div className="back-button">
        <button className="return-button" onClick={() => returnHandler()}>
          &#8592; Вернуться
        </button>
      </div>
      <CurrentArticle id={id} urls={urls} alt_description={alt_description} />
    </>
  );
};

export default ArticlePage;
