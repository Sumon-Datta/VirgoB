import React, { useId } from "react";

const Pagina = ({ pagination, setPagination }) => {
  const id = useId();
  const totalBtns = Math.ceil(pagination.total / pagination.limit);
  const handleNext = () => {
    if (pagination.page === totalBtns) return;
    setPagination((p) => {
      return { ...p, page: p.page + 1 };
    });
  };
  const handlePrevious = () => {
    if (pagination.page === 1) return;
    setPagination((p) => {
      return { ...p, page: p.page - 1 };
    });
  };
  const handleChangePage = (number) => {
    if (pagination.page === number) return;
    setPagination((p) => {
      return { ...p, page: number };
    });
  };

  return (
    <div aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            onClick={handlePrevious}
            className="page-link text-dark"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {[...new Array(totalBtns)].map((_, i) => (
          <li key={id + i} className={`page-item `}>
            <button
              onClick={() => handleChangePage(i + 1)}
              className={`page-link ${
                pagination.page === i + 1
                  ? " bg-dark text-light px-3"
                  : "text-dark"
              }`}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={handleNext}
            className="page-link text-dark"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagina;
