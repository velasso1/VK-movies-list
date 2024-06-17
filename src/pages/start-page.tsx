import { FC, useEffect } from "react";
import { useAppDispatch } from "../store";
import { getMovies } from "../store/slices/movies-slice";
import CardList from "../components/card-list";

const StartPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <CardList />
    </>
  );
};

export default StartPage;
