import { FC } from "react";

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
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
