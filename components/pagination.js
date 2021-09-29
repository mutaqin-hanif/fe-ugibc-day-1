import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import UserList from "../components/user-list";

export default function Pagination({ data, dataLimit, pageLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex =
      dataLimit < data.length
        ? currentPage * dataLimit - dataLimit
        : currentPage * data.length - data.length;
    const endIndex = startIndex + dataLimit;
    return dataLimit < data.length ? data.slice(startIndex, endIndex) : data;
  };

  const getPaginationGroup = () => {
    let altPageLimit =
      dataLimit < data.length ? parseInt(data.length / dataLimit) : data.length;
    let start =
      altPageLimit > pageLimit
        ? Math.floor((currentPage - 1) / pageLimit) * pageLimit
        : Math.floor((currentPage - 1) / altPageLimit) * altPageLimit;
    return new Array(altPageLimit > pageLimit ? pageLimit : altPageLimit)
      .fill()
      .map((_, id) => start + id + 1);
  };

  return (
    <>
      <Row>
        {getPaginatedData().map((user) => (
          <UserList key={user.id} detail={user} />
        ))}
      </Row>
      <Button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        prev
      </Button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <Button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? "active" : null}`}
        >
          <span>{item}</span>
        </Button>
      ))}

      {/* next Button */}
      <Button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
      >
        next
      </Button>
    </>
  );
}
