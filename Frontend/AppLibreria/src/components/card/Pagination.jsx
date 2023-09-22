import "./pagination.css";
export const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumber = [];
  console.log(Math.ceil(totalProducts / productsPerPage));
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const onSpecificPage = (e) => {
    setCurrentPage(e);
  };
  return (
    <>
      <nav className="pagination justify-content-center" role="navigation" aria-label="pagination">
        <li className="page-item" aria-disabled="true">
          <a
            className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
            onClick={onPreviusPage}
          >
            Anterior
          </a>
        </li>
        <ul className="pagination ul">
          {pageNumber.map((noPage) => (
            <li className="page-item" key={noPage}>
              <a
                className={`page-link ${
                  noPage === currentPage ? "active" : ""
                }`}
                onClick={() => onSpecificPage(noPage)}
              >
                {noPage}
              </a>
            </li>
          ))}
        </ul>
        <li className="page-item">
          <a
            className={`page-link ${
              currentPage >= pageNumber.length ? "disabled" : ""
            }`}
            onClick={onNextPage}
          >
            Siguiente
          </a>
        </li>
      </nav>
    </>
  );
};
