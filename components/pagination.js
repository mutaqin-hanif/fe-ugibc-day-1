import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import UserList from "../components/user-list";

export default function Pagination({ data, pageLimit, dataLimit }) {
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
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    console.log(new Array(pageLimit).fill().map((_, idx) => start + idx + 1));
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
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
