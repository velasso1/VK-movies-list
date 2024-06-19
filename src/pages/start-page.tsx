import { FC } from "react";
import CardList from "../components/card-list";
import Filter from "../components/filter";

const StartPage: FC = () => {
  return (
    <>
      <Filter />
      <CardList />
    </>
  );
};

export default StartPage;
