import { FC, useEffect } from "react";
import { useAppDispatch } from "../store";
import { getMovies } from "../store/slices/movies-slice";
import CardList from "../components/card-list";
import Filter from "../components/filter";

const StartPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <CardList />
    </>
  );
};

export default StartPage;
