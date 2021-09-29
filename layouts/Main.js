import React, { useState } from "react";
import SearchInput from "../components/search-input";
import Pagination from "../components/pagination";
import AddData from "../components/add-data";
import { Container } from "react-bootstrap";

const Main = ({ users }) => {
  const [product, setProduct] = useState(users);

  return (
    <Container>
      <AddData />
      <SearchInput product={product} setProduct={setProduct} />
      <Pagination data={product} dataLimit={10} pageLimit={5} />
    </Container>
  );
};

export default Main;
