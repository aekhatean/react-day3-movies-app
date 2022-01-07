import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Paginator(props) {
  const { page, currIndex, api } = props;

  useEffect(() => {
    api.get(`&page=${currIndex}`).then((res) => console.log(res.data));
  }, [page, currIndex, api]);

  const firstPage = () => {
    return `/${page}/1`;
  };

  const prevPage = () => {
    const prevIndex = parseInt(currIndex) - 1;

    try {
      if (api.get(`&page=${prevIndex}`) && prevIndex > 0) {
        return `/${page}/${prevIndex}`;
      } else {
        return `/${page}/${currIndex}`;
      }
    } catch (err) {
      if (err) {
        console.log("No previous page");
      }
    }
  };
  const nextPage = () => {
    const nextIndex = parseInt(currIndex) + 1;
    try {
      if (api.get(`&page=${nextIndex}`)) {
        return `/${page}/${nextIndex}`;
      } else {
        return `/${page}/${currIndex}`;
      }
    } catch (err) {
      if (err) {
        console.log("No previous page");
      }
    }
  };

  console.log(firstPage, page, currIndex, api);
  return (
    <nav aria-label="navigation" className="mt-5">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to={firstPage}>
            First page
          </Link>
        </li>

        <li className="page-item">
          <Link className="page-link" to={prevPage}>
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={nextPage}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
