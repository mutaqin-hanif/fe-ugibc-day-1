import React from "react";
import { Form } from "react-bootstrap";
import { host } from "../configs";

function SearchInput({ product, setProduct }) {
  const searchProduct = (e) => {
    let value = e.target.value;
    if (value.length === 0) {
      (async function () {
        const res = await host.get("products");
        const data = res.data;
        setProduct(data);
      })();
    }
    setProduct(
      product.filter((item) => item.title.toLowerCase().search(value) !== -1)
    );
  };

  return (
    <div>
      <Form.Control
        size="sm"
        type="text"
        placeholder="Search Product..."
        onChange={searchProduct}
      />
    </div>
  );
}

export default SearchInput;
