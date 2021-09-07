import { FC, MouseEventHandler } from "react";
import "./stylesPagination.scss";

interface PaginationProps {
  perPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({ perPage, totalItems, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((num) => (
          <li
            className={"paginationItem"}
            key={num}
            onClick={() => paginate(num)}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
