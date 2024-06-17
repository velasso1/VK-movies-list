import { FC, useEffect, useState } from "react";
import LikeImage from "../../pictures/like.svg";
import { likePicture } from "../../store/slices/pictures-slice";
import { useAppDispatch, useAppSelector } from "../../store";

interface IlikeProps {
  id: string;
}

const Like: FC<IlikeProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const likedPictures = useAppSelector((state) => state.pictures.likedPictures);
  const [color, setColor] = useState("0");

  useEffect(() => {
    setColor(likedPictures.includes(id) ? "350" : "0");
  }, [id, likedPictures]);

  return (
    <>
      <img
        onClick={(e) => {
          e.stopPropagation();
          dispatch(likePicture(id));
        }}
        className="card__like"
        src={LikeImage}
        alt="like"
        style={{ filter: `saturate(${color}%)` }}
      />
    </>
  );
};

export default Like;
