import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useRouter } from "next/router";

function UserList({ detail }) {
  const router = useRouter();
  const openDetail = (id) => {
    router.push("/about/" + id);
  };

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={detail.image} />
          <Card.Body>
            <Card.Title>{detail.title}</Card.Title>
            <Card.Text>{detail.description}</Card.Text>
            <Button variant="primary" onClick={() => openDetail(detail.id)}>
              Detail
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default UserList;
