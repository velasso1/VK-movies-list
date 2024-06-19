import { FC } from "react";
// import { useAppDispatch } from "../store";
import CardList from "../components/card-list";
import Filter from "../components/filter";

const StartPage: FC = () => {
  // const dispatch = useAppDispatch();

  return (
    <>
      <Filter />
      <CardList />
    </>
  );
};

export default StartPage;
