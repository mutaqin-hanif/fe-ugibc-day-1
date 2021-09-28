import React, { useState, useRef } from "react";
import { Button, Modal, FloatingLabel, Form, Alert } from "react-bootstrap";
import { host } from "../configs";

function ModalAdd({
  show,
  onHide,
  setMessage,
  setToastShow,
  setVisible,
  setVariant,
}) {
  const titleref = useRef();
  const priceref = useRef();
  const desref = useRef();
  const imgref = useRef();
  const catref = useRef();

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      title: titleref.current.value,
      price: parseFloat(priceref.current.value),
      description: desref.current.value,
      image: imgref.current.value,
      category: catref.current.value,
    };
    (async function () {
      await host
        .post("products", data)
        .then(() => {
          setToastShow(true);
          setVariant("success");
          setMessage("Data Berhasil Ditambahkan");
        })
        .catch(() => {
          setToastShow(true);
          setVariant("danger");
          setMessage("Data Gagal Ditambahkan");
        });
      setVisible(false);
    })();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitData}>
          <FloatingLabel controlId="title" label="Title">
            <Form.Control placeholder="Title" ref={titleref} />
          </FloatingLabel>
          <FloatingLabel controlId="desc" label="Description">
            <Form.Control placeholder="Description" ref={desref} />
          </FloatingLabel>
          <FloatingLabel controlId="price" label="Price">
            <Form.Control placeholder="Price" ref={priceref} />
          </FloatingLabel>
          <FloatingLabel controlId="img" label="Image Address">
            <Form.Control placeholder="Image Address" ref={imgref} />
          </FloatingLabel>
          <FloatingLabel controlId="category" label="Category">
            <Form.Control placeholder="Category" ref={catref} />
          </FloatingLabel>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function AddData() {
  const [visible, setVisible] = useState(false);
  const [toastShow, setToastShow] = useState(false);
  const [message, setMessage] = useState();
  const [variant, setVariant] = useState();
  const openForm = () => {
    setVisible(true);
  };
  return (
    <div>
      <Alert
        show={toastShow}
        variant={variant}
        onClose={() => setToastShow(false)}
        dismissible
      >
        {message}
      </Alert>
      <Button variant="primary" onClick={openForm}>
        Add Data
      </Button>
      <ModalAdd
        show={visible}
        onHide={() => setVisible(false)}
        setMessage={setMessage}
        setToastShow={setToastShow}
        setVisible={setVisible}
        setVariant={setVariant}
      />
    </div>
  );
}

export default AddData;
