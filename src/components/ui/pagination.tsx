import { FC } from "react";
import { useAppSelector } from "../../store";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  const pages: number = useAppSelector((state) => state.movies.pages);

  return (
    <div className="back-button">
      <button
        className="previous-page-button"
        disabled={page === 1 ? true : false}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Предыдущая страница
      </button>
      <div className="page">{page}</div>
      <button
        disabled={page >= pages ? true : false}
        className="next-page-button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Следующая страница
      </button>
    </div>
  );
};

export default Pagination;
