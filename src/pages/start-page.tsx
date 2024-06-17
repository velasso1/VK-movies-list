import { FC, useEffect } from "react";
import { useAppDispatch } from "../store";
import { getPictures } from "../store/slices/pictures-slice";
import CardList from "../components/card-list";

const StartPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPictures());
  }, [dispatch]);

  return (
    <>
      <CardList />
    </>
  );
};

export default StartPage;
